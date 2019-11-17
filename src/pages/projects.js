import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/singleProject"

export default ({ data }) => {
  const { totalCount, nodes: projects } = data.projects

  return (
    <Layout>
      <h1>Projects</h1>
      <p>Number of projects: {totalCount}</p>

      <ul style={{ margin: 0, padding: 0 }}>
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </ul>
    </Layout>
  )
}

export const projects = graphql`
  {
    projects: allContentfulProjects(
      filter: { visible: { eq: true } }
      sort: { fields: published, order: DESC }
    ) {
      nodes {
        slug
        title
        summary
        technologies {
          name
        }
        published(formatString: "Do MMMM YYYY")
        image: thumbnail {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      totalCount
    }
  }
`
