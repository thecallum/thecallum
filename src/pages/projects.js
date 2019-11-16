import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export default ({ data }) => {
  const { totalCount, nodes: projects } = data.projects

  return (
    <Layout>
      <h1>Projects</h1>
      <p>Number of projects: {totalCount}</p>

      <ul>
        {projects.map(({ title, slug, image }, index) => (
          <li key={index}>
            <Link to={`/projects/${slug}`}>{title}</Link>
            <Image
              fluid={image.fluid}
              alt={title}
              style={{ width: "50px", height: "50px" }}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const projects = graphql`
  {
    projects: allContentfulProjects(filter: { visible: { eq: true } }) {
      nodes {
        slug
        title
        summary
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
