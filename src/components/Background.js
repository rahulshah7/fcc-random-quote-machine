import React from "react";
import "./Background.scss";

const Background = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundColor: `${props.color}`
      }}
      className="background"
    >
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Background;
