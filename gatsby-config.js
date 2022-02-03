require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Travel Agency",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          YThhODczYjYtYWMzZi00MzExLWFkMDMtNTgxZmMxNjM2YzYxNjM3Nzg2MzE4MTkwNjQxOTUx,
        autopop: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
