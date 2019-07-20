import React from "react"
import "./service.scss"

const Service = ({ services }) => {
  const { title, icon, description } = services
  return (
    <div className="service-card">
      <section className="service-icon">
        <img src={icon} alt={title} />
      </section>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Service
