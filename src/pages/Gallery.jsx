import React from "react";
import Nav from "../components/Nav";
import GalleryPhotoSlide from "../components/GalleryPhotoSlide";
import GalleryApp from "../components/GalleryApp";
import Header from "../components/Header";

function Gallery() {
  return (
    <>
      <Header />
      <Nav />
      <GalleryPhotoSlide />
      <GalleryApp />
    </>
  );
}

export default Gallery;
