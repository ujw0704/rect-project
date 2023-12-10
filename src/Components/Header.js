
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header"


function Header() {
  return (
    <div className='Header'>
      

      <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        
        <li>
          <Link to="/Api">Api</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>

        </li>
      
    </div>
  );
}

export default Header;
