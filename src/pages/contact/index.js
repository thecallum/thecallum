import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../../components/layout"

import ContactForm from "../../components/contactForm"

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Contact</h1>
        </div>

        <ContactForm />

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/callum-macpherson-aa0209159/"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-link-icon" />
            <div className="contact-link-label">Linkedin</div>
          </a>

          <a href="https://github.com/thecallum" className="contact-link">
            <FontAwesomeIcon icon={faGithub} className="contact-link-icon" />
            <div className="contact-link-label">Github</div>
          </a>
        </div>
      </div>
    </Layout>
  )
}
