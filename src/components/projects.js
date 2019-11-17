import React from "react"
import styled from "styled-components"
import Project from "./singleProject"

const List = styled.div`
  padding: 30px 0;

  > ul {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    margin: 0 0 -30px -30px;
    padding: 0;
  }
`

export default ({ projects }) => {
  return (
    <List>
      <ul>
        {projects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </ul>
    </List>
  )
}
