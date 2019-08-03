import React from "react"

const ProjCard = ({ proj }) => {
  const { img, title, description } = proj
  return (
    <div className="proj-card">
      <img src={img.src} alt={img.orig} title={img.author} />
      <section className="wrap-dark">
        <main className="proj-content center">
          <h4>{title}</h4>
          <p>{description}</p>
        </main>
      </section>
    </div>
  )
}

export default ProjCard
