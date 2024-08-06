'use client';
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={'navbar'}>
      <div className={`navbar__group ${isOpen ? 'open' : ''}`}>
        <div className='navbar__logo'>
          <h3>Logo</h3>
          <a className="navbar__menu-button" onClick={toggleMenu}>
            <IoMdMenu />
          </a>
        </div>

        <div className='navbar__right-side'>
          <a>About</a>
          <a>Work</a>
          <a>Contact</a>
        </div>
      </div>

      <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
