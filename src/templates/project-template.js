import React from "react"
import Layout from "../components/layout"
import Technologies from "../components/projectTechnologies"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

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
    body,
    published,
    summary,
    technologies,
    image,
    github,
    website,
  } = data.project

  const mdx = body.childMdx.body

  return (
    <Layout>
      <div
        style={{
          margin: "30px 0",
          backgroundColor: "#f9f9f9",
          padding: "30px",
        }}
      >
        <MDXRenderer>{mdx}</MDXRenderer>
      </div>

      <p>
        <a href={github}>Github</a>
      </p>
      <p>
        <a href={website}>Website</a>
      </p>
      <p>Published: {published}</p>
      <p>Sumary: {summary}</p>
      <p>Technologies</p>
      <Technologies technologies={technologies} />

      <Image fluid={image.fluid} style={{ height: "200px", width: "200px" }} />
      <br></br>
      <Link to="/projects/">Back to projects</Link>
    </Layout>
  )
}
