import React from "react";
import tickers from "../assets/files/ticker2"; // Relative path to your File
import names from "../assets/files/name2"; // Relative path to your File
import GlobalContext from "../context/GlobalContext";

class Dashboard extends React.Component {
  static contextType = GlobalContext;

  componentDidMount() {
    const { stocks, stocksValues } = this.context;

    if (stocks.length === 0) {
      // let tickerStock = tickers.split("\n");
      // let nameStock = names.split("\n");

      let tickerStock = tickers;
      let nameStock = names;

      for (let ticker of tickerStock) stocks.push(ticker);

      for (let i in stocks) stocksValues[stocks[i]] = nameStock[i];
    }
  }
  render() {
    return (
      <div>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* Header with full-height image */}
        <header
          className="bgimg-1 w3-display-container w3-grayscale-min"
          id="home"
        >
          <div
            className="w3-display-bottomleft w3-text-grey w3-large"
            style={{ padding: "24px 48px" }}
          >
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
          </div>
        </header>

        {/* About Section */}
        <div
          className="w3-container w3-center"
          style={{ padding: "128px 16px" }}
          id="about"
        >
          <h3 className="w3-text-red">
            Disclosure: We are not responsible for any misleading outcome from
            using our website.
          </h3>
          <img
            className="w3-image w3-round-large w3-center"
            src={require("../assets/img/nv/hero-img.png")}
            alt="Buildings"
            width={520}
            height={54}
          />
          <br />
          <br />
          <br />

          <h2 className="w3-center">
            <b>Welcome!</b>
          </h2>
          <br />

          <p className="w3-center w3-large mb-5">
            This site is an investment tool to help you diversify your
            portfolio. Having a stock portfolio with a wide range of investments
            can be very safe and profitable. The way this web application works
            is that you choose stocks that you are interested in buying for your
            portfolio and add them to your "basket". Then you choose a time
            period for daily returns and the algorithm then takes the data and
            performs a machine learning operation known as Kmeans clustering to
            organize your stocks based on daily variances and returns. Just
            remember - for the graph, X is returns, Y is variance.{" "}
          </p>

          <br />
          <h3 className="w3-center">
            <b>Getting Started</b>
          </h3>
          <br />
          <p className="w3-center w3-large">
            First, click on the stocks link. It will show you a list of stocks.
          </p>
          <br />
          <img
            className="w3-image w3-round-large w3-center mb-5"
            src={require("../assets/img/nv/guide_stocksimg.png")}
            alt="Buildings"
            width={400}
            height={194}
          />
          <br />
          <br />
          <h3 className="w3-center">
            <b>Adding Stocks To Your Cart</b>
          </h3>
          <br />
          <p className="w3-center w3-large">
            Search or scroll manuall and click on the green buttons to add a
            stock to your cart
          </p>
          <img
            className="w3-image w3-round-large w3-center mb-5"
            src={require("../assets/img/nv/guides_choosestocksimg.png")}
            alt="Buildings"
            width={1000}
            height={294}
          />
          <br />
          <h3 className="w3-center">
            <b>Choosing date range</b>
          </h3>
          <br />
          <p className="w3-center w3-large">
            If you upgraded to Pro, you aren't limited to your time frame -
            otherwise, choose a time frame up to 1 year.
          </p>
          <br />
          <img
            className="w3-image w3-round-large w3-center mb-5"
            src={require("../assets/img/nv/guides_choosedate.png")}
            alt="Buildings"
            width={400}
            height={154}
          />
          <h3 className="w3-center">
            <b>Run Algorithm, Wait</b>
          </h3>
          <br />
          <p className="w3-center w3-large">
            It can take up to 30 seconds if you chose a big time frame, so just
            hang tight
          </p>
          <br />
          <img
            className="w3-image w3-round-large w3-center mb-5"
            src={require("../assets/img/nv/guides_loadingcircle.png")}
            alt="Buildings"
            width={400}
            height={154}
          />
          <h3 className="w3-center">
            <b>Data Explained</b>
          </h3>
          <br />
          <p className="w3-center w3-large">
            X is return, Y is variance, simple as that. The stocks are clustered
            based on groups, helping you diversify your profile with a useful
            visual aid.
          </p>
          <br />
          <img
            className="w3-image w3-round-large w3-center mb-5"
            src={require("../assets/img/nv/guides_explainchart.png")}
            alt="Buildings"
            width={700}
            height={44}
          />

          {/* Team Section */}
          <div
            className="w3-container"
            style={{ padding: "28px 16px" }}
            id="team"
          >
            <h3 className="w3-center">THE TEAM</h3>
            <p className="w3-center w3-large">The ones who runs this company</p>
            <div
              className="w3-row-padding w3-grayscale"
              style={{ marginTop: "64px" }}
            >
              <div className="w3-col l3 m6 w3-margin-bottom">
                {/* <div className="w3-card">
                  <div className="w3-container">
                  </div>
                </div> */}
              </div>
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-card">
                  <img
                    src={require("../assets/img/nv/team1.jpg")}
                    alt="Jane"
                    style={{ width: "100%" }}
                  />
                  <div className="w3-container">
                    <h3>Philip Zachary</h3>
                    <p className="w3-opacity">Co-Creator</p>
                    <p>Let me know how I can improve the experience for you.</p>
                    <p>
                      <a href="mailto:philip7zachary@gmail.com">
                        <button className="w3-button w3-light-grey w3-block">
                          <i className="fa fa-envelope" /> Contact
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-card">
                  <img
                    src={require("../assets/img/nv/team3.jpg")}
                    alt="Mike"
                    style={{ width: "100%" }}
                  />
                  <div className="w3-container">
                    <h3>Isaac Michaan</h3>
                    <p className="w3-opacity">Co-Creator</p>
                    <p>Interested in how the algorithm works? Contact us.</p>
                    <p>
                      <a href="mailto:isaacmichaan@hotmail.com">
                        <button className="w3-button w3-light-grey w3-block">
                          <i className="fa fa-envelope" /> Contact
                        </button>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-card">
                  <div className="w3-container">
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* Modal for full size images on click*/}
          <div
            id="modal01"
            className="w3-modal w3-black"
            onClick={() => (this.style.display = "none")}
          >
            <span
              className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
              title="Close Modal Image"
            >
              ×
            </span>
            <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
              <img id="img01" className="w3-image" alt={"NONE"} />
              <p id="caption" className="w3-opacity w3-large" />
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="w3-container"
            style={{ padding: "28px 16px" }}
            id="contact"
          >
            <h3 className="w3-center">CONTACT</h3>
            <p className="w3-center w3-large">
              Lets get in touch. Send us a message:
            </p>
            <div style={{ marginTop: "48px" }}>
              {/* <p>
                <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" />{" "}
                Chicago, US
              </p>
              <p>
                <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" />{" "}
                Phone: +00 151515
              </p> */}
              <p>
                <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right">
                  {" "}
                </i>{" "}
                Email: stockpicksmart@gmail.com
              </p>
              <br />
              <a href="#home" className="w3-button w3-light-grey">
                <i className="fa fa-arrow-up w3-margin-right" />
                To the top
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
