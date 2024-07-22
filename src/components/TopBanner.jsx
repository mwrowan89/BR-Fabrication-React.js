import React from "react";
import "../css/TopBanner.css";

const TopBanner = () => {
  return (
    <div className="banner-conatiner">
      <div className="top-header-left">
        <h1>
          <a href="/">BR Fabricatio</a>n
        </h1>
      </div>
      <div className="top-header-right">
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default TopBanner;
