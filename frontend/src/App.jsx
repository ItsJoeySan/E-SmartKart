import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Carosel from './components/carousel/Carosel';
import Scrollbar from './components/scrollbar/scrollbar';
import sidebarDb from "./db/sibebarDB";
import carouselDb from './db/carouselDB';

function App() {
  return(
    <>
 <Header />
 <div className='scrollbarContainer'>
    {sidebarDb.map((item, index) => (
      <Scrollbar key={index} src={item.src}/>
    ))}
 </div>
 <div className='carousel-container'>
    {carouselDb.map((item, index) => (
      <Carosel key={index} src={item.src}/>
    ))}
 </div>

 <Footer />
  </>
    )
}

export default App;
