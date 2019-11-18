import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"

export default ({ data }) => {
  const { title } = data.site.siteMetadata
  const projects = data.projects.nodes

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
      <Projects projects={projects} />

      <Link to="/projects/">View All Projects</Link>

      <h3>Why not check out my blog?</h3>

      <Link to="/blog/">View Blog</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allContentfulProjects(
      filter: { visible: { eq: true } }
      sort: { fields: published, order: DESC }
      limit: 3
    ) {
      nodes {
        slug
        title
        summary
        technologies {
          name
        }
        published(formatString: "Do MMMM YYYY")
        image: thumbnail {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
