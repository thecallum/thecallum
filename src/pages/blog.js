import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/blogPost"

export default ({ data }) => {
  const { totalCount, nodes: posts } = data.posts
  const [index, updateIndex] = useState(1)

  // number of posts between pages
  const iteration = 5
  const showMorePosts = () => updateIndex(index => index + 1)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Blog Posts: {totalCount}</p>

      <ul>
        {posts.slice(0, index * iteration).map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </ul>

      {totalCount > index * iteration && (
        <button onClick={showMorePosts}>Show More</button>
      )}
    </Layout>
  )
}

export const projects = graphql`
  {
    posts: allContentfulPosts(sort: { fields: published, order: DESC }) {
      nodes {
        slug
        title
        published(formatString: "Do MMMM YYYY")
      }
      totalCount
    }
  }
`
