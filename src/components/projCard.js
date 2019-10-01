import React from "react"
import { Link } from "gatsby"

import "./projCard.scss"

const ProjCard = ({ proj }) => {
  const { img, title, description, slug } = proj
  return (
    <div className="proj-card">
      <Link to={`projects/${slug}/#single-project`}>
        <img src={img.src[0]} alt={img.orig} title={img.author} />
        <section className="wrap-dark">
          <main className="proj-content text-center">
            <h4>{title}</h4>
            <p>{description}</p>
          </main>
        </section>
      </Link>
    </div>
  )
}

export default ProjCard
