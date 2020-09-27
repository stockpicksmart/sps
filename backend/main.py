from flask import *
from json import *
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
import requests
from datetime import datetime
import time
import base64


from pandas_datareader import data
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt
# import Normalizer
from sklearn.preprocessing import Normalizer
# import machine learning libraries
from sklearn.pipeline import make_pipeline
from sklearn.cluster import KMeans
# PCA
from sklearn.decomposition import PCA
import io

# app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app = Flask(__name__ , static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/getfoo1', methods=['Get'])
def getFoo1():
    with open("static/static/media/foo1.png", "rb") as img_file:
        b64_string = base64.b64encode(img_file.read())
    print(b64_string)
    return b64_string
    # return send_file('static/static/media/foo1.png', mimetype='image/png', attachment_filename='foo1.png') 


@app.route('/kmeans', methods=['POST'])



def kmeans():
    print("KMEANS")


    # create the Normalizer
    normalizer = Normalizer()

    #Request "Basket" or "Cart" of stocks from front end
    cart = request.get_json()
    #Store results in companies_dict
    companies_dict = cart['cart']
    print(cart['start'])
    print(cart['end'])
    print(cart)
    #Sort them
    companies = sorted(companies_dict, key=lambda x: x[0])
    print(companies)
    # Define which online source to use
    data_source = 'yahoo'

    # Get start and end date from view
    start_date = cart['start']
    end_date = cart['end']

    # Use pandas_datareader.data.DataReader to load the desired data list(companies_dict.values()) used for python 3 compatibility
    #panel_data = data.DataReader(list(companies_dict.values()), data_source, start_date, end_date)
    panel_data = data.DataReader(list(companies_dict), data_source, start_date, end_date)

    #print(panel_data.axes)

    # Find Stock Open and Close Values
    stock_close = panel_data['Close']
    stock_open = panel_data['Open']

    #print(stock_close.iloc[0])

    # Calculate daily stock movement
    stock_close = np.array(stock_close).T
    stock_open = np.array(stock_open).T
    print(stock_close)
    print(stock_close.shape)
    row, col = stock_close.shape

    # create movements dataset filled with 0's
    movements = np.zeros([row, col])

    for i in range(0, row):
     movements[i,:] = np.subtract(stock_close[i,:], stock_open[i,:])


    #Create 4 Plots for indivicudal variances

    # plt.figure(figsize=(18, 16))

    # ax1 = plt.subplot(221)

    # plt.plot(movements[2][:])
    # plt.title(companies[2])
    # plt.subplot(222, sharey=ax1)
    # plt.plot(movements[3][:])
    # plt.title(companies[3])
    # plt.subplot(223, sharey=ax1)
    # plt.plot(movements[4][:])
    # plt.title(companies[4])
    # plt.subplot(224, sharey=ax1)
    # plt.plot(movements[5][:])
    # plt.title(companies[5])

    # print("Mvments", movements)
    # plt.figure(figsize=(18, 50))

    # ax1 = plt.subplot(10, 2, 1)

    # for i in range(0, 5):
    #     # print(movements[i])
    #     # print(companies[i])
    #     plt.plot(movements[i][:])
    #     plt.title(companies[i])
    #     plt.subplot(10, 2, i+1, sharey=ax1)


    # plt.savefig('static/static/media/foo1.png')

    for i, element in enumerate(movements):
        for j, ele in enumerate(element):
            if ele != ele:
                movements[i][j] = 0
    new = normalizer.fit_transform(movements)


    # create a K-means model with 10 clusters
    kmeans = KMeans(n_clusters=5, max_iter=1000)

    # make a pipeline chaining normalizer and kmeans
    pipeline = make_pipeline(normalizer,kmeans)

    # fit pipeline to daily stock movements
    pipeline.fit(movements)

    # predict cluster labels
    labels = pipeline.predict(movements)

    # create a DataFrame aligning labels & companies
    df = pd.DataFrame({'labels': labels, 'companies': companies})

    # visualize the results
    reduced_data = PCA(n_components = 2).fit_transform(new)


    # run kmeans on reduced data
    kmeans = KMeans(n_clusters=5, max_iter = 1000)
    kmeans.fit(reduced_data)
    labels = kmeans.predict(reduced_data)

    # create DataFrame aligning labels & companies
    df = pd.DataFrame({'labels': labels, 'companies': companies})

    # Display df sorted by cluster labels

    newarray = []
    for i in range(0, 4):
        newarray.append(np.sum(labels==i))

    fig1, ax1 = plt.subplots()
    categories = ['Cat 0', 'Cat 1', 'Cat 2', 'Cat 3', 'Cat 4']
    ax1.pie(newarray, labels=newarray, autopct='%1.1f%%',
            shadow=True, startangle=90)
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.legend(companies,loc=3)
    # plt.savefig('../frontend/src/assets/img/foo1.png')
    plt.savefig('static/static/media/foo1.png')
    #plt.show()



    # --------- KMeans Graph --------------

    # Height ( step of graph )
    h = 0.01

    # Decision Boundaries are min and max of our reduced data ( X and Y's accordingly )
    x_min, x_max = reduced_data[:, 0].min() - 1, reduced_data[:,0].max() + 1
    y_min, y_max = reduced_data[:, 1].min() - 1, reduced_data[:,1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))

    # Obtain labels for each point using predict.
    Z = kmeans.predict(np.c_[xx.ravel(), yy.ravel()])

    # Put the result into a color plot
    Z = Z.reshape(xx.shape)

    # Define Color Plot
    cmap = plt.cm.Paired

    # Plot Figure
    plt.clf()
    plt.figure(figsize=(10,10))
    plt.imshow(Z, interpolation='nearest',
    extent = (xx.min(), xx.max(), yy.min(), yy.max()),
    cmap = cmap,
    aspect = 'auto', origin='lower')
    companies = np.array(companies)
    counter = 0



    # Create an empty array to store the companies for the graph
    # Function to match them to coordinates via json from yahoo url fetch
    newcompanies = [None] * 50
    for i in companies:
       url = "http://d.yimg.com/autoc.finance.yahoo.com/autoc?query={}&region=1&lang=en".format(i)
       result = requests.get(url).json()
       for x in result['ResultSet']['Result']:
            if x['symbol'] == i:
                print(x['name'])
                newcompanies[counter] = x['name']
                counter=counter+1
    newcounter = 0
    # zip joins x and y coordinates in pairs
    for x,y in zip(reduced_data[:, 0],reduced_data[:, 1]):


        # this method is called for each point

         plt.annotate(newcompanies[newcounter], # the text
                       (x,y), # this is the point to label
                       textcoords="offset points", # how to position the text
                       xytext=(0,10), # distance from text to points (x,y)
                       ha='center') # horizontal alignment can be left, right or center

         newcounter = newcounter+1

    plt.plot(reduced_data[:, 0], reduced_data[:, 1], 'k.', markersize=20)




    # plot the centroid of each cluster as a white X
    centroids = kmeans.cluster_centers_
    try:
        plt.scatter(centroids[:, 0], centroids[:, 1],
        marker='x', s=169, linewidth=3,
        color='y', zorder=10)
    except:
        pass

    plt.title('K-Means Clustering on Stock Market Movements (PCA-Reduced Data)')
    plt.xlim(x_min, x_max)
    plt.ylim(y_min, y_max)

    # create dir
    # import os
    # if os.path.exists('../frontend/build/static/img')
    plt.savefig('static/static/media/foo3.png')
    # plt.savefig('../frontend/src/assets/img/foo3.png')
    #plt.show()

    # print('printing reduced data')
    # for i in reduced_data:
    #     print(i)
    # print('printing centroids')
    # for j in centroids:
    #     print(j)

    with open("static/static/media/foo3.png", "rb") as img_file:
        b64_string1 = base64.b64encode(img_file.read())
    # with open("static/static/media/foo1.png", "rb") as img_file:
    #     b64_string2 = base64.b64encode(img_file.read())
    # print(b64_string)
    return b64_string1 
    # return render_template("img.html", image1="static/static/media/foo3.png", image2="static/static/media/foo1.png")
    # return send_from_directory('/static/static/media/', 'foo3.png', as_attachment=True)
    # return dict(reduced_data), dict(centroids)


# Fetch data from MongoDB to list
@app.route('/getdata', methods=['GET'])
def script():
        client = MongoClient("mongodb://philip7zachary:Mlp123Mlp123@cluster0-shard-00-00-ocmyg.mongodb.net:27017,cluster0-shard-00-01-ocmyg.mongodb.net:27017,cluster0-shard-00-02-ocmyg.mongodb.net:27017/stocks?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority")
        collection = client["data"]["stocks"]
        l = {}
        for x in collection.find({}, {'_id': False}):
            l.update(x)
        return l

@app.errorhandler(404)   
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(threaded=True, port=5000)
    # app.run(debug=True)
    
