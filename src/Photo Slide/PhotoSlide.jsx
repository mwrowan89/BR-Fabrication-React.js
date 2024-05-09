import React, { useEffect, useState } from "react";
import './PhotoSlide.css';

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/9.jpeg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpeg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/commercial1.jpg';
import image10 from '../assets/images/commercial2.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/IMG_1589.jpg';
import image14 from '../assets/images/IMG_1649.jpg';
import image15 from '../assets/images/bakan1.png';
import image16 from '../assets/images/bakan2.png';
import image17 from '../assets/images/9.png';
import image18 from '../assets/images/10.png';
import image20 from '../assets/images/12.png';
import image21 from '../assets/images/13.png';
import image22 from '../assets/images/14.png';
import image23 from '../assets/images/15.png';
import image24 from '../assets/images/16.png';


function PhotoSlide() {
    const [images] = useState([
        image16,image18,image15,image12,image17,image23,image20,image24,image21,image14,
        image10, image9, image11, image3, image2, image6, image4, image5, image7, image1, image8,image22  
    ]);
    const [timer, setTimer] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      startSlide();
      return () => {
        clearInterval(timer);
      };
    }, [currentIndex]);

    const startSlide = () => {
      setTimer(setInterval(next, 5000));
    }

    const next = () => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }

    const prev = () => {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }

    const currentImg = images[Math.abs(currentIndex) % images.length];

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        if (event.target.className === 'prev') {
            prev();
        } else if (event.target.className === 'next') {
            next();
        }
    };

    return (
        <>
            <div className="photo-slide">
                
                <img className="slide-images" src={currentImg} alt="" />
            <div className="buttons"> 
            <a className="prev" onClick={handleClick} href="#">&#10094; Previous</a>
            <a className="next" onClick={handleClick} href="#">Next &#10095;</a>
            </div>
            </div>
            
        </>
    );
  }


  export default PhotoSlide;


  