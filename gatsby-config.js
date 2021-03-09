require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `CYBERGEEK - приставки, кпк, электроника, аксессуары`,
    description: `Магазин портативной цифровой электроники.`,
    author: `admin@cybergeek.shop`,
    siteUrl: `https://cybergeek.shop`,
  },
  proxy: [
    {
      prefix: "/api",
      url: "https://cybergeek.shop",
    },
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
        plugins: [
          `gatsby-transformer-json`
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `cybergeek`, 
        server: {
          address: process.env.DB_ADDRESS,
        },
        auth: {
          user: process.env.DB_USER,
          password: process.env.DB_PASS
        },
        collection: [`items`, 'delivery'] 
      },
      query: { documents: { as_of: { $gte: 1604397088013 } } },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
