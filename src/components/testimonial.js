import Image from "next/image";
import React from 'react'
import Client from "/public/images/Client Image.svg"
import Stars from "/public/images/Stars.svg"

export default function Testimonial() {
  return (
    <div className='testimonial'>
      <h1>Testimonial</h1>
      <div className='testimonial__cards'>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='testimonial__card'>
          <p>
            This is a template Figma file, turned into code using Anima.
            Learn more at AnimaApp.com
          </p>

          <div className='testimonial__client'>
            <Image className="testimonial__client-pp" src={Client} alt="Client Profile Pic"></Image>

            <div className="testimonial__client-right">
              <Image src={Stars} alt="Client Rating Stars"></Image>
              <h3>Gemma Nolen</h3>
              <p>Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
