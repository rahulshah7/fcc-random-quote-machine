import PropTypes from "prop-types";
import React from "react";
import "./ButtonsBar.scss";

const ButtonsBar = props => (
  <div id="buttons-bar" className="card-action">
    <a
      className="buttons-bar__tweet btn waves-effect waves-light"
      id="tweet-quote"
      href={encodeURI(
        `https://twitter.com/intent/tweet?text="${props.quote}" - ${
          props.author
        }`
      )}
      style={{ backgroundColor: props.color }}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-twitter" />
    </a>

    <button
      className="buttons-bar__new-quote btn waves-effect waves-light"
      id="new-quote"
      onClick={props.onNewQuote}
      style={{ backgroundColor: props.color }}
    >
      New Quote
    </button>
  </div>
);

export default ButtonsBar;
