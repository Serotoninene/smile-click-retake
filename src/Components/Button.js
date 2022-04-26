import React from "react";
// Utilitaries
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";

export default function Button(props) {
  const { width } = useWindowSize();
  const tabletFormat = width < 772;
  // Color by default = white
  const { color, bgColor, padding, border } = props;
  return (
    <div
      className="Button"
      style={{
        color: color,
        backgroundColor: bgColor,
        padding: tabletFormat ? "10px 15px" : padding,
        border: border ? "2px solid #162761" : "",
      }}
    >
      {props.children}
    </div>
  );
}
