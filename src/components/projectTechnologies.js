import React from "react"
import styled from "styled-components"

const Technologies = styled.ul`
  /* background-color: red; */

  display: flex;

  padding: 20px 0;
  margin: 0 0 -10px -15px;

  li {
    display: block;
    padding: 5px;
    border-radius: 3px;
    background-color: #222;
    color: #fff;
    margin: 0 0 10px 15px;

    &:hover {
      background-color: #444;
    }
  }
`
export default ({ technologies }) => {
  return (
    <Technologies>
      {technologies.map(({ name }, index) => (
        <li key={index}>{name}</li>
      ))}
    </Technologies>
  )
}
