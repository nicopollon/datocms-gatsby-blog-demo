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
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.GATSBY_SNIPCART_API_KEY,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.3.1",
        publicApiKey: process.env.GATSBY_SNIPCART_API_KEY, // use public api key here or in environment variable
        defaultLang: "en",
        currency: "eur",
        openCartOnAdd: true,
        useSideCart: true,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {},
        templatesUrl: null,
        innerHTML: "",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
