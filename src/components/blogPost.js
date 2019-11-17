import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = styled.div`
  padding: 15px;
  cursor: pointer;

  * {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

export default ({ slug, title, published }) => (
  <li>
    <Post>
      <Link to={`/blog/${slug}`}>
        <h4>{title}</h4>
        <p>{published}</p>
      </Link>
    </Post>
  </li>
)
