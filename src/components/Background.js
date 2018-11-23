import React from "react";
import "./Background.scss";

const Background = props => {
  return <div className="background">{props.children}</div>;
};

export default Background;
