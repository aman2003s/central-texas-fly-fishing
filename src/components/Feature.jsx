import React from "react";
import ComponentContainer from "./componentContainer";
import Accordion from "./Accordion";
import imageUrl from "../../public/feature-1.png";
import imageUrlMob1 from "../../public/feature-1-mob.png";
import imageUrlMob2 from "../../public/feature-2-mob.png";
import imageUrlMob3 from "../../public/feature-3-mob.png";

const Feature = () => {
  return (
    <div className="feature-container">
      <ComponentContainer>
          <div className="feature-text">
            <h2>Featured options</h2>
            <Accordion
              imageUrl={imageUrl}
              imageUrlMob={imageUrlMob1}
              heading={"Explore Fly Fishing"}
              subHeading={"Explore Fly Fishing"}
              description={
                "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc"
              }
              initialState={true}
            />
            <Accordion
              imageUrl={imageUrl}
              imageUrlMob={imageUrlMob2}
              heading={"Fly Fishing Experiences"}
              subHeading={"Fly Fishing Experiences"}
              description={
                "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque"
              }
            />
            <Accordion
              imageUrl={imageUrl}
              imageUrlMob={imageUrlMob3}
              heading={"Gear Up and Catch More"}
              subHeading={"Gear Up and Catch More"}
              description={
                "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S"
              }
            />
          </div>
      </ComponentContainer>
    </div>
  );
};

export default Feature;
