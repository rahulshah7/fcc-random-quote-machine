import React from "react";
import "./QuoteBox.scss";

const QuoteBox = props => {
  return (
    <div id="quote-box" className="card buttons-bar flow-text">
      {props.children}
    </div>
  );
};

export default QuoteBox;
