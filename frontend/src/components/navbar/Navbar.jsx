//need so many inprovements

import React, {useState} from 'react';
import "./navbar.css";
import Sidebar from '../sidebar/sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';

export default function Navbar(){
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function handleSideBar(){
    console.log("I got clicked");
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
    <div className='sidebarNBodyContainer'>

    <div className='sidebarContainer'  style={ isSidebarOpen ? {left:"0"} :{left:"-75%"}}> 
     <Sidebar  />
    </div>
    <div className="sidebarClose" onClick={handleSideBar} style={ isSidebarOpen ? {visibility:'visible'} : {visibility:"hidden"}}>  </div>
      <div className='navbarContainer'>
      
        <div className='navbar'>
          <div className='navbarLeft'>
            <div className='menu'  onClick={handleSideBar}>
              <MenuIcon />
            </div>
            <Link to="/">
            <div ><img className="titleImg" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png"></img></div>
            </Link>
          </div>
          <div className='navbarRight'>
          <Link to="/cart">
            <div className='shoppingCartIcon'><ShoppingCartIcon/></div>
          </Link>
              <Link to="/login">
            <div className='login'>
              <AccountCircleIcon/>
              <p>login</p>  
            </div>
              </Link>
          </div>
        </div>
        <div className='inputBox'>
          <SearchIcon className='searchIcon'/>
          <input type="text" placeholder='Search for Products, Brands and More'></input>
        </div>
      </div>
   

    </div>
    </>
  )
}
