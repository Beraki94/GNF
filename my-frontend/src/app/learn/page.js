"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/pageHeader/PageHeader";
import { CheckCircle, DownloadSimple, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import "./learnPage.css";

const articles = [
""
];

export default function LearnPage() {
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
    <div className="learn-page">
      <PageHeader title="Flashes of GodLight" pageImage="/page2.jpg" />
      <section className="flash-section">
  <div className="flash-section__container">
    <h2 className="flash-section__title">
      Illuminate Your Path: Have a GodLight Conversation
    </h2>

    <div className="flash-section__columns">
      <div className="flash-section__left">
        <p>
        <strong>The Flash of GodLight is a profound spiritual experience</strong> — a moment when the divine light is sensed within or around us, often accompanied by insight, warmth, and peace. It is not always dramatic; sometimes it is a gentle nudge or clarity that steers the soul. This section
        invites you into a deeper understanding of how to perceive, nurture, and share the Flash in daily life.
        </p>
        <br/>
        <p>
        As a Lightseeker, you are on a quest for deeper understanding and connection. Now, take the next step by engaging in a transformative conversation with a GodLight Beacon
        </p>

        <h3>What is a GodLight Conversation?</h3>
        <p>
          A GodLight Conversation is a unique opportunity to explore your own thoughts, feelings,
          emotions, language and behaviors in relation to the concept of GodLight. Guided by a Beacon,
          you will delve into how universal love and peace form the foundation of GodLight—a higher
          order of understanding that connects us all.
        </p>
      </div>

      <div className="flash-section__right">
        <h3>Why a GodLight Conversation?</h3>
        <ul className="flash-section__list">
          <li>
            <CheckCircle size={24} color="#3B3F58" weight="fill" />
            <span>
              <strong>Self-Exploration:</strong> Reflect on where you are now in your spiritual journey,
              and articulate your thoughts, feelings, and behaviors in relation to GodLight.
            </span>
          </li>
          <li>
            <CheckCircle size={24} color="#3B3F58" weight="fill" />
            <span>
              <strong>Personal Growth:</strong> Discover how the concept of GodLight can illuminate your path,
              fostering personal growth and emotional well-being.
            </span>
          </li>
          <li>
            <CheckCircle size={24} color="#3B3F58" weight="fill" />
            <span>
              <strong>Meaningful Dialogue:</strong> Engage in a deep, personal dialogue with a Beacon and
              like-minded individuals who share your quest for enlightenment.
            </span>
          </li>
          <li>
            <CheckCircle size={24} color="#3B3F58" weight="fill" />
            <span>
              <strong>Universal Connection:</strong> Understand how GodLight transcends individual beliefs
              and resonates with people of all backgrounds.
            </span>
          </li>
        </ul>
        <Link
          href="#book"
          className="flash-section__cta"
        >
          Start Your Conversation
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="book-section" id="book">
        <div className="book-section__container">
          <div className="book-section__image" role="img" aria-label="GodLight Book cover">
            <Image
              src="/book-img.jpg"
              alt="GodLight Book Cover"
              width={300}
              height={400}
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
          </div>
          <div className="book-section__content">
            <h2 className="book-section__title">Discover the GodLight Book</h2>
            <p className="book-section__description">
              Dive into Dr. Bart Barthelemy’s groundbreaking work, GodLight, which explores the profound and transformative connection between God and Light — spiritually, scientifically, and personally. Rooted in a lifelong journey of faith, inquiry, and discovery, this book offers deep insights into the origins of the universe, the nature of existence, and the divine light within each of us. Through compelling research and spiritual reflection, GodLight reveals how experiencing God as Light can illuminate our purpose, deepen our understanding, and inspire a path toward universal love, harmony, and inner peace.
            </p>
            <Link
              href="https://www.amazon.com/dp/your-book-link"
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              Get a Copy
            </Link>
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="book-section__container">
          <div className="book-section__content">
            <h2 className="book-section__title">GodLight E-Learning Course</h2>
            <p className="book-section__description">
              Explore the deep connections between Light, Science, and Spirituality for a Journey of Self-Discovery and Enlightenment.
            </p>
            <h3 className="book__subheading">What you will learn:</h3>
            <ul className="flash-section__list">
              <li>
                <CheckCircle size={24} color="#FA854F" weight="fill" aria-hidden="true" />
                <span>That Light is the fundamental element of everything.</span>
              </li>
              <li>
                <CheckCircle size={24} color="#FA854F" weight="fill" aria-hidden="true" />
                <span>How to integrate Light into your life and your world.</span>
              </li>
              <li>
                <CheckCircle size={24} color="#FA854F" weight="fill" aria-hidden="true" />
                <span>How to see Possibilities as Opportunities.</span>
              </li>
              <li>
                <CheckCircle size={24} color="#FA854F" weight="fill" aria-hidden="true" />
                <span>How Being The Light can change your life.</span>
              </li>
            </ul>
            <p>
              This online learning course explores the possibilities and opportunities arising from the intersections of science and spirituality.
            </p>
            <Link
              href="https://www.amazon.com/dp/your-book-link"
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              Enroll Now
            </Link>
          </div>
          <div className="book-section__image" role="img" aria-label="GodLight E-Learning Course">
            <Image
              src="/udemy.jpg"
              alt="GodLight E-Learning Course Image"
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="book-section__container">
          <div className="book-section__image" role="img" aria-label="Interview on People of Distinction Radio">
            <Image
              src="https://img.youtube.com/vi/xtl2YLpJqjE/maxresdefault.jpg"
              alt="Interview on People of Distinction Radio Thumbnail"
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="book-section__content">
            <h2 className="book-section__title">Interview on People of Distinction Radio</h2>
            <p className="book-section__description">
              In his exclusive interview, Dr. Bart Barthelemy discusses how his lifelong journey led him to explore the profound connection between God and Light, suggesting that Light is not merely a metaphor but a fundamental aspect of divine presence. Dr. Barthelemy emphasizes that understanding God as Light can illuminate our purpose, foster universal love, and bridge the gap between scientific inquiry and spiritual belief.
            </p>
            <Link
              href="https://www.youtube.com/watch?v=xtl2YLpJqjE"
              target="_blank"
              rel="noopener noreferrer"
              className="book-section__cta"
            >
              View Now
            </Link>
          </div>
        </div>
      </section>
      <section className="article-download-section">
        <div className="article-download-section__container">
          <div className="article-download-section__header">
            <h2>Download Articles</h2>
          </div>
          <div className="article-download-section__search">
            <MagnifyingGlass size={20} color="#555" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search article or author"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              aria-label="Search articles by title or author"
            />
          </div>
          <div className="article-download-section__cards">
            {visibleArticles.length > 0 ? (
              visibleArticles.map((article) => (
                <div key={article.id} className="article-download-card">
                  <div className="article-download-card__content">
                    <h3 className="article-download-card__title">{article.title}</h3>
                    <p className="article-download-card__author">By {article.author}</p>
                  </div>
                  <Link
                    href={article.fileUrl}
                    download
                    className="article-download-card__btn"
                    aria-label={`Download ${article.title}`}
                  >
                    Download <DownloadSimple size={18} weight="bold" aria-hidden="true" />
                  </Link>
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
              <button
                onClick={handleLoadMore}
                className="loadmore-btn"
                aria-label="Load more articles"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}