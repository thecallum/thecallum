import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { totalCount, nodes: projects } = data.allContentfulProjects

  return (
    <Layout>
      <h1>Projects</h1>
      <p>Number of projects: {totalCount}</p>

      <ul>
        {projects.map(({ title, slug }) => (
          <li>
            <Link to={`/projects/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const projects = graphql`
  {
    allContentfulProjects(filter: { visible: { eq: true } }) {
      nodes {
        slug
        title
        summary
        published(formatString: "Do MMMM YYYY")
        thumbnail {
          fluid {
            src
          }
        }
      }
      totalCount
    }
  }
`
