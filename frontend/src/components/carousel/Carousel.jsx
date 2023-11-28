import React, { useEffect, useState } from 'react'
import "./carousel.css";



export default function Carousel({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    },2000);
    return () => clearInterval(interval);
  },[slides.length])

  function hanldeChange(index){
    setCurrentIndex(index);
  }

  return (
    <div className='carousel'>
      {slides.map((slide, idx)=>(
        <img key={idx} className='carousel-img' style={{transform: `translateX(-${currentIndex*100}%)`}} src={slide.src}></img>  
      ))}
      <div className='carousel-indicator-container'>
        <div className='carousel-indicator-container-child'>
          {slides.map((indicatorNo, index) => (
          <div key={index} onClick={() =>{
            hanldeChange(index);
          }} className={index===currentIndex?"active-indicator": "indicators"}></div>
          ))}
            
        </div>
      </div>
    </div>

  ) 
}
