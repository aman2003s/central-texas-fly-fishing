import React from "react";
import "./singleStoryCard.css";

const SingleStoryCard = ({ userImg, heading, description }) => {
  return (
    <div className="story-card">
      <div className="image-container mob-hide">
        <img src={userImg} />
      </div>
      <div className="text-container">
        <h4 className="title">{heading}</h4>
        <div className="story-mob-display">
          <img src={userImg} className="mob-show mob-img"/>
          <p className="description">{description}</p>
        </div>
        <button className="read-more-button">Read more</button>
      </div>
    </div>
  );
};

export default SingleStoryCard;
