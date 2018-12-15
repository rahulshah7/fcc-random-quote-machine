import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import React from "react";
import "./Background.scss";

const Background = props => (
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

export default Background;
