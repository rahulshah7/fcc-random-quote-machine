import PropTypes from "prop-types";
import React from "react";
import "./ButtonsBar.scss";

const ButtonsBar = props => {
  const handleNewQuote = e => props.newQuote();
  
  return (
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
      onClick={handleNewQuote}
      style={{ backgroundColor: props.color }}
    >
      New Quote
    </button>
  </div>
);
      }

ButtonsBar.propTypes = {
  author: PropTypes.string,
  color: PropTypes.string,
  newQuote: PropTypes.func,
  quote: PropTypes.string
};

export default ButtonsBar;
