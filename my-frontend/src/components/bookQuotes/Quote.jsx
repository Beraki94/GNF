"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Quote.css";
import Image from "next/image";

const animation = { duration: 50000, easing: (t) => t };

const Quote = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
  });

  return (
    <section className="quote__wrapper">
      <div className="quote__container">
      <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide quote__slide">
          <Image
            src="/quoteImg/quote1.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
            <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
          <div className="keen-slider__slide quote__slide">
          <Image
            src="/quoteImg/quote2.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
          <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
          <div className="keen-slider__slide quote__slide">
          <Image
            src="/quoteImg/quote3.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
          <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
          <div className="keen-slider__slide quote__slide">
          <Image
            src="/quoteImg/quote4.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
          <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
          
          <div className="keen-slider__slide quote__slide">
          <Image
            src="/quoteImg/quote5.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
          <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
          <div className="keen-slider__slide quote__slide ">
          <Image
            src="/quoteImg/quote6.jpg"
            alt="Quote 1"
            fill
            className="quote_img"
            style={{ objectFit: "cover" }}
          />
          <div className="quote__overlay">
            <p>"Let your light so shine before men, that they may see your good works and glorify your Father in heaven."</p>
          </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Quote;
