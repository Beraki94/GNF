"use client";

import "./LearnSection.css";
import LearnCard from "./LearnCard";
import SectionHeader from "../sectionHeader/SectionHeader";

const learnItems = [
  {
    title: "Godlight Book",
    description:
      "Discover deep spiritual insights and timeless wisdom in the Godlight Book—perfect for your personal journey, group study, or moments of reflection. This book offers a transformative guide to help you grow in faith and find deeper meaning in everyday life.",
    imageUrl: "/book-img.jpg",
    link: "https://www.godlightsite.com/",
  },
  {
    title: "Udemy Course",
    description:
      "Join the Godlight course on Udemy and explore rich video lessons designed to deepen your spiritual understanding. Learn at your own pace with structured modules, downloadable resources, and interactive exercises that bring your faith to life in a practical, engaging way.",
    imageUrl: "/udemy.jpg",
    link: "https://www.godlightsite.com/",
  },
  {
    title: "YouTube Coaching",
    description:
      "Watch powerful and inspiring coaching sessions on the Godlight YouTube channel. Whether you're seeking clarity, encouragement, or practical life guidance, these videos provide relatable teachings and real-life applications to strengthen your walk with God.",
    imageUrl: "https://img.youtube.com/vi/xtl2YLpJqjE/maxresdefault.jpg",
    link: "https://www.godlightsite.com/",
  },
];

const LearnSection = () => {
  return (
    <section className="learn-section">
      <div className="learn-section__main">
        <SectionHeader
          title="Learn and Grow"
          subtitle="Discover courses, books, and more to strengthen your journey"
          align="center"
        />
        {learnItems.map((item, index) => (
          <LearnCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default LearnSection;
