"use client";
import Link from "next/link";
import Image from "next/image";
import "./LearnSection.css";

const LearnCard = ({ title, description, imageUrl, link }) => {
  // Check if link is external (starts with http) or internal
  const isExternal = link.startsWith("http");

  return (
    <div className="learn-card">
      {/* Left - Image */}
      <div className="learn-card__image">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="learn-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link  
          href={"https://www.godlightsite.com/"}
          target="_blank"
        >
          <p className="godlightsite">www.godlightsite.com</p>
        </Link>
        {isExternal ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="learn-card__link"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Link>
        ) : (
          <Link
            href={link}
            className="learn-card__link"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default LearnCard;