import React from "react";
import { useEffect } from "react";
import BenSanding from "../assets/images/BenSanding.jpg";
import image50 from "../assets/images/52.jpg";
import image79 from "../assets/images/82.png";
import Nav from "../components/Nav";
import Header from "../components/Header";
import "../css/About.css";

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(
        ".about-second-box, .about-third-box, .about-first-box"
      );
      const scrollPosition = window.scrollY + window.innerHeight;

      buttons.forEach((button) => {
        if (scrollPosition > button.offsetTop) {
          button.classList.add("show");
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <div>
        <div className="about">
          <div className="about-first-box">
            <img
              id="ben-sanding"
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
            <div className="about-description">
              <h1 id="about-titles">Ben Rioux - Owner and Founder</h1>
              <br />
              <br />
              <p>
                Standing next to a dark walnut headboard prior to it being crane
                lifted into a customers bedroom on the third floor of their
                home.
              </p>
            </div>
            <img
              id="ben-headboard"
              src={image50}
              height="800vh"
              width="600vw"
              alt="Ben W/ Headboard"
            />
          </div>
          <div className="about-third-box">
            <img
              id="ben-wine-cellar"
              src={image79}
              height="800vh"
              width="600vw"
              alt="Ben W/ Wine Cellar"
            />
            <div className="about-description">
              <h1 id="about-titles">Versatility in All Areas</h1>
              <br />
              <br />
              <p>
                BR Fabrication is renowned for its versatility in woodworking,
                catering to a wide range of custom projects. From crafting
                exquisite dining tables that become the centerpiece of any home
                to designing elegant wine cellars that add a touch of
                sophistication, our expertise is showcased in every piece. Our
                works extend beyond these specialties, embracing a diverse array
                of woodworking projects that highlight our commitment to quality
                and innovation. Whether it's for a residential or commercial
                space, BR Fabrication consistently delivers unique and finely
                crafted solutions that meet the diverse needs and tastes of our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
