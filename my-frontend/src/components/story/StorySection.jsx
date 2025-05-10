"use client";

import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-section__main">
        {/* Left Section - Text Content */}
        <div className="story-section__text">
          <h2>
            Illuminating Nigeria:
            <br /> Transformative Power of GodLight
          </h2>
          <h2 className="small">A journey of Light and Discovery</h2>
          <p>
            By integrating scientific inquiry with spiritual wisdom,{" "}
            <strong>GodLight Nigeria Foundation</strong> offers a unique path to
            enlightenment that honors diverse faiths and traditions. As{" "}
            <strong>Dr. Bathelemy writes</strong>:
          </p>
          <blockquote>
            If believers see GodLight as the fundamental element of everything in the universe,
            then understanding, collaboration, mutuality, respect, and universal love may be a more reasonable possibility.
          </blockquote>
          <p>
            Join us in this transformative journey to illuminate Nigeria—one heart, one community, one Light at a time.
          </p>
        </div>

        {/* Right Section - Embedded YouTube Video */}
        <div className="story-section__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xR_AiF-Q28E?si=r8PNPZb4tYCW9jUU"
            title="GodLight Foundation Story Video"
            aria-label="GodLight Foundation Story Video"
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
