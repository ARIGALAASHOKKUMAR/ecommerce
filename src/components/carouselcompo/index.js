import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.jpg"
import "./index.css"

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img2} alt="Image 2" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
