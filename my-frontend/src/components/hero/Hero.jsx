"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Hero.css";

const Hero = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: true,
      created(slider) {
        slider.moveToIdx(1, true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section ref={sliderRef} className="hero keen-slider">
      {/* Slide 1 */}
      <div className="keen-slider__slide hero__slide hero1">
        <div className="hero__overlay">
          <div className="hero__content ">
            <h1>Your Zarkat</h1>
            <h2 className="hero__subtitle">Changing Lives</h2>
            <button className="hero__btn">Join the Movement</button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="keen-slider__slide hero__slide hero2">
        <div className="hero__overlay">
          <div className="hero__content">
            <h1>Your Zarkat</h1>
            <h2 className="hero__subtitle">Empowering Dreams</h2>
            <button className="hero__btn">Support Now</button>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="keen-slider__slide hero__slide hero3">
        <div className="hero__overlay">
          <div className="hero__content">
            <h1>Your Zarkat</h1>
            <h2 className="hero__subtitle">Building Futures</h2>
            <button className="hero__btn">Get Involved</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
