import React, { useContext } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

  const [menu,setMenu]=useState("Shop");
  const {getTotalcartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
       <img src={logo} alt="" /> 
        <p> Az TRENDS</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("Shop")}}><Link  style={{textDecoration:'none',color:'white'}}to='/'>SHOP</Link>{menu==="Shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color:'white'}}to='/mens'>MEN</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'white'}}to='/women'>WOMEN</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'white'}}to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
         <Link to='/login'><button>login</button></Link>
         <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">
            {getTotalcartItems()}
          </div>
        </div>
      </div>
    
  )
}

export default Navbar