import React from "react";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/Designs.css";
// Wine Cooler
import image1 from "../assets/images/Wine Cellar/IMG_1201.png";
import image2 from "../assets/images/Wine Cellar/IMG_1202.png";
import image3 from "../assets/images/Wine Cellar/Wine Cellar 1.jpg";
import image4 from "../assets/images/Wine Cellar/Wine Cellar 2.jpg";
import image5 from "../assets/images/Wine Cellar/IMG_7321.png";
import video2 from "../assets/images/Wine Cellar/Cellarvideo2.mov";
//Walnut Bookcase
import image6 from "../assets/images/Bookcase/Bookcase 1.jpg";
import image7 from "../assets/images/Bookcase/Bookcase 2.jpg";
import image8 from "../assets/images/Bookcase/Bookcase Installed 1.png";
import image9 from "../assets/images/90.png";
import image10 from "../assets/images/Bookcase/IMG_2627_Original.png";

const DesignsPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
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

  return (
    <div>
      <Header />
      <Nav />
      <div className="design-page">
        <div className="wine-cellar">
          <div className="design-box-one">
            <h1 id="design-page-title">Custom Designs</h1>
            <p id="design-page-desc">
              In addition to our woodworking expertise, BR Fabrication also
              specializes in creating custom computer designs tailored to the
              specific requirements and preferences of our clients. Whether it’s
              building high-performance workstations for professional use or
              personalized gaming setups, we ensure that each design meets the
              unique specifications of our customers. Our attention to detail
              and commitment to quality extend to this area, resulting in
              bespoke systems that blend functionality with aesthetic appeal.
              This service underscores our dedication to delivering personalized
              solutions that cater to a wide range of needs and tastes.
            </p>
          </div>
          <div className="design-box-two">
            <h1 id="wine-cellar-title">800 Bottle Wine Cooler</h1>
            <div className="box-two-images-top">
              <img id="sketch-up-wine" src={image4} alt="wine celler" />
              <img id="sketch-up-wine" src={image3} alt="wine celler" />
            </div>
            <br />
            <div className="wine-cellar-description">
              <p>
                This wine cooler is located in a restaurant in Chicago, IL and
                features hundreds of bottles of wine for their customers as well
                as custom lighting. The custom wine cooler features built in
                cabinetry for the cooling units as well as a solid Oak floor for
                looks and durability.
              </p>
            </div>
            <div className="box-two-images-bottom">
              <img id="finished-photo" src={image2} alt="wine celler" />
              <div className="video-container" onClick={handleVideoClick}>
                <video
                  id="wine-cellar-video"
                  ref={videoRef}
                  loop
                  muted
                  style={{ cursor: "pointer" }}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isPlaying && <div className="play-button-overlay">▶️</div>}
              </div>

              <img id="finished-photo" src={image1} alt="wine celler" />
              <img id="finished-photo" src={image5} alt="wine celler" />
            </div>
          </div>
        </div>

        <div className="design-box-three">
          <h1>Custom Cabinetry</h1>
          <div className="box-three-top">
            <img src={image6} alt="Walnut bookcase" />
            <img src={image7} alt="Walnut bookcase" />
          </div>
          <div className="box-three-bottom">
            <img id="finished-photo" src={image9} alt="Walnut bookcase" />
            <img id="finished-photo" src={image8} alt="Walnut bookcase" />
            <img id="finished-photo" src={image10} alt="Walnut bookcase" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignsPage;
