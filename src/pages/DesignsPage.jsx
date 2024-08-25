import React from "react";
import DesignApp from "../components/DesignApp";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopBanner from "../components/TopBanner";
import "../css/Designs.css";

const DesignsPage = () => {
  const wineVideoRef = useRef(null);
  const [isWinePlaying, setIsWinePlaying] = useState(false);

  const emptyWineVideoRef = useRef(null);
  const [isEmptyWinePlaying, setIsEmptyWinePlaying] = useState(false);

  const bookcaseVideoRef = useRef(null);
  const [isBookcasePlaying, setIsBookcasePlaying] = useState(false);

  const dresserVideoRef = useRef(null);
  const [isDresserPlaying, setIsDresserPlaying] = useState(false);
  const [isWindowSize, setIsWindowSize] = useState(false);

  const handleVideoClick = (videoRef, setIsPlaying) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const windowSize = () => {
    if (window.innerWidth < 700) {
      setIsWindowSize(false);
    } else {
      setIsWindowSize(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", windowSize);
    windowSize();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(
        ".image-left, .image-right, .bottom-transition"
      );
      const scrollPosition = window.scrollY + window.innerHeight;

      buttons.forEach((button) => {
        if (scrollPosition > button.offsetTop) {
          button.classList.add("show");
        }
        // else {
        //   button.classList.remove("show");
        // }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Nav />

      <DesignApp />
    </>
  );
};

export default DesignsPage;
