import React from "react";
import ComponentContainer from "./componentContainer";
import heroImage from "../../public/fishing-desktop-hero-img.png";
import heroImageMob from "../../public/fishing-mob-hero-img.png";

const Hero = () => {
  return (
    <ComponentContainer>
      <div className="hero-container">
        <div className="mob-show">
          <img src={heroImageMob} className="hero-img" />
        </div>
        <div className="hero-text mob-l-r-pad-24">
          <h1>Central Texas Fly Fishing</h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button>Get started</button>
        </div>
        <div className="mob-hide">
          <img src={heroImage} className="hero-img" />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Hero;
