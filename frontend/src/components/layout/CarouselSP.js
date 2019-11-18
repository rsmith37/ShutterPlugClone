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
            <p className="legend">Search for professionals in your area</p>
        </div>
        <div>
            <img src={require("../../assets/carousel_photo_2.jpg")} width="100%" height="500px" />
            <p className="legend">Join today to like, comment, and help promote an artist</p>
        </div>
        <div>
            <img src={require("../../assets/carousel_photo_3.jpg")} width="100%" height="500px" />
            <p className="legend">Help the photographer community grow</p>
        </div>
    </Carousel>
    )
}



