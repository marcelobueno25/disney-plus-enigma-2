import React from "react";
import "./style.scss";

const Title = (props) => {
  return (
    <h2 className="title" {...props}>
      {props.children}
    </h2>
  );
};

export default Title;
