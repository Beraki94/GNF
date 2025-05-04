"use client";

import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-section__main">
        {/* Left Section - Text Content */}
        <div className="story-section__text">
          <h2>Your Zakat Changes Lives</h2>
          <h2 className="small">Your Zakat is more than just charity—it’s a purification of wealth, a fulfilment of duty, and a means of bringing real change.</h2>
          <p>
            According to Bart's book, GodLight Foundation was founded with the mission to transform lives 
            through faith, hope, and love. We believe in making a difference in the world by spreading the message of hope and salvation.
            Through various outreach programs, the foundation has touched 
          </p>
        </div>

        {/* Right Section - Embedded YouTube Video */}
        <div className="story-section__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xR_AiF-Q28E?si=r8PNPZb4tYCW9jUU" // Replace with the actual video ID
            title="GodLight Foundation Story Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
