import React from "react"
import { graphql } from "gatsby"
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
import Project from "../components/project"
import News from "../components/news"

const IndexPage = ({ data }) => {
  const { fullTitle, description, about } = data.site.siteMetadata

  return (
    <div>
      <Hero title={fullTitle} description={description} />
      <Services />
      <About about={about} />
      <Project
        title="Featured Projects"
        projects={data.allProjectsJson.edges}
      />
      <QuoteUs />
      <News />
    </div>
  )
}

export const projectsQuery = graphql`
  query AllProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          category
          description
          img {
            src
            orig
            author
          }
          engineer
          amount
          duration
          owner
          address
        }
      }
    }
    site {
      siteMetadata {
        fullTitle
        description
        about
      }
    }
  }
`

export default IndexPage
