import React from "react";
import "./scrollbar.css";
export default function Scrollbar(props) {
  console.log(props.index + 1 + "'th item is " + props.src);

  return (
    <div>
      <img src={props.src}></img>
    </div>
  );
}
