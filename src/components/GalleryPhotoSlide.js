import React, { useEffect, useState, useRef } from "react";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";

const GalleryPhotoSlide = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollAmount, setScrollAmount] = useState(1500);
  const trackRef = useRef(null);
  const slideRef = useRef(null);
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);

  const updateScrollAmount = () => {
    if (window.innerWidth < 500) {
      setScrollAmount(500);
    } else {
      setScrollAmount(1500);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScrollAmount);
    updateScrollAmount();
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const slide = slideRef.current;
    if (!track || !slide) return;

    const handleScrollRight = () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const handleScrollLeft = () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const rightArrow = rightArrowRef.current;
    const leftArrow = leftArrowRef.current;

    if (rightArrow && leftArrow) {
      rightArrow.addEventListener("click", handleScrollRight);
      leftArrow.addEventListener("click", handleScrollLeft);
    } else {
      console.log("Arrows not found");
    }

    return () => {
      if (rightArrow)
        rightArrow.removeEventListener("click", handleScrollRight);
      if (leftArrow) leftArrow.removeEventListener("click", handleScrollLeft);
    };
  }, [scrollAmount]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const filteredImages = imageData.filter((image) => image.feature === true);
  const shuffledImages = shuffleArray(filteredImages);

  return (
    <>
      <div className="gallery-slide-container">
        <button ref={leftArrowRef} className="gallery-arrow left-arrow">
          &#9664;
        </button>
        <div className="gallery-slide-track" ref={trackRef}>
          {shuffledImages.map((image, index) => (
            <img
              onClick={() => {
                openModal(image);
                console.table(image);
              }}
              className="gallery-slide-image"
              key={index}
              src={image.src}
              alt={image.desc}
              ref={index === 0 ? slideRef : null}
            />
          ))}
        </div>
        <button ref={rightArrowRef} className="gallery-arrow right-arrow">
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

// .filter(image => image.feature === true)

export default GalleryPhotoSlide;
