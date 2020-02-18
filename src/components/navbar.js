import React from "react"
import { Link } from "gatsby"
import Links from "../constants/links"
import styled from "styled-components"

const Nav = styled.nav`
  padding: 60px 60px 60px;
  // background-color: hsl(260, 50%, 50%);

  font-family: sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 60px;
    margin-right: 30px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    margin: 0 0 -10px -15px;
  }

  li {
    display: block;
    margin: 0 0 10px 15px;
    color: #999;

    &:hover {
      color: #0a0a0a;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default () => {
  return (
    <Nav>
      <img className="logo" src="/logo.png" alt="" />
      <ul>
        {Links.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}
