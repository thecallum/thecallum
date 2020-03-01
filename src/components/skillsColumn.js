import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ skills, title, icon }) => (
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
