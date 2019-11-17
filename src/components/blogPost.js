import React from "react"
import { Link } from "gatsby"

export default ({ slug, title }) => (
  <li>
    <Link to={`/blog/${slug}`}>{title}</Link>
  </li>
)
