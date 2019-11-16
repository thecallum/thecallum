import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { totalCount, nodes: posts } = data.posts

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Blog Posts: {totalCount}</p>

      <ul>
        {posts.map(({ title, slug }, index) => (
          <li key={index}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const projects = graphql`
  {
    posts: allContentfulBlogPost {
      nodes {
        slug
        title
      }
      totalCount
    }
  }
`
