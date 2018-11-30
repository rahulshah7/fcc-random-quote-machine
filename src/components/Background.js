import React from "react";
import { CSSTransition } from "react-transition-group";

const Background = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`
      }}
      className="background"
    >
      <CSSTransition
        in={props.fadeBool}
        classNames="overlay"
        timeout={props.transitionDuration}
      >
        <div
          class="background-overlay"
          style={{ backgroundColor: `${props.color}` }}
        />
      </CSSTransition>

      <div className="container">{props.children}</div>
    </div>
  );
};

export default Background;
