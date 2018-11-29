import React from "react";
import { CSSTransition } from "react-transition-group";

const Quote = props => {
  return (
    <div className="quote">
      <blockquote
        className="quote__text"
        style={{ borderLeft: `5px solid ${props.color}` }}
      >
        <CSSTransition
          in={props.fadeBool}
          classNames="fade"
          timeout={props.transitionDuration}
        >
          <p id="text">"{props.quote}"</p>
        </CSSTransition>
      </blockquote>

      <cite id="author">
        <CSSTransition
          in={props.fadeBool}
          classNames="fade"
          timeout={props.transitionDuration}
        >
          <p className="quote__author center-align">– {props.author}</p>
        </CSSTransition>
      </cite>
    </div>
  );
};

export default Quote;
