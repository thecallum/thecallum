import React, { useState } from "react"
import links from "../constants/links"
import { Link } from "gatsby"

const Menu = () => (
  <div className="menu">
    <ul className="menu-links">
      {links.map((link, index) => (
        <li key={index} className={`menu-link `}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default () => {
  const isCurrentPage = link => {
    if (typeof window === "undefined") return false
    return window.location.pathname === link.path
  }

  const [menuActive, toggleMenu] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-main">
          <Link to="/">
            <img className="header-icon" src="/logo.svg" alt="" />
          </Link>
          <span className="header-logo">thecallum.com</span>
        </div>

        <div
          className={`header-menu ${menuActive ? "active" : ""}`}
          onClick={() => toggleMenu(!menuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {menuActive && <Menu />}

        <ul className="header-links">
          {links.map((link, index) => (
            <li
              key={index}
              className={`header-link ${isCurrentPage(link) ? "active" : ""}`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
