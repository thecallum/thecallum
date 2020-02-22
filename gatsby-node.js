const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allContentfulProjects(filter: { visible: { eq: true } }) {
        nodes {
          slug
          id
        }
      }
      posts: allContentfulPosts {
        nodes {
          slug
          id
        }
      }
    }
  `)

  const { projects, posts } = result.data

  projects.nodes.forEach(({ slug, id }) => {
    createPage({
      path: `/portfolio/${slug}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        id,
      },
    })
  })

  // // blog posts
  // posts.nodes.forEach(({ slug, id }) => {
  //   createPage({
  //     path: `/blog/${slug}`,
  //     component: path.resolve(`./src/templates/blog-template.js`),
  //     context: {
  //       id,
  //     },
  //   })
  // })
}
