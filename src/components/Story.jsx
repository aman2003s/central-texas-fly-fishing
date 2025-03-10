import React from "react";
import ComponentContainer from "./ComponentContainer";
import SingleStoryCard from "./SingleStoryCard";

const storyData = [
    {
        userImg: "/story-1.png",
        heading: "John’s Story",
        description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    },
    {
        userImg: "/story-2.png",
        heading: "The Journey",
        description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
        userImg: "/story-3.png",
        heading: "Catch Day",
        description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
        userImg: "/story-4.png",
        heading: "Trout Tales",
        description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    },
];

const Story = () => {
    return (
        <ComponentContainer>
            <div className="story-text">
                <h2>Member stories</h2>
                <div className="story-card-container">
                    {storyData.map((story, index) => (
                        <SingleStoryCard key={index} {...story} />
                    ))}
                </div>
            </div>
        </ComponentContainer>
    );
};

export default Story;