import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import ButtonLink from "../components/buttonLink"

const description = "Short paragraph about me. Maybe mention where I live??.."

export default ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <div className="index-full-height">
        <div className="index-vertical-space">
          <div className="container">
            <h1 className="index-title">
              <strong>Hello, I'm Callum.</strong>
              &nbsp;
              <span style={{ display: "inline-block" }}>
                I'm a full stack developer based in Colchester, UK
              </span>
            </h1>

            <h2 className="index-subtitle">
              Mastering the web, one project at a time.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "30px",
                width: "600px",
                margin: "0 auto",
              }}
            >
              <Link className="button" to="/portfolio">
                <span>View Portfolio</span>
              </Link>
              <Link className="button" to="/portfolio">
                <span>Skills</span>
              </Link>
              <Link className="button" to="/contact">
                <span>Contact</span>
              </Link>
            </div>
          </div>
          {/* <div className="down-arrow"></div> */}
        </div>
      </div>

      {/* <div className="index-full-height">
        <div className="index-featured-projects">
          <div className="container">
            <h2>Featured projects</h2>
            <Link class="button-white" to="portfolio">
              View all Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="index-full-height">
        <div className="container">
          <h2>Let's work together</h2>
          <Link to="/contact/">Get in touch</Link>
          <ul>
            <li>hello@thecallum.com</li>
            <li>On LinkedIn</li>
          </ul>
        </div>
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allContentfulProjects(
      filter: { visible: { eq: true } }
      sort: { fields: published, order: DESC }
      limit: 3
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
