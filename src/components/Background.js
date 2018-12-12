import React from "react";
import { CSSTransition } from "react-transition-group";

const Background = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`
      }}
      className="background blue-grey lighten-4"
    >
      <CSSTransition
        in={props.fadeBool}
        classNames="overlay"
        timeout={props.transitionDuration}
      >
        <div className="background-overlay blue-grey lighten-4" />
      </CSSTransition>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Background;
