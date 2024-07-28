import React from "react";
import BenSanding from "../assets/images/BenSanding.jpg";
import image50 from "../assets/images/52.jpg";
import image79 from "../assets/images/82.png";
import Nav from "../components/Nav";
import Header from "../components/Header";
import "../css/About.css";

function About() {
  return (
    <>
      <Header />
      <Nav />
      <div>
        <div className="about">
          <div className="about-first-box">
            <img
              src={BenSanding}
              height="800vh"
              width="600vw"
              alt="Ben Sanding"
            />
            <h1 className="about-description">
              BR Fabrication creates one-of-a-kind, American made heirloom
              quality slab tables and furniture for commercial and residential
              spaces. Founder Ben Rioux hails from a long line of woodworkers in
              Maine and spent many years in NYC cooking for some of the biggest
              outfits in the culinary industry (Executive Chef at NY Stock
              Exchange, La Grenouille). Now, rather than creating dishes, he
              harvests the unique pieces on which they're served.
            </h1>
          </div>
          <div className="about-second-box">
            <h1 className="about-description">
              {" "}
              Ben Rioux - Owner and founder
              <br />
              <br />
              Standing next to a dark walnut headboard prior to it being craned
              into a customers bedroom on the third floor of their home.
            </h1>
            <img
              src={image50}
              height="800vh"
              width="600vw"
              alt="Ben W/ Headboard"
            />
          </div>
          <div className="about-third-box">
            <img
              src={image79}
              height="800vh"
              width="600vw"
              alt="Ben W/ Headboard"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
