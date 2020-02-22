import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql, Link } from "gatsby"

export const query = graphql`
  query($id: String!) {
    post: contentfulPosts(id: { eq: $id }) {
      title
      body {
        body
        childMdx {
          body
        }
      }
    }
  }
`

export default ({ data }) => {
  const { body, title } = data.post

  const mdx = body.childMdx.body

  return <div>blog template</div>

  //   return (
  //     <Layout>
  //       <SEO title={title} description={title} />
  //       <div
  //         style={{
  //           margin: "30px 0",
  //           backgroundColor: "#f9f9f9",
  //           padding: "30px",
  //         }}
  //       >
  //         <MDXRenderer>{mdx}</MDXRenderer>

  //         <Link to="/blog/">Back to Blog</Link>
  //       </div>
  //     </Layout>
  //   )
}
