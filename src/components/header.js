import React from "react"
import links from "../constants/links"
import { Link } from "gatsby"

export default () => {
  const isCurrentPage = link => {
    if (typeof window === "undefined") return false
    return window.location.pathname === link.path
  }

  return (
    <header className="header">
      <div className="header-main">
        <Link to="/">
          <img className="header-icon" src="/logo.svg" alt="" />
        </Link>
        <span className="header-logo">thecallum.com</span>
      </div>

      <ul class="header-links">
        {links.map(link => (
          <li className={`header-link ${isCurrentPage(link) ? "active" : ""}`}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
