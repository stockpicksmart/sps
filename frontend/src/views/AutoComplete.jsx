import React, { Component, Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import "../assets/css/AutoComplete.css";

const alphabets = ['ALL', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   "all",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };
  }

  // Event fired when the input value is changed
  onChange = (event) => {
    const { stocks, stocksValues } = this.props;
    const userInput = event.currentTarget.value;

    // Object.keys(stocksValues).some(key => obj[key].includes(searchKey)));

    // for (let [key, value] of Object.entries(stocksValues)) {}
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = stocks.filter(
      (stock) =>
        stocksValues[stock].toLowerCase().indexOf(userInput.toLowerCase()) > -1
      // stock.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: false,
      userInput: event.currentTarget.value,
    });
    this.props.onInputChange(filteredSuggestions);
  };

  // Event fired a letter is clicked
  onAlphabetClick = (event) => {
    const { stocks, stocksValues } = this.props;
    const userInput = event.target.name;

    let filteredSuggestions = [];
    if (userInput === "all") {
      filteredSuggestions = stocks;
    } else {
      // Filter our suggestions that don't contain the user's input
      filteredSuggestions = stocks.filter(
        (stock) => stocksValues[stock].charAt(0).toLowerCase() == userInput.toLowerCase()
        // stocksValues[stock].toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // stock.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    }

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: false,
      // userInput: event.currentTarget.value
    });
    this.props.onInputChange(filteredSuggestions);
  };

  // Event fired when the user clicks on a suggestion
  onClick = (e) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
    this.props.onInputChange([e.currentTarget.innerText]);
  };

  // Event fired when the user presses a key down
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
      this.props.onInputChange([filteredSuggestions[activeSuggestion]]);
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search for stock"
        />
        {suggestionsListComponent}

        <Pagination size="sm" className="pagination pagination-sm justify-content-center mt-5 mb-0">
          {alphabets.map((alpha) => {
            return (
              <Pagination.Item
                value={alpha}
                name={alpha}
                onClick={this.onAlphabetClick}
              >
                {alpha}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </Fragment>
    );
  }
}

export default Autocomplete;
