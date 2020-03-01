require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Callum Macpherson`,
    siteUrl: `https://thecallum.com`,
    description: `Portfolio site build on Gatsby`,
    author: "Callum Macpherson",
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/404/`, `/contact/success/`],
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: [`https://images.ctfassets.net/`],
      },
    },

    `gatsby-plugin-netlify-cache`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159419908-1",
        head: true,
      },
    },
  ],
}
