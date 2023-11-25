import React from 'react'
import "./carousel.css";

export default function Carosel(props) {
  return (
      <div className='carousel-img'>
        <img src={props.src}></img>
      </div>
  )
}
