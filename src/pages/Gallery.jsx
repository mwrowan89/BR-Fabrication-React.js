import React from "react";
import GalleryPhotos from "../components/GalleryPhotos";
import Nav from "../components/Nav";
import GalleryPhotoSlide from "../components/GalleryPhotoSlide";

function Gallery() {
  return (
    <>
      <Nav />
      <GalleryPhotoSlide />
      <GalleryPhotos />
    </>
  );
}

export default Gallery;
