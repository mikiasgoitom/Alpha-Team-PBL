import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
        <h2 id='logo'>Craino</h2>
        <ul className='navbar-menu'>
            <li id="second"><Link to="./register" style={{textDecoration:'none'}}>Register</Link></li>
            <li id="first"><Link to="../App" style={{textDecoration:'none'}}>Home</Link></li>
        </ul>
    </section>
  )
}

export default Navbar;
