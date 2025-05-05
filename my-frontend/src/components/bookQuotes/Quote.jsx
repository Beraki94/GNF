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
            <p>
              If believers see Light (or GodLight) as the fundamental element of everything in the universe, then
               understanding, collaboration, mutuality, respect, and universal love may be a more reasonable possibility.
            </p>
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
            <p>
            When science and spirituality don’t overlap, then they complement each other,
             offering new possibilities for understanding God’s presence.
              
            </p>
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
            <p>
            When we explore the true essence of light in God, even when
             faith and reason clash, then we can discover a personal journey toward understanding.
            </p>
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
            <p>
            If we accept that God might be bound by the laws of physics,
             then we can understand why catastrophes happen within a framework of divine mercy.
            </p>
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
            <p>
            When we investigate hitherto undiscovered areas of science from
             a fresh spiritual perspective, then science can explain a faith-based viewpoint
            </p>
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
            <p>
            If we contemplate the intersection of science and
             spirituality, then we stimulate curiosity and a longing for understanding that transcends both
            </p>
          </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Quote;
