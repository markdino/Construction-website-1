import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// ---------- Themes colors ----------
import "../themes/green.scss"
import "../themes/orange.scss"

// ---------- Components ----------
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import QuoteUs from "../components/quote"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          fullTitle
          description
          about
        }
      }
    }
  `)

  const { fullTitle, description, about } = data.site.siteMetadata

  return (
    <div>
      <Hero title={fullTitle} description={description} />
      <Services />
      <About about={about} />
      <QuoteUs />
    </div>
  )
}

export default IndexPage
