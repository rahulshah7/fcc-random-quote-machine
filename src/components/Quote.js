import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import React from "react";
import "./Quote.scss";

const Quote = props => (
  <div className="quote">
    <blockquote
      className="quote__text"
      style={{ borderLeft: `5px solid ${props.color}` }}
    >
      <CSSTransition
        in={props.fadeBool}
        classNames="fade-quote"
        timeout={props.transitionDuration}
      >
        <p id="text">"{props.quote}"</p>
      </CSSTransition>
    </blockquote>

    <cite id="author">
      <CSSTransition
        in={props.fadeBool}
        classNames="fade-quote"
        timeout={props.transitionDuration}
      >
        <p className="quote__author center-align">– {props.author}</p>
      </CSSTransition>
    </cite>
  </div>
);

Quote.propTypes = {
  author: PropTypes.string,
  color: PropTypes.string,
  fadeBool: PropTypes.bool,
  quote: PropTypes.string,
  transitionDuration: PropTypes.number
};

export default Quote;
