import React from "react";

const QuoteBox = props => {
  return (
    <div id="quote-box" className="card flow-text">
      {props.children}
    </div>
  );
};

export default QuoteBox;
