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
      {items.map((slide) => (
        <img
          key={slide.id}
          src={slide.src}
          alt={slide.name}
          onClick={() => onImageClick(slide)}
          className="carousel-img"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            ...styles.caroImgStyle,
          }}
        ></img>
      ))}
      <div className="carousel-indicator-container">
        <div className="carousel-indicator-container-child">
          {items.map((indicator) => (
            <div
              key={indicator.id}
              onClick={() => {
                handleChange(indicator.id);
              }}
              className={
                indicator.id === currentIndex
                  ? "active-indicator"
                  : "indicators"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
