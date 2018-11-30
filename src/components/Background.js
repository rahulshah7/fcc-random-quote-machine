import React from "react";

const Background = props => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundColor: `${props.color}`
      }}
      className="background"
    >
      <div class="background-overlay" />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Background;
