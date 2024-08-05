import Image from "next/image";
import React from 'react'
import Google from "/public/images/google.svg"
import Nike from "/public/images/nike.svg"
import Samsung from "/public/images/samsung.svg"
import Apple from "/public/images/apple.svg"
import Adidas from "/public/images/adidas.svg"

export default function Logo() {
  return (
    <div className="logo">
      <Image src={Google} alt="Google Logo"></Image>
      <Image src={Nike} alt="Nike Logo"></Image>
      <Image src={Samsung} alt="Samsung Logo"></Image>
      <Image src={Apple} alt="Apple Logo"></Image>
      <Image src={Adidas} alt="Adidas Logo"></Image>
    </div>
  )
}
