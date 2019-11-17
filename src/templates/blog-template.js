import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    post: contentfulPosts(id: { eq: $id }) {
      title
      body {
        body
      }
    }
  }
`

export default ({ data }) => {
  const {
    title,
    body: { body },
  } = data.post

  return (
    <Layout>
      <h1>{title}</h1>
      {body}
    </Layout>
  )
}
