import React, { Component } from "react";
import Background from "./components/Background";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";
import ButtonsBar from "./components/ButtonsBar";

const randomColor = require("randomcolor");
const axios = require("axios");

/*When adjusting, also set an equal value in App.js e.g.
```scss```
$transition-duration: 1000ms;
````js```
const transitionDuration = 1000; */
const transitionDuration = 1000;

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.state = {
      author: "",
      cat: "",
      quote: "",
      color: "",
      fadeBool: true
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
        let data = response.data;
        data.color = randomColor({ luminosity: "dark" });
        data.fadeBool = true;

        // trigger fade in quote
        if (!isFirstMount) {
          setTimeout(() => this.setState(data), transitionDuration);
        } else {
          this.setState(data);
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.setState({
          author: "Pythagoras",
          cat: "silence",
          quote: "A fool is known by his speech; and a wise man by silence.",
          color: randomColor({ luminosity: "dark" })
        });
      });
  }

  /* Render Method */

  render() {
    return (
      <Background
        // "cat" state change causes request of new background image
        backgroundImage={`https://source.unsplash.com/random/${
          window.innerWidth
        }x${window.innerHeight}/?${this.state.cat}`}
        color={this.state.color}
        fadeBool={this.state.fadeBool}
        transitionDuration={transitionDuration}
      >
        <QuoteBox>
          <Quote
            author={this.state.author}
            color={this.state.color}
            fadeBool={this.state.fadeBool}
            quote={this.state.quote}
            transitionDuration={transitionDuration}
          />
          <ButtonsBar
            author={this.state.author}
            color={this.state.color}
            onNewQuote={() => this.onNewQuote(false)}
            quote={this.state.quote}
          />
        </QuoteBox>
      </Background>
    );
  }
}
