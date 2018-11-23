import React, { Component } from "react";
import Background from "./components/Background";
import QuoteBox from "./components/QuoteBox";
import Quote from "./components/Quote";
import ButtonsBar from "./components/ButtonsBar";

const axios = require("axios");

export default class App extends Component {
  constructor() {
    super();
    this.onNewQuote = this.onNewQuote.bind(this);

    this.state = {
      author: "",
      cat: "",
      quote: ""
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
        this.setState(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
        this.setState({
          author: "Pythagoras",
          cat: "silence",
          quote: "A fool is known by his speech; and a wise man by silence. "
        });
      });
  }

  /* Render Method */

  render() {
    return (
      <Background
        // App state causes request of new background image
        backgroundImage={{
          backgroundImage: `url(https://source.unsplash.com/random/${
            window.innerWidth
          }x${window.innerHeight}/?${this.state.cat})`
        }}
      >
        <QuoteBox>
          <Quote quote={this.state.quote} author={this.state.author} />
          <ButtonsBar
            onNewQuote={this.onNewQuote}
            quote={this.state.quote}
            author={this.state.author}
          />
        </QuoteBox>
      </Background>
    );
  }
}
