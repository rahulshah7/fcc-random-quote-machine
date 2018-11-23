import React from "react";

const ButtonsBar = props => {
  return (
    <div className="buttons-bar">
      <a
        className="buttons-bar__tweet"
        id="tweet-quote"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text="${props.quote}" - ${
            props.author
          }`
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>

      <button
        onClick={props.onNewQuote}
        id="new-quote"
        className="buttons-bar__new-quote"
      >
        New Quote
      </button>
    </div>
  );
};

export default ButtonsBar;
