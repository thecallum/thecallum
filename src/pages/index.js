import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonLink from "../components/buttonLink"

const description = "Short paragraph about me. Maybe mention where I live??.."

export default ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title={title} description={description} />
      <h1 style={{ fontWeight: "normal", textAlign: "center" }}>
        <strong style={{ color: "var(--color-primary)" }}>
          Hello, I'm Callum.
        </strong>
        <span>I'm a full stack developer</span>
      </h1>

      <h3 style={{ textAlign: "center", fontWeight: "normal" }}>
        I’m passionate about side projects and helping creatives improve their
        craft and process. Check out my work and come chat to me on Twitter.
      </h3>

      <hr style={{ marginTop: 60, width: "calc(100% - 60px)" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: -30,
          marginTop: 30,
        }}
      >
        <ButtonLink to="/portfolio">
          <span>View Portfolio</span>
        </ButtonLink>
        <ButtonLink to="/contact">
          <span>Contact</span>
        </ButtonLink>
      </div>
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
