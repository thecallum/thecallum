const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulProjects(filter: { visible: { eq: true } }) {
        nodes {
          slug
          id
        }
      }
    }
  `)

  const projects = result.data.allContentfulProjects.nodes

  projects.forEach(({ slug, id }) => {
    createPage({
      path: `/projects/${slug}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        id,
      },
    })
  })
}
