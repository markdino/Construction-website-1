import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"
import Services from "../components/services"

const ProjectPage = ({ data }) => {
  return (
    <>
      <Project
        title="Completed Projects"
        projects={data.allProjectsJson.edges}
      />
      <Services />
    </>
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
  }
`
export default ProjectPage
