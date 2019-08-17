import React from "react"
import { Link } from "gatsby"
import ClockSVG from "../assets/svg/clock.svg"
import LinkSVG from "../assets/svg/link.svg"
import "./newsCard.scss"

const NewsCard = ({ news }) => {
  const { title, date, about, img, slug } = news
  return (
    <article className="news-card">
      <section className="news-thumbnail">
        <Link to={`/news/${slug}`}>
          <section className="news-thumbnail-hover">
            <LinkSVG />
          </section>
        </Link>
        <img src={img} alt={title} />
      </section>
      <section className="news-content">
        <Link to={`/news/${slug}`}>
          <h4 className="news-title">{title}</h4>
        </Link>
        <section className="news-date">
          <ClockSVG /> <p>{date}</p>
        </section>
        <p className="news-text">{about}</p>
      </section>
    </article>
  )
}

export default NewsCard
