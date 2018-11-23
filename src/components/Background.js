import React from "react";
import "./Background.scss";

const Background = props => {
  return (
    <div style={props.backgroundImage} className="background blue darken-4">
      {props.children}
    </div>
  );
};

export default Background;
