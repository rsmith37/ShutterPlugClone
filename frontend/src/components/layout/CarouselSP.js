import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { createRequireFromPath } from 'module';


export default function CarouselSP() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
            <img src={require("../../assets/carousel_photo_1.jpg")} width="100%" height="500px" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={require("../../assets/carousel_photo_2.jpg")} width="100%" height="500px" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={require("../../assets/carousel_photo_3.jpg")} width="100%" height="500px" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    )
}



