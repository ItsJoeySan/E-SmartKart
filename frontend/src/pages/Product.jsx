import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  // using useEffect here because we want to get product details as soon as the page load and we are using id so that
  //is won't trigger setProduct everytime page load for any other reason.
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `http://localhost:3000/products/product/${id}`
      );
      setProduct(response.data);
    };

    fetchProducts();
  }, [id]);

  const carauselStyle = {
    width: "auto",
    height: "495px",
    margin: "0 2px 0 2px",
    padding: "10px 0 25px 0",
  };

  const caroImgStyle = {
    minWidth: "100%",
    height: "100%",
    objectFit: "contain",
  };

  function handleClick(value) {
    console.log("This is the id:" + value);
  }

  //I'm checking product.price is true or not because it is rendering a little bit late
  //and if I not do this <div>product.price.mrpPrice<div> will gonna run and I'll get undefined
  if (!product.price) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <Carousel
        items={product}
        onImageClick={handleClick}
        styles={{ carauselStyle, caroImgStyle }}
      /> */}
      <h1>Product id :{id}</h1>
      <div>{product.name}</div>
      <div>{product.price.mrpPrice}</div>
      <div>{product.price.currentPrice}</div>
    </>
  );
}
