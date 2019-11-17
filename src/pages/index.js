import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const { title } = data.site.siteMetadata

  const skills = [
    "HTML5",
    "CSS 3",
    "SCSS",
    "JavaScript/ES6",
    "React",
    "Gatsby",
    "Vue",
    "PHP",
    "NodeJS",
    "Express",
    "Mysql",
    "docker",
    "git",
  ]

  return (
    <Layout>
      <h1>{title}</h1>

      <p>Short paragraph about me. Maybe mention where I live??..</p>
      <Link to="/about/">Find out more about me</Link>

      <h2>Skills</h2>
      <p>// skills relate to projects using the skill??</p>
      <ul>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>

      <h2>Latest Projects</h2>
      <p>Last three projects</p>

      <Link to="/projects/">View All Projects</Link>

      <h3>Why not check out my blog?</h3>

      <Link to="/blog/">View Blog</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
