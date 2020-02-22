import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Project from "../components/project"

// var FA = require("react-fontawesome")
// import FA from "react-fontawesome"

import { faDesktop, faServer, faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillsColumn = ({ skills, title, icon }) => (
  <div className="skills-column">
    <div className="skills-top">
      <FontAwesomeIcon className="skills-icon" icon={icon} />
      <h4 className="skills-title">{title}</h4>
    </div>

    <ul className="skills-list">
      {skills.map(skill => (
        <li className="skills-list-item">{skill}</li>
      ))}
    </ul>
  </div>
)

export default ({ data }) => {
  const { totalCount, nodes: projects } = data.projects

  console.log(projects)

  return (
    <Layout>
      <div className="container">
        <h1>Portfolio</h1>

        <h2>Skills</h2>

        <div className="skills">
          <SkillsColumn
            icon={faDesktop}
            title="Front End"
            skills={["HTML5", "CSS3", "SCSS", "Styled Components"]}
          />
          <SkillsColumn
            icon={faCode}
            title="JavaScript"
            skills={[
              "React",
              "Redux",
              "React Hooks",
              "Vue",
              "VueX",
              "Webpack",
              "GatsbyJS",
              "React Native",
            ]}
          />
          <SkillsColumn
            icon={faServer}
            title="Backend"
            skills={[
              "NodeJS",
              "PHP",
              "Laravel",
              "ASP.NET",
              "MySQL",
              "Entity Framework",
              "Docker",
            ]}
          />
        </div>

        <h2>Projects</h2>

        <div className="project-list">
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const projects = graphql`
  {
    projects: allContentfulProjects(
      filter: { visible: { eq: true } }
      sort: { fields: published, order: DESC }
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
  }
`
