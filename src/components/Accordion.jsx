import React, { useState, useRef, useEffect } from "react";
import "./css/accordion.css";

const Accordion = ({
    imageUrl,
    imageUrlMob = imageUrl,
    heading,
    description,
    initialState = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(initialState);
    const contentRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            toggleExpand();
        }
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.setAttribute("aria-hidden", !isExpanded);
        }
    }, [isExpanded]);

    return (
        <div className={`accordion-component ${isExpanded ? "expanded" : ""}`}>
            <div
                className="header"
                onClick={toggleExpand}
                onKeyDown={handleKeyDown}
                aria-expanded={isExpanded}
                aria-controls="accordion-content"
                role="button"
                tabIndex={0}
            >
                <span className="title">{heading}</span>
                <span className="arrow-container">
                    <i className={`arrow ${isExpanded ? "up" : "down"}`}></i>
                </span>
            </div>
            <div
                ref={contentRef}
                id="accordion-content"
                className="content mob-l-r-pad-20"
                aria-hidden={!isExpanded}
            >
                <div className="image-container">
                    <img src={imageUrl} alt={heading} className="image" />
                </div>
                <div
                    className="text-container"
                    style={{ "--feature-bg-url": `url(${imageUrlMob})` }}
                >
                    <h3 className="title">{heading}</h3>
                    <p className="description">{description}</p>
                    <button className="learn-more-button" onClick={()=>{console.log("learn more clicked")}}>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Accordion;