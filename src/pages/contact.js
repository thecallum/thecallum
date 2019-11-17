import React from "react"
import Layout from "../components/layout"
import Form from "../components/contactForm"

export default () => {
  return (
    <Layout>
      <h1>Contact Me</h1>

      <p>Have a question?</p>
      <p>Or send me an email at hello@thecallum.com</p>

      <Form />

      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
    </Layout>
  )
}
