import React from "react";

const ButtonsBar = props => {
  return (
    <div id="buttons-bar" className="card-action">
      <a
        className="buttons-bar__tweet btn"
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
        className="buttons-bar__new-quote btn"
        id="new-quote"
        onClick={props.onNewQuote}
        style={{ backgroundColor: props.color }}
      >
        New Quote
      </button>
    </div>
  );
};

export default ButtonsBar;
