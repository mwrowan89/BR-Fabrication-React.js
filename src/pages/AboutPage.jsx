import React from "react";
import BenSanding from "../assets/images/BenSanding.jpg";
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
          <img
            src={BenSanding}
            height="800vh"
            width="600vw"
            alt="Ben Sanding"
          />
          <h1 className="about-description">
            BR Fabrication creates one-of-a-kind, American made heirloom quality
            slab tables and furniture for commercial and residential spaces.
            Founder Ben Rioux hails from a long line of woodworkers in Maine and
            spent many years in NYC cooking for some of the biggest outfits in
            the culinary industry (Executive Chef at NY Stock Exchange, La
            Grenouille). Now, rather than creating dishes, he harvests the
            unique pieces on which they're served.
          </h1>
        </div>
      </div>
    </>
  );
}

export default About;
