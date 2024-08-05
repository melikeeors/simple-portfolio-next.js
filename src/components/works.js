import Image from "next/image";
import React from 'react'
import img1 from "/public/images/Rectangle1.svg"
import img2 from "/public/images/Rectangle2.svg"
import img3 from "/public/images/Rectangle3.svg"
import img4 from "/public/images/Rectangle4.svg"
import img5 from "/public/images/Rectangle5.svg"
import img6 from "/public/images/Rectangle6.svg"

export default function Works() {
    return (
        <div className="latest-works">
            <h1>Latest work</h1>
            <div className="latest-works__works">
                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img1}></Image>
                    <div className="latest-works__text">
                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>

                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img2}></Image>
                    <div className="latest-works__text">
                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>

                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img3}></Image>
                    <div className="latest-works__text">

                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>

                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img4}></Image>
                    <div className="latest-works__text">
                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>

                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img5}></Image>
                    <div className="latest-works__text">
                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>

                <div className="latest-works__work">
                    <Image className="latest-works__img" src={img6}></Image>
                    <div className="latest-works__text">
                        <h5>Project title</h5>
                        <p>UI, Art drection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
