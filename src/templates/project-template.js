import React from "react"
import Layout from "../components/layout"

import { Link, graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    project: contentfulProjects(id: { eq: $id }) {
      title
    }
  }
`

export default ({ data }) => {
  const { title } = data.project

  return (
    <Layout>
      <h1>{title}</h1>

      <br></br>
      <Link to="/projects/">Back to projects</Link>
    </Layout>
  )
}
