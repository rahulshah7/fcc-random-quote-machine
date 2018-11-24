import React from "react";
import "./Background.scss";

const Background = props => {
  return (
    <div style={props.backgroundImage} className="background">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Background;
