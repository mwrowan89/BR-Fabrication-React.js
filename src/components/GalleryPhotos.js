import React, { useEffect, useState } from "react";
import "../css/GalleryPhotos.css";
import PopUpDetails from "./PopUpDetails";

const GalleryPhotos = ({ filteredImages = [] }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;
  useEffect(() => {
    setPage(1);
  }, [filteredImages]);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
    scrollToTop();
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
    console.log(currentImages);
  };

  return (
    <div>
      <div className="gallery-images-container">
        {currentImages.map((image) => (
          <img
            onClick={() => openModal(image)}
            id="gallery-image"
            key={image.id}
            src={image.src}
            alt={image.desc}
          />
        ))}
      </div>
      <div className="gallery-next-prev-btn">
        <h3
          id="prev"
          onClick={(e) => {
            e.preventDefault();
            prevPage();
          }}
        >
          Prev Page
        </h3>
        <p>{page}</p>
        <h3
          id="next"
          onClick={(e) => {
            e.preventDefault();
            nextPage();
          }}
        >
          Next Page
        </h3>
      </div>
      <PopUpDetails
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default GalleryPhotos;
