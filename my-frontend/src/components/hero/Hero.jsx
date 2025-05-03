"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Hero.css";

const slides = [
  {
    title: "Your Zarkat",
    subtitle: "Changing Lives",
    buttonText: "Join the Movement",
    image: "/heroImg/hero1.jpg",
    alt: "Children smiling in a community supported by GodLight Nigeria Foundation",
  },
  {
    title: "Your Zarkat",
    subtitle: "Empowering Dreams",
    buttonText: "Support Now",
    image: "/heroImg/just3.jpg",
    alt: "Youth learning skills through GodLight Nigeria Foundation programs",
  },
  {
    title: "Your Zarkat",
    subtitle: "Building Futures",
    buttonText: "Get Involved",
    image: "/heroImg/just2.jpg",
    alt: "Community members collaborating on GodLight Nigeria Foundation initiatives",
  },
];

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
    <section
      ref={sliderRef}
      className="hero keen-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="GodLight Nigeria Foundation Hero Carousel"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`keen-slider__slide hero__slide hero${index + 1}`}
          aria-label={`Slide ${index + 1}: ${slide.subtitle}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            style={{ objectFit: "cover" }}
            className="hero__image"
            priority={index === 0}
          />
          <div className="hero__overlay">
            <div className="container hero__content">
              <h1>{slide.title}</h1>
              <h2 className="hero__subtitle">{slide.subtitle}</h2>
              <button
                type="button"
                className="hero__btn"
                aria-label={slide.buttonText}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;