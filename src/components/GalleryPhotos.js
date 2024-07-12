import React, { useState, useEffect } from "react";
import "../css/GalleryPhotos.css";
import { useLocation } from "react-router-dom";
import imageData from "./ImageData";
import PopUpDetails from "./PopUpDetails";

const GalleryPhotos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;
  const initialSelection = queryParams.get("selection") || "all";
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selection, setSelection] = useState(initialSelection);
  const [page, setPage] = useState(initialPage);
  // const navigate = useNavigate();

  // const handleNavigation = (path, id) => {
  //   navigate(`${path}?id=${id}&page=${page}&selection=${selection}`);
  //   scrollToTop();
  // };

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

  const getImages = (newSelection) => {
    setSelection(newSelection);
    if (selection === "all") {
      setImages(imageData);
    }
    if (selection === "com") {
      setImages(imageData.filter((image) => image.customer === "com"));
    }
    if (selection === "res") {
      setImages(imageData.filter((image) => image.customer === "res"));
    }
    setSelection(newSelection);
  };

  useEffect(() => {
    getImages(selection);
    // eslint-disable-next-line
  }, [selection]);

  return (
    <div>
      <div className="com-res-btns">
        <h2 onClick={() => getImages("com")}>Commercial Works</h2>
        <h2 onClick={() => getImages("res")}>Residential Works</h2>
      </div>
      <div className="gallery-images-container">
        {images
          .filter((image) => image.page === page)
          .map((image) =>
            image.page === page ? (
              <img
                onClick={(e) => {
                  openModal(image);
                  console.log(image);
                }}
                id="gallery-image"
                key={image.id}
                src={image.src}
                alt={image.desc}
              />
            ) : null
          )}
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
