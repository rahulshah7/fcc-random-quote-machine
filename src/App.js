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
    this.newQuote = this.newQuote.bind(this);

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
    this.newQuote();
  }

  newQuote() {
    getQuoteData().then(quoteData => {

      // trigger fade out quote
      this.setState({ fadeBool: false });
      
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
            newQuote={this.newQuote}
            quote={quote}
          />
        </QuoteBox>
      </Background>
    );
  }
}
