import Image from "next/image";
import React from 'react'
import headerImg from "/public/images/HeaderImage.svg"

export default function Header() {
  return (
    <div className="header">
        <div className="header__left-side">
            <h4>Branding | Image making </h4>
            <h1>Visual Designer</h1>
            <p>This is a template Figma file, turned into code using Anima. 
            Learn more at AnimaApp.com</p>
            <button>Contact</button>
        </div>

        <div className="header__right-side">
            <Image className="header__img" src={headerImg} alt="Header Image"></Image>
        </div>
    </div>
  )
}
