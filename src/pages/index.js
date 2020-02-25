import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="index-centered">
        <div className="container">
          <h1 className="index-title">
            <strong>Hello, I'm Callum.</strong>
            &nbsp;
            <span>I'm a full stack developer based in Colchester, UK.</span>
          </h1>

          <h2 className="index-subtitle">
            Mastering the web, one project at a time.
          </h2>

          <div className="index-links">
            <Link className="button index-link" to="/about/">
              <span>About</span>
            </Link>
            <Link className="button index-link" to="/portfolio/">
              <span>View Portfolio</span>
            </Link>
            <Link className="button index-link" to="/contact/">
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
