import React from "react";
import "../../src/App.css";
import Scrollbar from "../components/scrollbar/Scrollbar";
import sidebarDb from "../db/sibebarDB";
import slides from "../db/carouselDB";
import Carousel from "../components/carousel/Carousel.jsx";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card.jsx";

export default function Home() {
  const navigate = useNavigate();
  const carauselStyle = {
    width: "100%",
    height: "auto",
  };

  const caroImgStyle = {
    width: "100%",
    height: "auto",
  };

  function handleClick(item) {
    navigate(`/products/product/${item.id}`);
  }

  return (
    <>
      <div className="scrollbarContainer">
        {sidebarDb.map((item, index) => (
          <Scrollbar key={index} src={item.src} />
        ))}
      </div>
      <Carousel
        items={slides}
        onImageClick={handleClick}
        styles={{ carauselStyle, caroImgStyle }}
      />
      <Card />
    </>
  );
}
