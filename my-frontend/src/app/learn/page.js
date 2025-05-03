"use client"
import React, { useState } from "react";
import PageHeader from '@/components/pageHeader/PageHeader'
import { CheckCircle, DownloadSimple, MagnifyingGlass } from "@phosphor-icons/react";
import "./learnPage.css"


const articles = [
  {
    id: 1,
    title:
      "THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 2,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "sunday osita",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 3,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 4,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 5,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 6,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 7,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  {
    id: 8,
    title:
      "GODLIGHT, HUMANITY, AND ARTIFICIAL INTELLIGENCE: EXPLORING THE INTERSECTION OF DIVINE INSPIRATION, HUMAN INGENUITY, AND MACHINE LEARNING",
    author: "OpeneAnayo Daniel",
    fileUrl: "/downloads/godlight-ai.pdf",
  },
  // Add more articles here
];


const page = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <div>
        <PageHeader title="Flashes of GodLight" pageImage={"/page2.jpg"} />

    <section className="flash-section">
      <div className="flash-section__container">
        {/* Left side - Intro and explanation */}
        <div className="flash-section__left">
          <p>
            The Flash of GodLight is a profound spiritual experience — a moment
            when the divine light is sensed within or around us, often
            accompanied by insight, warmth, and peace. It is not always
            dramatic; sometimes it's a gentle nudge or clarity that steers the
            soul. This section invites you into a deeper understanding of how
            to perceive, nurture, and share the Flash in daily life.
          </p>
          <p>
            Understanding and practicing the Flash involves several guiding
            concepts that serve as daily touchpoints in your spiritual journey.
            These key ideas provide a simple structure for deepening awareness.
          </p>
        </div>

        {/* Right side - Learning list */}
        <div className="flash-section__right">
          <ul className="flash-section__list">
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Origins of the Flash – scriptural, scientific, experiential</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Recognising the Moment – mindfulness cues and journaling</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Nurturing the Spark – daily 5‑minute light‑awareness practice</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Sharing the Light – guiding others through story and service</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Nurturing the Spark – daily 5‑minute light‑awareness practice</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>Sharing the Light – guiding others through story and service</span>
            </li>
          </ul>
        </div>
      </div>
      </section>
      <section className="book-section">
        <div className="book-section__container">
          {/* Left: Book Image */}
          <div className="book-section__image" role="img" aria-label="GodLight Book cover" >
          <img src={"/book-img.jpg"} alt={""} />
          </div>

          {/* Right: Text Content */}
          <div className="book-section__content">
            <h2 className="book-section__title">Discover the GodLight Book</h2>
            <p className="book-section__description">
            Dive into Dr. Bart Barthelemy’s groundbreaking work, GodLight, which explores 
            the profound and transformative connection between God and Light — spiritually, 
            scientifically, and personally. Rooted in a lifelong journey of faith, inquiry, and discovery, 
            this book offers deep insights into the origins of the universe, the nature of existence, and the 
            divine light within each of us. Through compelling research and spiritual reflection, 
            GodLight reveals how experiencing God as Light can illuminate our purpose, deepen our 
            understanding, and inspire a path toward universal love, harmony, and inner peace.
            </p>
            <a
              href="https://www.amazon.com/dp/your-book-link" // replace with your real link
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              Get a Copy
            </a>
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="book-section__container">
             {/* Right: Text Content */}
             <div className="book-section__content">
            <h2 className="book-section__title">GodLight E-Learning Course</h2>
            <p className="book-section__description">
            Explore the deep connections between Light, Science, and Spirituality for a Journey of Self-Discovery and Enlightenment.
            </p>
            <h5 className="descripton__subheading"> What you'll learn:</h5>

            <ul className="flash-section__list">
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>That Light is the fundamental element of everything.</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>How to integrate Light into your life and your world.</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>How to see Possibilities as Opportunities.</span>
            </li>
            <li>
              <CheckCircle size={28} color="#FA854F" weight="fill" />
              <span>How Being The Light can change your life.</span>
            </li>
          </ul>

          <p>
          This online learning course explores the possibilities and opportunities arising from the intersections of science and spirituality.
          </p>
            
            <a
              href="https://www.amazon.com/dp/your-book-link" // replace with your real link
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              Enroll Now
            </a>
          </div>
          {/* Left: Book Image */}
          <div className="book-section__image" role="img" aria-label="GodLight Book cover" >
          <img src={"/udemy.jpg"} alt={""} />
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="book-section__container">
          {/* Left: Book Image */}
          <div className="book-section__image" role="img" aria-label="GodLight Book cover" >
            <img src={"https://img.youtube.com/vi/xtl2YLpJqjE/maxresdefault.jpg"} alt={""} />
          </div>

          {/* Right: Text Content */}
          <div className="book-section__content">
            <h2 className="book-section__title">Interview on People of Distinction Radio</h2>
            <p className="book-section__description">
            ​In his exclusive interview, Dr. Bart Barthelemy discusses how his lifelong journey led him to explore the profound connection between God and Light, 
            suggesting that Light is not merely a metaphor but a fundamental aspect of divine presence. 
            Dr. Barthelemy emphasizes that understanding God as Light can illuminate our purpose, foster universal 
            love, and bridge the gap between scientific inquiry and spiritual belief.
            </p>
            <a
              href="https://www.amazon.com/dp/your-book-link" // replace with your real link
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              View Now
            </a>
          </div>
        </div>
      </section>
      <section className="article-download-section">
      <div className="article-download-section__container">
        <div className="article-download-section__header">
          <h2>Download Articles</h2>
        </div>

        <div className="article-download-section__search">
          <MagnifyingGlass size={20} color="#555" />
          <input
            type="text"
            placeholder="Search article or author"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6); // Reset count when user searches
            }}
          />
        </div>

        <div className="article-download-section__cards">
          {visibleArticles.length > 0 ? (
            visibleArticles.map((article) => (
              <div key={article.id} className="article-download-card">
                <div className="article-download-card__content">
                  <h3 className="article-download-card__title">{article.title}</h3>
                </div>
                <p className="article-download-card__author">By {article.author}</p>
                <a
                  href={article.fileUrl}
                  download
                  className="article-download-card__btn"
                  aria-label={`Download ${article.title}`}
                >
                  Download <DownloadSimple size={18} weight="bold" />
                </a>
              </div>
            ))
          ) : (
            <div className="no-articles-found">
              <p>No articles found.</p>
            </div>
          )}
        </div>

        {visibleCount < filteredArticles.length && visibleArticles.length > 0 && (
          <div className="article-download-section__loadmore">
            <button onClick={handleLoadMore} className="loadmore-btn">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>


    </div>
  )
}

export default page