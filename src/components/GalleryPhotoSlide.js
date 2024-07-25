import React, { useEffect, useState, useRef } from "react";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";

const GalleryPhotoSlide = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const slideWidth = slideRef.current ? slideRef.current.offsetWidth + 10 : 0;

  const handleScrollRight = () => {
    console.log("Scroll Right button clicked");
    const track = trackRef.current;
    if (track) {
      track.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    console.log("Scroll Left button clicked");
    const track = trackRef.current;
    if (track) {
      track.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="gallery-slide-container">
        <button onClick={handleScrollLeft} className="gallery-arrow left-arrow">
          &#9664;
        </button>
        <div className="gallery-slide-track" ref={trackRef}>
          {imageData.map((image, index) => (
            <img
              onClick={() => openModal(image)}
              className="gallery-slide-image"
              key={index}
              src={image.src}
              alt={image.desc}
              ref={index === 0 ? slideRef : null}
            />
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="gallery-arrow right-arrow"
        >
          &#9654;
        </button>
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
