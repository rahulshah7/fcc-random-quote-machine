import React from "react";
import "./Quote.scss";

const Quote = props => {
  return (
    <div className="quote">
      <blockquote className="quote__text">
        <p id="text">"{props.quote}"</p>
      </blockquote>

      <cite id="author" className="quote__author">
        – {props.author}
      </cite>
    </div>
  );
};

export default Quote;
