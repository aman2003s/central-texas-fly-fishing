import React from "react";
import ComponentContainer from "./componentContainer";
import SingleStoryCard from "./SingleStoryCard";
import storyImage1 from "../../public/story-1.png";
import storyImage2 from "../../public/story-2.png";
import storyImage3 from "../../public/story-3.png";
import storyImage4 from "../../public/story-4.png";

const Story = () => {
  return (
    <ComponentContainer>
      <div className="story-text">
        <h2>Member stories</h2>
        <div className="story-card-container">
          <SingleStoryCard
            userImg={storyImage1}
            heading={"John’s Story"}
            description={
              "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh "
            }
          />
          <SingleStoryCard
            userImg={storyImage2}
            heading={"The Journey"}
            description={
              "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc"
            }
          />
          <SingleStoryCard
            userImg={storyImage3}
            heading={"Catch Day"}
            description={
              "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque"
            }
          />
          <SingleStoryCard
            userImg={storyImage4}
            heading={"Trout Tales"}
            description={
              "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed"
            }
          />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Story;
