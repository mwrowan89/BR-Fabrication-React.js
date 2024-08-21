import React from "react";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopBanner from "../components/TopBanner";
import "../css/Designs.css";
// Wine Cooler
import image1 from "../assets/images/Wine Cellar/IMG_1201.png";
import image2 from "../assets/images/Wine Cellar/IMG_1202.png";
import image3 from "../assets/images/Wine Cellar/Wine Cellar 1.jpg";
import image4 from "../assets/images/Wine Cellar/Wine Cellar 2.jpg";
import image5 from "../assets/images/Wine Cellar/IMG_7321.png";
import image18 from "../assets/images/Wine Cellar/IMG_6915.jpg";
import image19 from "../assets/images/Wine Cellar/IMG_6922.jpg";
import video2 from "../assets/images/Wine Cellar/Cellarvideo2.mov";
import video5 from "../assets/images/Wine Cellar/IMG_9383.MOV";
//Walnut Bookcase
import image6 from "../assets/images/Bookcase/Bookcase 1.jpg";
import image7 from "../assets/images/Bookcase/Bookcase 2.jpg";
import image8 from "../assets/images/Bookcase/Bookcase Installed 1.png";
import image9 from "../assets/images/90.png";
import image10 from "../assets/images/Bookcase/IMG_2627_Original.png";
import image20 from "../assets/images/Bookcase/167.png";
import image21 from "../assets/images/Bookcase/IMG_2631.png";
import image22 from "../assets/images/Bookcase/IMG_2157.PNG";
import video3 from "../assets/images/Bookcase/IMG_2654.MOV";
//Dresser
import image12 from "../assets/images/Dresser/IMG_6865_Original.png";
import image13 from "../assets/images/Dresser/IMG_7044_Original.png";
import image14 from "../assets/images/Dresser/Master Bedroom Chest Brooke Abrams 1.jpg";
import image16 from "../assets/images/Dresser/Master Bedroom Chest Brooke Abrams-Dimensions.png";
import image17 from "../assets/images/Dresser/IMG_6785.jpg";
import video4 from "../assets/images/Dresser/Dresser-vid.mov";

