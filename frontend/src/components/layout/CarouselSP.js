import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function CarouselSP() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className = "img-fluid">
            <img src={require("../../assets/carousel_photo_1.jpg")} width="100%" height="400px" alt="" />
            <p className="legend">Search for professionals in your area</p>
        </div>
        <div className = "img-fluid">
            <img src={require("../../assets/carousel_photo_2.jpg")} width="100%" height="400px" alt=""/>
            <p className="legend">Join today to like, comment, and help promote an artist</p>
        </div>
        <div className = "img-fluid">
            <img src={require("../../assets/carousel_photo_3.jpg")} width="100%" height="400px" alt=""/>
            <p className="legend">Help the photographer community grow</p>
        </div>
    </Carousel>
    )
}