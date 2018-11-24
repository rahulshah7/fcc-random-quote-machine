import React from "react";
import "./ButtonsBar.scss";

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
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter" />
      </a>

      <button
        onClick={props.onNewQuote}
        id="new-quote"
        className="buttons-bar__new-quote btn"
      >
        New Quote
      </button>
    </div>
  );
};

export default ButtonsBar;
