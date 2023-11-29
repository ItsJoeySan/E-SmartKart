import Carousel from "../components/carousel/Carousel.jsx";
import "../App.css";
import slides from '../db/productDB.jsx';
import React from 'react'
import { useParams } from "react-router-dom";

export default function Product() {
  const {id} = useParams();
  console.log(id);
  const [productItem] = slides;
  const {imgLink , price : {mrpPrice, currentPrice}} = productItem;

  const carauselStyle = {
    width: "auto",
    height: "495px",
    margin: "0 2px 0 2px",
    padding: "10px 0 25px 0"
  };

  const caroImgStyle = {
    minWidth: "100%",
    height: "100%",
    objectFit: "contain",
  }

  function handleClick(value){
    console.log(value);     
  }

  return (
    <>
        
        <Carousel slides={imgLink} onClick={handleClick} prop={{ carauselStyle, caroImgStyle }}/>
        <h1>Product id :{id}</h1>
        
        <div>{productItem.name}</div>
        <div>{mrpPrice}</div>
        <div>{currentPrice}</div>
    </>
  )
}
