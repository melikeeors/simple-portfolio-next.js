'use client';
import Image from "next/image";
import Google from "/public/images/google.svg"
import Nike from "/public/images/nike.svg"
import Samsung from "/public/images/samsung.svg"
import Apple from "/public/images/apple.svg"
import Adidas from "/public/images/adidas.svg"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Logo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="logo" id="about">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image src={Google} alt="Google Logo"></Image>
          </div>
          <div>
            <Image src={Nike} alt="Nike Logo"></Image>
          </div>
          <div>
            <Image src={Samsung} alt="Samsung Logo"></Image>
          </div>
          <div>
            <Image src={Apple} alt="Apple Logo"></Image>
          </div>
          <div>
            <Image src={Adidas} alt="Adidas Logo"></Image>
          </div>
        </Slider>
      </div>
    </div>
  );
}
