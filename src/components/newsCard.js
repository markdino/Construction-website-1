import React from "react"
import { Link } from "gatsby"
import ClockSVG from "../assets/svg/clock.svg"
import LinkSVG from "../assets/svg/link.svg"
import "./newsCard.scss"

import img1 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"

const NewsCard = () => {
  return (
    <article className="news-card">
      <section className="news-thumbnail">
        <Link to="/news">
          <section className="news-thumbnail-hover">
            <LinkSVG />
          </section>
        </Link>
        <img src={img1} alt="etienne-beauregard-riverin" />
      </section>
      <section className="news-content">
        <Link to="/news">
          <h4 className="news-title">title</h4>
        </Link>
        <section className="news-date">
          <ClockSVG /> <p>Feb. 04, 2019</p>
        </section>
        <p className="news-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dolores debitis consectetur inventore nisi voluptate accusantium fugit
          velit tempore nostrum.
        </p>
      </section>
    </article>
  )
}

export default NewsCard
