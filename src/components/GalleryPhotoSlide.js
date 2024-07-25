import React, { useEffect, useState, useRef } from "react";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";
import Loading from "./Loading";

const GalleryPhotoSlide = () => {
  // const [shuffledImages, setShuffledImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const trackRef = useRef(null);
  const slideRef = useRef(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const shuffledArray = (array) => {
  //     const shuffled = array.slice();
  //     for (let i = shuffled.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //     }
  //     return shuffled;
  //   };
  //   setShuffledImages(shuffledArray(imageData));
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    const track = trackRef.current;
    const slide = slideRef.current;
    const slideWidth = slide ? slide.offsetWidth + 10 : 0;

    const handleScrollRight = () => {
      if (track) {
        track.scrollBy({ left: slideWidth, behavior: "smooth" });
      }
    };

    const handleScrollLeft = () => {
      if (track) {
        track.scrollBy({ left: -slideWidth, behavior: "smooth" });
      }
    };

    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");

    rightArrow.addEventListener("click", handleScrollRight);
    leftArrow.addEventListener("click", handleScrollLeft);

    return () => {
      rightArrow.removeEventListener("click", handleScrollRight);
      leftArrow.removeEventListener("click", handleScrollLeft);
    };
  }, []);

  return (
    <>
      <div className="gallery-slide-container">
        <button className="gallery-arrow left-arrow">&#9664;</button>
        <div className="gallery-slide-track">
          {imageData.map((image, index) => (
            <img
              onClick={() => openModal(image)}
              className="gallery-slide-image"
              key={index}
              src={image.src}
              alt={image.desc}
            />
          ))}
        </div>
        <button className="gallery-arrow right-arrow">&#9654;</button>
      </div>

      <PopUpDetails
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default GalleryPhotoSlide;
