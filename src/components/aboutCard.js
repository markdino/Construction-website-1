import React from "react"
import "./aboutCard.scss"

const AboutCard = ({ title, children }) => {
  return (
    <article className="about-card">
      <header className="about-card-header">
        <h4 className="about-card-title text-center text-uppercase font-weight-bold">
          {title}
        </h4>
      </header>
      <section className="about-card-content">
        <p>{children}</p>
      </section>
    </article>
  )
}

export default AboutCard
