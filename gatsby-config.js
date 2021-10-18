module.exports = {
  siteMetadata: {
    siteUrl: "https://www.overhaulmedia.com",
    title: "The New Overhaul New",
  },
  plugins: [
    // "gatsby-plugin-image",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || 'http://overhaul20.wpengine.com/graphql',    
        html: {
          useGatsbyImage: true,
        },
        useACF: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://overhaulnewmain.gatsbyjs.io/',
        sitemap: 'https://overhaulnewmain.gatsbyjs.io/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          }
        }
      }
    }
  ],
};
