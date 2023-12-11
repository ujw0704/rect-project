
import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='Header'>
      
    <ul>

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
      
    </ul>
    </div>
  );
}

export default Header;
