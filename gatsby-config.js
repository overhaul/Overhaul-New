module.exports = {
  siteMetadata: {
    siteUrl: "https://www.overhaulmedia.com",
    title: "Overhaul Media Edmonton Digital Design Agency",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL || 'https://overhaul20.wpengine.com/graphql',
        html: {
          useGatsbyImage: true,
          // generateWebpImages: false,
        },
        schema: {
          circularQueryLimit: 2,
          // previewRequestConcurrency: 50,
        },
        debug: {
          preview: true,
        },
        develop: {
          hardCacheMediaFiles: true,
          // nodeUpdateInterval: 300,
        },
        production: {
          hardCacheMediaFiles: true,
          allow404Images : true,
        },
        // useACF: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/',
        resolveSiteUrl: () => process.env.URL || `https://overhaulmedia.com`,
      },
    },
    {
      resolve : "gatsby-plugin-gatsby-cloud",
      options: {
        allPageHeaders: [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://overhaulmedia.com/',
        sitemap: 'https://overhaulmedia.com/sitemap-index.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', allow: ['/'] }]
          },
          production: { 
            policy: [{ userAgent: '*', allow: ['/'] }]
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PDCQ6C",
        includeInDevelopment: false,
      },
    },
  ],
};
