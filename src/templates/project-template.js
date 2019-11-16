import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"

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
      technologies {
        name
      }
    }
  }
`

export default ({ data }) => {
  const { title, body, published, summary, technologies } = data.project

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

      <p>Published: {published}</p>
      <p>Sumary: {summary}</p>
      <p>Technologies</p>
      <ul>
        {technologies.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <br></br>
      <Link to="/projects/">Back to projects</Link>
    </Layout>
  )
}
