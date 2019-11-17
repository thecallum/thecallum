import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = styled.li`
  padding: 15px;
  cursor: pointer;
  display: block;

  * {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

export default ({ slug, title, published }) => (
  <Post>
    <Link to={`/blog/${slug}`}>
      <h4>{title}</h4>
      <p>{published}</p>
    </Link>
  </Post>
)
