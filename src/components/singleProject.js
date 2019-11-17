import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Technologies from "../components/projectTechnologies"

const Project = styled.li`
  padding: 15px;
  cursor: pointer;
  display: block;

  * {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

export default ({ title, slug, image, technologies }) => {
  return (
    <Project>
      <Link to={`/projects/${slug}`}>
        <h4>{title}</h4>

        <Image
          fluid={image.fluid}
          alt={title}
          style={{ width: "50px", height: "50px" }}
        />

        <Technologies technologies={technologies} />
      </Link>
    </Project>
  )
}
