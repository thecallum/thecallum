import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Project from "../components/project"
import SkillsColumn from "../components/skillsColumn"

import { faDesktop, faServer, faCode } from "@fortawesome/free-solid-svg-icons"

export default ({ data }) => {
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Portfolio</h1>
        </div>

        <div>
          <h2>Skills</h2>
        </div>

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

        <div>
          <h2>Projects</h2>
        </div>

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
