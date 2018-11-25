import React from "react";

const Quote = props => {
  return (
    <div className="quote">
      <blockquote
        className="quote__text"
        style={{ borderLeft: `5px solid ${props.color}` }}
      >
        <p id="text">"{props.quote}"</p>
      </blockquote>

      <cite id="author">
        <p className="quote__author center-align">– {props.author}</p>
      </cite>
    </div>
  );
};

export default Quote;
