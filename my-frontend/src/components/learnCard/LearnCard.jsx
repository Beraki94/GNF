"use client";

import "./LearnSection.css";

const LearnCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="learn-card">
      {/* Left - Image */}
      <div className="learn-card__image">
        <img src={imageUrl} alt={title} />
      </div>

      {/* Right - Content */}
      <div className="learn-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LearnCard;
