import React from "react"
import Layout from "../../components/layout"

import ContactForm from "../../components/contactForm"

export default () => {
  return (
    <Layout>
      <div className="container">
        <h1>Contact Me</h1>

        <ContactForm />
      </div>
    </Layout>
  )
}
