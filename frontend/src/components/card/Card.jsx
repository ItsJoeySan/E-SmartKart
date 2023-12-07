import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      {props.items.map((item, idx) => (
        <img key={idx} src={item.src}></img>
      ))}
    </div>
  );
}
