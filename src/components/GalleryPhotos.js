import React, { useState, useEffect } from "react";
import "../css/GalleryPhotos.css";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";

const GalleryPhotos = () => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [type, setType] = useState("all");

  const [selection, setSelection] = useState("all");
  const [page, setPage] = useState(1);

  //Page Logic
  const itemsPerPage = 10;
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
  };

  const filterImages = (newSelection) => {
    let filtered = [];
    if (newSelection === "all") {
      filtered = imageData;
    } else if (newSelection === "com") {
      filtered = imageData.filter((image) => image.customer === "com");
    } else if (newSelection === "res") {
      filtered = imageData.filter((image) => image.customer === "res");
    }
    setFilteredImages(filtered);
  };

  const filterByType = (typeSelection) => {
    let filtered = [];
    if (typeSelection === "all") {
      filtered = imageData;
    } else if (typeSelection === "tables") {
      filtered = imageData.filter((image) => image.type === "table");
    } else if (typeSelection === "deco") {
      filtered = imageData.filter((image) => image.type === "deco");
    }
    setFilteredImages(filtered);
  };

  useEffect(() => {
    filterImages(selection);
    filterByType(type);
    setPage(1);
    // eslint-disable-next-line
  }, [selection]);

  return (
    <div>
      <div className="gallery-images-container">
        {currentImages.map((image) => (
          <img
            onClick={(e) => {
              openModal(image);
              console.table(image);
            }}
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
