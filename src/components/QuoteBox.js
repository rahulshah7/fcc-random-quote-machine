import React from "react";
import PropTypes from "prop-types";
import "./QuoteBox.scss";

const QuoteBox = props => (
  <div id="quote-box" className="card flow-text">
    {props.children}
  </div>
);

export default QuoteBox;
