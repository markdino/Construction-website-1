import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// ---------- Themes colors ----------
import "../themes/green.scss"
import "../themes/orange.scss"

import Hero from "../components/hero"
import Layout from "../components/layout"
import Services from "../components/services"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          fullTitle
          description
        }
      }
    }
  `)

  const { fullTitle, description } = data.site.siteMetadata

  return (
    <div>
      <Layout>
        <Hero title={fullTitle} description={description} />
        <Services />
      </Layout>
    </div>
  )
}

export default IndexPage
