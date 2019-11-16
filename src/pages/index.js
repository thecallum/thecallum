import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
