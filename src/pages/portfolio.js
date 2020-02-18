import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Projects from "../components/projects"

export default ({ data }) => {
  const { totalCount, nodes: projects } = data.projects

  return (
    <Layout>
      <SEO title="projects" description="List of projects" />
      <h1>Projects</h1>
      <p>Number of projects: {totalCount}</p>

      <Projects projects={projects} />
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
