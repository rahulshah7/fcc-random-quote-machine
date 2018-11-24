import React, { Component } from "react";
import Background from "./components/Background";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";
import ButtonsBar from "./components/ButtonsBar";

const randomColor = require("randomcolor");
const axios = require("axios");

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.state = {
      author: "",
      cat: "",
      quote: "",
      color: ""
    };
  }

  /* Life Cycle Methods */

  componentDidMount() {
    this.onNewQuote();
  }

  /* Event Handlers */

  onNewQuote() {
    axios
      .get("https://talaikis.com/api/quotes/random/")
      .then(response => {
        // handle success
        let data = response.data;
        data.color = randomColor({ luminosity: "dark" });
        this.setState(data);
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
      >
        <QuoteBox>
          <Quote
            author={this.state.author}
            color={this.state.color}
            quote={this.state.quote}
          />
          <ButtonsBar
            author={this.state.author}
            color={this.state.color}
            onNewQuote={this.onNewQuote}
            quote={this.state.quote}
          />
        </QuoteBox>
      </Background>
    );
  }
}
