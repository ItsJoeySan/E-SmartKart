import React, { useEffect, useState } from 'react'
import "./carousel.css";
import { Link } from 'react-router-dom';

export default function Carousel(props) {
    const prop = props.prop;
    const slides = props.slides;
    const onClk = props.onClick;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        },2000);
        return () => clearInterval(interval);
      },[slides.length])
    
      function handleChange(index){
        setCurrentIndex(index);
      }

  return (
    <div className='carousel' style={prop.carauselStyle}>
      {slides.map((slide, idx)=>(
        <img key={idx} onClick={() => onClk(idx)} className='carousel-img' style={{ transform: `translateX(-${currentIndex*100}%)`, ...prop.caroImgStyle}} src={slide.src}></img>
      ))}
      <div className='carousel-indicator-container'>
        <div className='carousel-indicator-container-child'>
          {slides.map((indicatorNo, index) => (
          <div key={index} onClick={() =>{
            handleChange(index);
          }} 
          className={index===currentIndex?"active-indicator": "indicators"}>  
          </div>
          ))}
            
        </div>
      </div>
    </div>
  )
}
