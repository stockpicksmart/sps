import React from 'react';


const authContext = React.createContext({
    stocks: [],
    stocksValues: [],
    cart: [],
    cartValues: [],
    // image: false
});

export default authContext;
