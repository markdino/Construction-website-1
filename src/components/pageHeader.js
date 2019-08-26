import React from "react"
import "./pageHeader.scss"

const PageHeader = ({ title }) => {
  return (
    <header className="page-header">
      <section className="page-header-wrapper section-xl">
        <h2 className="header-title">{title}</h2>
      </section>
    </header>
  )
}

export default PageHeader
