import React from "react";
import GalleryPhotos from "../components/GalleryPhotos";
import Nav from "../components/Nav";
import GalleryPhotoSlide from "../components/GalleryPhotoSlide";
import GalleryApp from "../components/GalleryApp";

function Gallery() {
  return (
    <>
      <Nav />
      <GalleryPhotoSlide />
      <GalleryApp />{" "}
    </>
  );
}

export default Gallery;
