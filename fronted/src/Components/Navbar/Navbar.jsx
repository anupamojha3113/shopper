import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [Menu,setMenu]=useState("Shop");
  return (
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} at=""/>
          <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Shop")}}><Link to='/' style={{textDecoration:'None'}}>Shop</Link> {Menu==="Shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("men")}}><Link to='/mens' style={{textDecoration:'None'}} >Men</Link> {Menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration:'None'}}>Women</Link> {Menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'None'}}>Kids</Link> {Menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={card_icon} alt=""/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
      </div>
  )
}

export default Navbar
