import React, { useEffect, useState } from "react";
import "./carousel.css";

export default function Carousel({ items, onImageClick, styles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="carousel" style={styles.carauselStyle}>
      {items.map((slide, idx) => (
        <img
          key={idx}
          src={slide.src}
          // alt={slide.name}
          onClick={() => onImageClick(slide)}
          className="carousel-img"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            ...styles.caroImgStyle,
          }}
        >
          {/* {console.log(slide.src)} */}
        </img>
      ))}
      <div className="carousel-indicator-container">
        <div className="carousel-indicator-container-child">
          {items.map((indicator, index) => (
            <div
              key={index}
              onClick={() => {
                handleChange(index);
              }}
              className={
                index === currentIndex ? "active-indicator" : "indicators"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
