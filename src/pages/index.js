import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Hero from "../components/hero"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          fullTitle
          description
        }
      }
    }
  `)

  const { fullTitle, description } = data.site.siteMetadata

  return (
    <div>
      <Layout data={data.site.siteMetadata}>
        <Hero title={fullTitle} description={description} />
      </Layout>
    </div>
  )
}

export default IndexPage
