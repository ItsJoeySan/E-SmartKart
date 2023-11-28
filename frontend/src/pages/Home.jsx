import React from 'react';
import '../../src/App.css';
import Scrollbar from '../components/scrollbar/Scrollbar';
import sidebarDb from "../db/sibebarDB";
import slides from '../db/carouselDB';
import Carousel from '../components/carousel/Carousel';

export default function Home() {
  return (
    <>
    <div className='scrollbarContainer'>
    {sidebarDb.map((item, index) => (
      <Scrollbar key={index} src={item.src}/>
    ))}
 </div>
        <Carousel slides={slides} />
    </>
  )
}
