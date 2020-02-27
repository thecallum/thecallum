import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

export default () => (
  <Layout>
    <div className="container">
      <div className="contact-success">
        <h3 className="contact-success-title">Message Sent</h3>

        <Link className="button contact-success-button" to="/">
          Return home
        </Link>
      </div>
    </div>
  </Layout>
)
