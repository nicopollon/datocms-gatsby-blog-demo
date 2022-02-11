require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Travel Agency",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "YThhODczYjYtYWMzZi00MzExLWFkMDMtNTgxZmMxNjM2YzYxNjM3Nzg2MzE4MTkwNjQxOTUx",
        autopop: true,
        js: "https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js",
        styles: "https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css",
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
