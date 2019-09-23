const path = require(`path`)
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPageTemplate = path.resolve("./src/templates/singleProject.js")
  const res = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      component: projectPageTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
