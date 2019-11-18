import React from "react"
import Layout from "../../components/layout"
import Form from "../../components/contactForm"
import SEO from "../../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact page" />
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
