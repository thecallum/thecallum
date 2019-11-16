import React from "react"
import Layout from "../components/layout"

import { Link, useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      title
    }
  }
`

export default ({ data }) => {
  const project = data.contentfulProjects
  const { title } = project

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}
