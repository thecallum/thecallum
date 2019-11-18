module.exports = {
  siteMetadata: {
    title: `Callum Macpherson`,
    siteUrl: `https://thecallum.com`,
    description: `Portfolio site build on Gatsby`,
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j6go2m3dzf1w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `w2iwh3PA0Qv1SFm8ogT_BK27mznLynx9rHMzTQg-zvc`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://thecallum.us5.list-manage.com/subscribe/post?u=deb35ddce109e8bb57eeb0913&amp;id=a9172d46ae",
      },
    },

    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
