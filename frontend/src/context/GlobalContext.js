import React, { Component } from 'react'

const GlobalContext = React.createContext()

class GlobalProvider extends Component {
  // Context state
  state = {
    user: {},
    image1: "",
    image2: "",
    stocks: [],
    stocksValues: [],
    cart: [],
    cartValues: [],
  }

  // Method to update state
  setUser = (user) => {
    this.setState((prevState) => ({ user }))
  }
  setImage = (image1) => {
    this.setState((prevState) => ({image1}))
  }
  setImage2 = (image2) => {
    this.setState((prevState) => ({image2}))
  }

  render() {
    const { children } = this.props
    const { user, image1, image2, stocks, stocksValues, cart, cartValues } = this.state
    const { setUser, setImage, setImage2 } = this

    return (
      <GlobalContext.Provider
        value={{
          user,
          setUser,
          image1,
          setImage,
          setImage2,
          image2,
          stocks,
          stocksValues,
          cart,
          cartValues
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext
export {GlobalProvider}