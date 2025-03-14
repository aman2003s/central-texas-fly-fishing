import React from "react";
import ComponentContainer from "./ComponentContainer";
import heroImage from "/fishing-desktop-hero-img.png";
import heroImageMob from "/fishing-mob-hero-img.png";

const Hero = () => {
  return (
    <ComponentContainer>
      <div className="hero-container">
        <div className="mob-show">
          <img
            src={heroImageMob}
            className="hero-img"
            alt="Mobile Hero Image"
          />
        </div>
        <div className="hero-text mob-l-r-pad-24">
          <h1>Central Texas Fly Fishing</h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <button
            aria-label="Get Started"
            onClick={() => {
              console.log("Get started clicked");
            }}
          >
            Get started
          </button>
        </div>
        <div className="mob-hide">
          <img src={heroImage} className="hero-img" alt="Desktop Hero Image" />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Hero;
