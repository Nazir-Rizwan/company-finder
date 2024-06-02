import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  ];

const ImageCar = () => {
  return (
    <div className='mt-5'>

<Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
      
    </div>
  )
}

export default ImageCar