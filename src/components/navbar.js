import React from "react"
import { Link } from "gatsby"
import Links from "../constants/links"

export default () => {
  return (
    <nav>
      <ul>
        {Links.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
