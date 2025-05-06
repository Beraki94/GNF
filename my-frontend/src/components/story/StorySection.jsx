"use client";

import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-section__main">
        {/* Left Section - Text Content */}
        <div className="story-section__text">
          <h2>Illuminating Nigeria:<br/> Transformative Power of GodLight</h2>
          <h2 className="small">A journey of Light and Discovery</h2>
          <p>
            By Integrating Scientific Inquiry with spiritual wisdom, <strong>GodLight Nigeria Foundation</strong> offers a unique path to enlightenment that honors 
            divers faiths and traditions. As <strong>Dr. Bathelemy writes</strong>,
            
            <blockquote>
            If belivers see GodLight as the fundamental element of everything in the universe,
            then understanding, collaboration, mutality, respect, and universal love may be a more reasonable possiblity.
          </blockquote>
          </p>
          <p>
            Join us in this transformativ journey to illuminate Nigeria, one heart, one community,one Light at a time.
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
