import randomColor from "randomcolor";
import React, { Component } from "react";

import getQuoteData from "./API/getQuoteData";
import getBackgroundImage from "./API/getBackgroundImage";

import Background from "./components/Background";
import ButtonsBar from "./components/ButtonsBar";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";

const offlineQuotes = require("./API/offlineQuotes.json");

/* When adjusting transitionDuration, also set an equal value in _variables.scss e.g.
```scss
$transition-duration: 1000ms;
```
```javascript
const transitionDuration = 1000;
``` */
const transitionDuration = 750;

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.initialQuoteData = {
      ...offlineQuotes[Math.floor(Math.random() * offlineQuotes.length)],
      backgroundImage: "",
      color: randomColor({ luminosity: "dark" })
    };

    this.state = {
      ...this.initialQuoteData,
      fadeBool: false
    };
  }

  componentDidMount() {
    this.onNewQuote(true);
  }

  onNewQuote(isFirstMount = false) {
    getQuoteData()
      .then(quoteData => {
        if (!isFirstMount) {
          // trigger fade out quote
          this.setState({ fadeBool: false });
        }

        let data = {
          ...quoteData,
          color: randomColor({ luminosity: "dark" }),
          fadeBool: true
        };

        getBackgroundImage(quoteData.category).then(URL => {
          data.backgroundImage = URL;
          // Update state to trigger fade in new quote
          this.setState(data);
        });
      })
      .catch(error => {
        // handle error
        this.setState(this.initialQuoteData);
      });
  }

  render() {
    const { author, backgroundImage, color, fadeBool, quote } = this.state;

    return (
      <Background
        // "category" state change causes request of new background image
        backgroundImage={backgroundImage}
        fadeBool={fadeBool}
        transitionDuration={transitionDuration}
      >
        <QuoteBox>
          <Quote
            author={author}
            color={color}
            fadeBool={fadeBool}
            quote={quote}
            transitionDuration={transitionDuration}
          />
          <ButtonsBar
            author={author}
            color={color}
            onNewQuote={() => this.onNewQuote(false)}
            quote={quote}
          />
        </QuoteBox>
      </Background>
    );
  }
}
