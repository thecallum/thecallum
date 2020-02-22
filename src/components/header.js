import React from "react"
import links from "../constants/links"
import { Link } from "gatsby"

export default ({ children }) => (
  <header className="header">
    <Link to="/">
      <img className="header-logo" src="/logo.png" alt="" />
    </Link>

    <ul class="header-links">
      {links.map(link => (
        <li class="header-link">
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </header>
)
