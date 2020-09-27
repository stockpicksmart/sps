import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
//import axios from "axios";
// import Store from "./Store";
// import GlobalContext from './context/GlobalContext'
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import  tickers  from './assets/files/ticker'; // Relative path to your File
// import  names  from './assets/files/name'; // Relative path to your File

import AdminLayout from "layouts/Admin.jsx";
// import Dashboard from './views/Dashboard'
import { GlobalProvider } from './context/GlobalContext'
const hist = createBrowserHistory();

class ParentComponent extends React.Component{
    // static contextType = GlobalContext;

    componentWillMount() {
        console.log('ParentComponent will mount');
    }

    // componentDidMount() {
    //     console.log('ParentComponent did mount');
    //     let tickerStock = tickers.split("\n");
    //     let nameStock = names.split("\n");
    //     // console.log(entryArray);

    //     for (let ticker of tickerStock)
    //         this.context.stocks.push(ticker);
    //     // let data = ['ATA Creativity Global', 'Artius Acquisition Inc.', 'American Airlines Group, Inc.',
    //     //         'Atlantic American Corporation', 'Applied Optoelectronics, Inc.', 'AAON, Inc.', 'Apple Inc.',
    //     //         'Atlas Air Worldwide Holdings', 'iShares MSCI All Country Asia ex Japan Index Fund|G|N|N|100|Y|N',
    //     //         'Axon Enterprise, Inc.', 'Ameris Bancorp', 'Abeona Therapeutics Inc.', 'ARCA biopharma, Inc.',
    //     //         'ABIOMED, Inc.', 'Allegiance Bancshares, Inc.', 'Arbutus Biopharma Corporation', 'ACADIA Pharmaceuticals Inc.',
    //     //         'Acamar Partners Acquisition Corp.', 'Acamar Partners Acquisition Corp.', 'Acamar Partners Acquisition Corp.',
    //     //         'Atlantic Capital Bancshares, Inc.', 'Accolade, Inc.', 'Acer Therapeutics Inc.', 'ACE Convergence Acquisition Corp.',
    //     //         'Arch Capital Group Ltd.', 'Arch Capital Group Ltd.', 'Arch Capital Group Ltd.', 'Acadia Healthcare Company, Inc.',
    //     //         'Achieve Life Sciences, Inc.', 'Acacia Communications, Inc.' ];
    //     for (let i in this.context.stocks)
    //         this.context.stocksValues[this.context.stocks[i]] = nameStock[i]
    //     console.log(this.context.stocks)
    //     console.log(this.context.stocksValues['AACG'])
    //     // axios.get(`/getdata`)
    //     //     .then(res => {
    //     //         let data = res.data;
    //     //         for (let key in data) {
    //     //             if (data[key] !== 'Failed to parse json response') {
    //     //                     this.context.stocks.push(data[key].ticker);
    //     //                     this.context.stocksValues.push(data[key]);
    //     //                 }
    //     //         }
    //     //         data = [];
    //     //         this.context.stocks.sort();
    //     //         for (let i in this.context.stocks)
    //     //             for (let j in this.context.stocksValues)
    //     //                 if (this.context.stocksValues[j]['ticker'] === this.context.stocks[i])
    //     //                     data.push(this.context.stocksValues[j]);
    //     //         this.context.stocksValues = data;
    //     //     });
    // }

    render() {
        // const { user, image1, setImage, image2, stocks, stocksValues, cart, cartValues } = this.context
        return (
        <GlobalProvider>
            <Router history={hist}>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />} />
                    {/* <Route path="/admin/dashboard" render={props => <Dashboard />} /> */}
                    <Redirect to="/admin/welcome" />
                </Switch>
            </Router>
        </GlobalProvider>
        )
    }
}

ReactDOM.render(
    <ParentComponent />,
    document.getElementById("root")
);
