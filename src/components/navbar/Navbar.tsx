import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MenuItems } from '../MenuItems';
import './Navbar.css';
import Button from '../button/Button';

function Navbar() {

  const [clicked, setClicked] = useState<Boolean>(false);

  const handleClick = () => setClicked(!clicked);
  

  return (
    <nav className='NavbarItems'>
        <ul
          className={clicked ? 'nav-menu active' : 'nav-menu'}
        >
          {MenuItems.map((item, index) => {
            const { className, url, title } = item;
            return (
              <li key={index}>
                <a 
                  className={className}
                  href={url}
                  >
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
    </nav>
  )
}

export default Navbar