import React from "react";
import "./singleStoryCard.css";

const SingleStoryCard = ({ userImg, heading, description }) => {
  return (
    <div className="story-card">
      <div className="image-container">
        <img src={userImg} />
      </div>
      <div className="text-container">
        <h4 className="title">{heading}</h4>
        <p className="description">{description}</p>
        <button className="learn-more-button">Read more</button>
      </div>
    </div>
  );
};

export default SingleStoryCard;
