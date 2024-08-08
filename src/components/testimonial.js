'use client';
import Image from "next/image";
import Client from "/public/images/Client Image.svg"
import Stars from "/public/images/Stars.svg"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <div className="testimonial">
      <h1>Testimonial</h1>

      <div className="testimonial__container">
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

      <div className="slider-container">
        <Slider {...settings}>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
        </Slider>
      </div>
    </div>
  );
}
