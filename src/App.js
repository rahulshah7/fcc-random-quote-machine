import axios from "axios";
import randomColor from "randomcolor";
import React, { Component } from "react";

import unsplash from "./API/unsplash";

import Background from "./components/Background";
import ButtonsBar from "./components/ButtonsBar";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";

/*When adjusting, also set an equal value in _variables.scss e.g.
```scss```
$transition-duration: 1000ms;
````js```
const transitionDuration = 1000; */
const transitionDuration = 750;

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.fallbackData = {
      author: "Pythagoras",
      backgroundImage: "",
      category: "silence",
      quote: "A fool is known by his speech; and a wise man by silence.",
      color: randomColor({ luminosity: "dark" })
    };

    this.state = {
      ...this.fallbackData,
      fadeBool: false
    };
  }

  /* Life Cycle Methods */

  componentDidMount() {
    this.onNewQuote(true);
  }

  /* Event Handlers */

  onNewQuote(isFirstMount = false) {
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        // handle success
        if (!isFirstMount) {
          // trigger fade out quote
          this.setState({ fadeBool: false });
        }
        // remember quote data from talaikis response
        const { author, cat: category, quote } = response.data;

        let data = {
          author,
          category,
          quote,
          color: randomColor({ luminosity: "dark" }),
          fadeBool: true
        };

        // Get background image and update state
        unsplash(category).then(URL => {
          data.backgroundImage = URL;
          this.setState(data);
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.setState(this.fallbackData);
      });
  }

  /* Render Method */

  render() {
    const { author, backgroundImage, color, fadeBool, quote } = this.state;

    return (
      <Background
        // "category" state change causes request of new background image
        backgroundImage={backgroundImage}
        color={color}
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
