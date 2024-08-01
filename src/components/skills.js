import Image from "next/image";
import React from 'react'
import skill1 from "/public/images/Skills1.svg"
import skill2 from "/public/images/Skills2.svg"
import skill3 from "/public/images/Skills3.svg"
import skill4 from "/public/images/Skills4.svg"

export default function Skills() {
    return (
        <div className="skills">
            <div className="skills__skill">
                <Image className="skills__icon" src={skill1} alt="Skills Icon 1"></Image>
                <div className="skills__text">
                    <h3>Product Design</h3>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
            <div className="skills__skill">
                <Image className="skills__icon" src={skill2} alt="Skills Icon 2"></Image>
                <div className="skills__text">
                    <h3>Visual Design</h3>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
            <div className="skills__skill">
                <Image className="skills__icon" src={skill3} alt="Skills Icon 3"></Image>
                <div className="skills__text">
                    <h3>Art Direction</h3>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
            <div className="skills__skill">
                <Image className="skills__icon" src={skill4} alt="Skills Icon 4"></Image>
                <div className="skills__text">
                    <h3>UI/UX</h3>
                    <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
            </div>
        </div>
    )
}
