import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const query = graphql`
  query($id: String!) {
    project: contentfulProjects(id: { eq: $id }) {
      title
      body {
        body
        childMdx {
          body
        }
      }
      published(formatString: "Do MMMM YYYY")
      summary
      github
      website
      technologies {
        name
      }
      image: thumbnail {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => {
  const {
    title,
    body,
    published,
    summary,
    technologies,
    github,
    website,
  } = data.project

  const mdx = body.childMdx.body

  return (
    <Layout>
      <div className="container">
        <h1 className="project-summary-title">{title}</h1>

        <div className="project-summary-published">{published}</div>

        <div className="project-summary-links">
          <a href={github} className="project-summary-link">
            <FontAwesomeIcon
              className="project-summary-link-icon"
              icon={faGithub}
            />
            <div className="project-summary-link-label">Source</div>
          </a>

          {!!website && (
            <a href={website} className="project-summary-link">
              <FontAwesomeIcon
                className="project-summary-link-icon"
                icon={faExternalLinkAlt}
              />
              <div className="project-summary-link-label">View Project</div>
            </a>
          )}
        </div>

        <div className="project-summary">
          <div className="project-summary-description">{summary}</div>

          <ul className="project-summary-technologies">
            {technologies.map(technology => (
              <li className="project-summary-technology">{technology.name}</li>
            ))}
          </ul>
        </div>

        <div className="project-summary-body">
          <MDXRenderer>{mdx}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
