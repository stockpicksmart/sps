import React, { Fragment, Component } from 'react';
// import  tickers  from '../assets/files/ticker'; // Relative path to your File
// import  names  from '../assets/files/name'; // Relative path to your File

import Autocomplete from "./AutoComplete";
import TableStock from "./TableStock";
// import Store from '../Store'
import GlobalContext from '../context/GlobalContext'
import "../assets/css/SMFirst.css"
import DatatablePage from './StocksTable/DatatablePage';


class SMFirst extends Component {
    static contextType = GlobalContext;

    componentDidMount() {
        if (this.context.stocks.length === 0) {
            this.props.history.push("/admin/welcome")
        }
    }
    state = {
        stocks: this.context.stocks,
        stocksValues: this.context.stocksValues
    };

    onInputChange = value => {
        this.setState({
            stocks: value
        });
    };

    onClickChange = value => {
        console.log("ALKSJhd")
        this.context.cart.push(value);

        let index = this.context.stocks.indexOf(value);
        this.context.stocks.splice(index,1);

        this.context.stocksValues.map((item, index) => (
            item === value ? (
                // this.context.cartValues.push(item),
                this.context.stocksValues.splice(index,1)
                )
            : null
        ));

        this.setState({
            stocks: this.context.stocks,
            stocksValues: this.context.stocksValues
        });
    };

    render() {
        const { cart, cartValues, stocks, stocksValues } = this.context
        return (
            <Fragment>
                <div className="content" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div>
                                <Autocomplete stocks={this.context.stocks} stocksValues={this.context.stocksValues} onInputChange={this.onInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.stocks.length !== 0 ?
                    <div>
                        {/* <TableStock
                            stocks={this.state.stocks}
                            stocksValues={this.state.stocksValues}
                            onClickChange={this.onClickChange}/> */}
                            <DatatablePage stocksValues={this.state.stocksValues} stocks={this.state.stocks} onClickChange={this.onClickChange} />
                    </div> :
                    <div className="text-center">
                        <h1>Error Loading Data</h1>
                        <h2>Please go to the home page.</h2>
                        {/* <button
                            type="button"
                            className="btn btn-success btn-lg blink_me"
                            onClick={() => this.forceUpdate()}>
                            Show Data
                        </button> */}
                    </div>
                }
                </div>
            </Fragment>
            
        );
    }
}

export default SMFirst;
