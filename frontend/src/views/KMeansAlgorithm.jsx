import React, { Component, Fragment} from 'react';

// import Store from '../Store'
import GlobalContext from '../context/GlobalContext'
import {Table} from "react-bootstrap";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'

class KMeansAlgorithm extends Component {
    static contextType = GlobalContext;

    
    state = {
        show: false,
        cart: this.context.cart,
        // cartValues: this.context.cartValues,
        kmeans: false,
        startDate: "",
        endDate: ""
    };
    handleClick(value) {
        this.context.stocks.push(value.item);

        const index = this.context.cart.indexOf(value.item);
        this.context.cart.splice(index,1);

        this.context.cartValues.map((item, index) => (
            item === value.item ? (
                    this.context.stocksValues.push(item)
                    // this.context.cartValues.splice(index,1)
                )
                : null
        ));

        // let data = [];
        this.context.stocks.sort();
        // for (let i in this.context.stocks)
        //     for (let j in this.context.stocksValues)
        //         if (this.context.stocksValues[j]['ticker']===this.context.stocks[i])
        //             data.push(this.context.stocksValues[j]);
        // this.context.stocksValues = data;

        this.setState({
            cart: this.context.cart,
            // cartValues: this.context.cartValues
        });
    }

    updateStartDate = evt => {
        this.setState({
            startDate: evt.target.value
        });
    };

    updateEndDate = evt => {
        this.setState({
            endDate: evt.target.value
        });
    };

    

    render() {
        const { setImage, cart } = this.context
        console.log(this.state.startDate);
        console.log(this.state.endDate);
        console.log(this.state.cart);
        console.log(cart);
        return (
        <Fragment>
            <div className="content">
            {this.state.kmeans ?
                <div className="text-center">
                <br/>
                <br/>
                <br/>
                <br/>
                <Spinner animation="border" variant="info" />
                </div> :
                <div className="text-center">
                    <br/>
                    <br/>
                    <br/>
                    {/* <button
                        type="button"
                        className="btn btn-danger mt-4"
                        onClick={() => {
                            this.setState({kmeans: true});
                            // axios.post(`/kmeans`, {
                            axios.post(`/kmeans`, {
                                cart: this.state.cart,
                                start: this.state.startDate,
                                end: this.state.endDate
                            }).then(function (response) {
                                console.log(response);
                                window.location.href = "/admin/dashboard"
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }}>
                        K-MEANS CLUSTERING
                    </button> */}
                    <button
                    type="button"
                    className="btn btn-danger mt-4"
                    onClick={async () => {
                        if (!this.state.startDate || !this.state.endDate) {
                            alert("Enter Dates!!")
                            return
                        } 
                        if (Date.parse(this.state.endDate) - Date.parse(this.state.startDate) <= 0) {
                            alert("Start date should be before end date")
                            return
                        }
                        if (cart.length < 5) {
                            alert("Add atleast 5 items to cart")
                            return
                        }
                        this.setState({kmeans: true});
                        let newImg1 = ""
                        // let newImg2 = ""
                        await axios.post("/kmeans",
                        {
                            cart: this.state.cart,
                            start: this.state.startDate,
                            end: this.state.endDate
                        })
                        .then((response) => {
                            console.log(response)
                            newImg1 = response.data
                        })

                        // await axios.get("/kmeans2")
                        //         .then((response) => {
                        //             console.log(response.data)
                        //             newImg2 = response.data
                        //         })
                        setImage(newImg1)
                        // setImage2(newImg2)
                        this.props.history.push("/admin/dashboard")
                        // window.location.href = "/admin/dashboard"
                    }}
                    >
                    K-MEANS CLUSTERING
                    </button>
                    {/* <button
                     onClick={() => {
                         if (!this.state.startDate || !this.state.endDate) {
                            alert("Enter Dates!!")
                            return
                         } 
                         if (Date.parse(this.state.endDate) - Date.parse(this.state.startDate) <= 0) {
                            alert("Start date should be before end date")
                            return
                         }
                         if (cart.length < 10) {
                            alert("Add atleast 10 items to cart")
                            return
                         }
                     }}
                     >
                         Check dates
                     </button> */}
                    {/* <p>{`Current User: ${image1}`}</p> */}
                    {/* <img src={"data:image/png;base64," + image1} alt="1" srcset=""/> */}
                    <br/>
                    Start Date
                    <input value={this.state.startDate} onChange={this.updateStartDate} id="start" type="date" style={{width: '250px'}}/>
                    End Date
                    <input value={this.state.endDate} onChange={this.updateEndDate} id="end" type="date" style={{width: '250px'}}/>
                </div>
            }

            {
                this.state.show ?
                <div className="text-center">
                    <button
                        onClick={() => {
                            this.setState({ show: false });
                        }}
                        type="button"
                        className="btn btn-warning mt-4"
                    >
                        Show Cart
                    </button>
                </div> :
                    (
                        <div>
                            {
                                this.state.cart.length !== 0 ?
                                    <div className="row mt-4">
                                        <div className="col-md-8 m-auto">
                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th className="text-center" width="5%">#</th>
                                                    <th>Name</th>
                                                    <th>Ticker</th>
                                                    {/*<th>Username</th>*/}
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.cart.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-lg"
                                                                onClick={() => this.handleClick({item})}>-
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {this.context.stocksValues[item]}
                                                        </td>
                                                        <td>
                                                            {item}
                                                        </td>
                                                        {/*<td>*/}
                                                        {/*    {this.context.cartValues[index]['Previous Close']}*/}
                                                        {/*</td>*/}
                                                    </tr>
                                                ))
                                                }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div> :
                                <p className="lead text-center">
                                    <br/> Your Cart is Empty!
                                </p>
                            }
                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        this.setState({show: true});
                                    }}
                                    type="button"
                                    className="btn btn-outline-warning mt-4"
                                >
                                    Hide Cart
                                </button>
                            </div>
                        </div>
                    )
            }
            </div>
        </Fragment>
        );
    }
}

export default KMeansAlgorithm;
