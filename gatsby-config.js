module.exports = {
  siteMetadata: {
    siteUrl: "https://www.overhaulmedia.com",
    title: "The New Overhaul New",
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
        // query: `
        //   {
        //     allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
        //       nodes {
        //         ... on WpPost {
        //           uri
        //           modifiedGmt
        //         }
        //         ... on WpPage {
        //           uri
        //           modifiedGmt
        //         }
        //       }
        //     }
        //   }
        // `,
        resolveSiteUrl: () => process.env.URL || `https://overhaulmedia.com`,
        // resolvePages: ({
        //   allWpContentNode: { nodes: allWpNodes },
        // }) => {
        //   const wpNodeMap = allWpNodes.reduce((acc, node) => {
        //     const { uri } = node
        //     acc[uri] = node

        //     return acc
        //   }, {})

        //   return allPages.map(page => {
        //     return { ...page, ...wpNodeMap[page.path] }
        //   })
        // },
        // serialize: ({ path, modifiedGmt }) => {
        //   return {
        //     url: path,
        //     lastmod: modifiedGmt,
        //   }
        // },
      },
    },
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
