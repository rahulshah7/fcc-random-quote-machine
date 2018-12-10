import axios from "axios";
import randomColor from "randomcolor";
import React, { Component } from "react";

import Background from "./components/Background";
import ButtonsBar from "./components/ButtonsBar";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";

/*When adjusting, also set an equal value in _variables.scss e.g.
```scss```
$transition-duration: 1000ms;
````js```
const transitionDuration = 1000; */
const transitionDuration = 1000;

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.fallbackQuote = {
      author: "Pythagoras",
      category: "silence",
      quote: "A fool is known by his speech; and a wise man by silence.",
      color: randomColor({ luminosity: "dark" })
    };

    this.state = {
      ...this.fallbackQuote,
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

        const { author, cat: category, quote } = response.data;

        let data = {
          author,
          category,
          quote,
          color: randomColor({ luminosity: "dark" }),
          fadeBool: true
        };

        // request background image
        axios
          .get(
            `https://source.unsplash.com/random/${window.innerWidth}x${
              window.innerHeight
            }/?${category}`
          )
          .then(response => {
            // remember background image url
            data.backgroundImage = response.request.responseURL;
            // trigger fade in quote
            if (!isFirstMount) {
              setTimeout(() => this.setState(data), 10);
            } else {
              this.setState(data);
            }
          });
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.setState(this.fallbackQuote);
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
