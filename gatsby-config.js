module.exports = {
  siteMetadata: {
    title: `thecallum.com`,
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
  ],
}