//Top display
import video6 from "../assets/images/Deskvid.mov";
import video7 from "../assets/images/Rolling Cabinet/Rolling-cab-vid.mov";
import image23 from "../assets/images/23-foot-bar.png";
import image24 from "../assets/images/Oakville.png";

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
    if (window.innerWidth < 500) {
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
    <div>
      {isWindowSize && (
        <>
          <Header />
          <Nav />
        </>
      )}
      {!isWindowSize && <TopBanner />}

      <div className="design-page">
        <h1 id="design-page-main-title">Custom Designs for All Builds</h1>
        <div className="design-box-one">
          <div className="video-container" id="desk-vid">
            <video id="walnut-desk-video" loop muted autoPlay>
              <source src={video6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p id="design-page-desc">
            In addition to our woodworking expertise, BR Fabrication also
            specializes in creating custom computer designs tailored to the
            specific requirements and preferences of our clients. Whether it’s
            building high-performance workstations for professional use or
            personalized gaming setups, we ensure that each design meets the
            unique specifications of our customers. Our attention to detail and
            commitment to quality extend to this area, resulting in bespoke
            systems that blend functionality with aesthetic appeal. This service
            underscores our dedication to delivering personalized solutions that
            cater to a wide range of needs and tastes.
          </p>
          <div className="video-container" id="rolling-cab-vid">
            <video id="rolling-cab-video" loop muted autoPlay>
              <source src={video7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="design-box-one-bottom">
          <img id="wardrobe-photo" src={image24} alt="Oakville Storage" />
          <div id="design-box-one-bottom-descrip">Precision Measurements</div>
          <img id="bar-photo" src={image23} alt="23-foot-bar" />
        </div>
        <br />

        {/* Wine cooler */}

        <div className="design-box-two">
          <h1 id="design-page-title">800 Bottle Wine Cooler</h1>
          <div className="box-two-images-top">
            <img
              className="image-left"
              id="wine-cooler-one"
              src={image4}
              alt="wine celler"
            />
            <img
              className="image-right"
              id="wine-cooler-two"
              src={image3}
              alt="wine celler"
            />
          </div>
          <br />
          <div className="bottom-transition">
            <div className="wine-cellar-description">
              <p id="section-description">
                This state-of-the-art wine cooler, situated in a renowned
                Chicago, IL restaurant, houses an extensive collection of fine
                wines, carefully curated for discerning customers. The cooler
                boasts custom-built cabinetry to accommodate advanced cooling
                units and is complemented by a solid Oak floor, chosen for its
                aesthetic appeal and durability. The addition of bespoke
                lighting enhances the overall ambiance, creating a sophisticated
                atmosphere for wine connoisseurs.
              </p>
            </div>
            <div className="box-two-bottom">
              <br />
              <br />
              <img id="finished-photo" src={image1} alt="wine celler" />
              <div
                className="video-container"
                onClick={() => handleVideoClick(wineVideoRef, setIsWinePlaying)}
              >
                <video
                  id="wine-cellar-video"
                  ref={wineVideoRef}
                  loop
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isWinePlaying && (
                  <div className="play-button-overlay">▶️</div>
                )}
              </div>
              <img id="finished-photo" src={image5} alt="wine celler" />
              <img id="finished-photo" src={image2} alt="wine celler" />
              <img id="finished-photo" src={image18} alt="wine celler" />
              <img id="finished-photo" src={image19} alt="wine celler" />
              <div
                className="video-container"
                onClick={() =>
                  handleVideoClick(emptyWineVideoRef, setIsEmptyWinePlaying)
                }
              >
                <video
                  id="wine-cellar-video"
                  ref={emptyWineVideoRef}
                  loop
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={video5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isEmptyWinePlaying && (
                  <div className="play-button-overlay">▶️</div>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />

        {/* Walnut Bookcase */}

        <div className="design-box-three">
          <h1 id="design-page-title">Walnut Veneer Bookcase</h1>
          <div className="box-three-top">
            <img
              className="image-left"
              id="bookcase-one"
              src={image6}
              alt="Walnut bookcase"
            />
            <img
              className="image-right"
              id="bookcase-two"
              src={image7}
              alt="Walnut bookcase"
            />
          </div>
          <br />
          <div className="bottom-transition">
            <div className="walnut-bookcase-description">
              <p id="section-description">
                A beautiful Walnut Veneer bookcase custom made per customer
                requests and requirements down to the smallest of details. We
                strive for excelence in customer service by keeping in close
                contact with clients to ensure our builds are aligned with their
                vision. Progress videos are sent to keep customers informed and
                allow for adjustments or approvals if needed.
              </p>
            </div>
            <div className="box-three-bottom">
              <img id="finished-photo" src={image8} alt="Walnut bookcase" />
              <img id="finished-photo" src={image9} alt="Walnut bookcase" />
              <div
                className="video-container"
                onClick={() =>
                  handleVideoClick(bookcaseVideoRef, setIsBookcasePlaying)
                }
              >
                <video
                  id="bookcase-video"
                  ref={bookcaseVideoRef}
                  loop
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isBookcasePlaying && (
                  <div className="play-button-overlay">▶️</div>
                )}
              </div>
              <img id="finished-photo" src={image20} alt="Walnut bookcase" />
              <img id="finished-photo" src={image10} alt="Walnut bookcase" />
              <img id="finished-photo" src={image21} alt="Walnut bookcase" />
              <img id="finished-photo" src={image22} alt="Walnut bookcase" />
            </div>
          </div>
        </div>
        <br />

        {/* Dresser */}

        <div className="design-box-four">
          <h1 id="design-page-title">Rift White Oak Dresser</h1>
          <div className="box-four-top">
            <img
              className="image-left"
              id="dresser-one"
              src={image16}
              alt="dresser"
            />
            <img
              className="image-right"
              id="dresser-two"
              src={image14}
              alt="dresser"
            />
          </div>
          <div className="bottom-transition">
            <div className="dresser-description">
              <p id="section-description">
                Custom made white washed dresser made out of rift White Oak with
                solid Oak trim.
              </p>
            </div>

            <div className="box-four-bottom">
              <img id="finished-photo" src={image17} alt="dresser" />
              <div
                className="video-container"
                onClick={() =>
                  handleVideoClick(dresserVideoRef, setIsDresserPlaying)
                }
              >
                <video
                  id="dresser-video"
                  ref={dresserVideoRef}
                  loop
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={video4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isDresserPlaying && (
                  <div className="play-button-overlay">▶️</div>
                )}
              </div>
              <img id="finished-photo" src={image13} alt="dresser" />
              <img id="finished-photo" src={image12} alt="dresser" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignsPage;
