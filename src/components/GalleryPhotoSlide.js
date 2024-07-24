import React, { useEffect, useState } from "react";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";
import Loading from "./Loading";

const GalleryPhotoSlide = () => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    setLoading(true);
    const shuffledArray = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledImages(shuffledArray(imageData));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="gallery-slide-container">
          <div className="gallery-slide-track">
            {shuffledImages.map((image, index) => (
              <img
                onClick={() => openModal(image)}
                className="gallery-slide-image"
                key={index}
                src={image.src}
                alt={image.desc}
              />
            ))}
          </div>
        </div>
      )}
      <PopUpDetails
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default GalleryPhotoSlide;
