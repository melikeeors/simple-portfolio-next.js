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
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
