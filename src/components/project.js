import React from "react"
import { Link } from "gatsby"

export default ({ project }) => (
  <div className="project">
    <div>
      <h4 className="project-title">{project.title}</h4>
      <p className="project-description">{project.summary} </p>
    </div>

    <Link to={`/portfolio/${project.slug}/`} className="button">
      View Project
    </Link>
  </div>
)
