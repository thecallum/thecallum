import React from "react"
import { Link } from "gatsby"
import Links from "../constants/links"
import styled from "styled-components"

const Nav = styled.nav`
  padding: 30px;
  background-color: hsl(260, 50%, 50%);
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    margin: 0 0 -10px -15px;
  }

  li {
    display: block;
    margin: 0 0 10px 15px;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default () => {
  return (
    <Nav>
      <ul>
        {Links.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}
