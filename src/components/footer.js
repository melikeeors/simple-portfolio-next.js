import { IoLogoDiscord } from "react-icons/io5";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <h1>Lets work together</h1>

      <div className="footer__contact">
        <div className="footer__container">
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com This is a template Figma file,
            turned into code using Anima.
            Learn more at AnimaApp.com
          </p>
          <div className="footer__social">
            <IoLogoDiscord className="footer__icon" />
            <BiLogoFacebookSquare className="footer__icon" />
            <FaDribbble className="footer__icon" />
            <FaInstagram className="footer__icon" />
            <FaBehance className="footer__icon" />
          </div>
        </div>

        <div className="footer__form">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>

          <div className="footer__form-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
