import React from "react";
import "./QuoteBox.scss";

const QuoteBox = props => {
  return (
    <div id="quote-box" className="quote-box">
      {props.children}
    </div>
  );
};

export default QuoteBox;
