const path = require('path')
const fs = require('fs')
const redirects = require("./redirects.json")

const staticPages = fs.readdirSync('./src/pages').map((file) => {
  return file.replace(/^(.+?)(?:\.js)?$/, '/$1/')
})

exports.createPages = async function ({graphql, actions}) {
  const { createRedirect } = actions
  const { data } = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            uri
            slug
          }
        }
      }
    }
  `)

  const pages = (data.allWpPage.edges || [])
      .filter(({ node }) => {
        const isAStaticPage = staticPages.includes(node.uri)
        const isACareerPage = node.uri.match(/^\/careers\//)
        const isHomepage = node.uri.match(/^\/$/)
        // Add other exclusion conditions here for pages
        // That have been created on WP

        return !isAStaticPage && !isACareerPage && !isHomepage 
      })
      .map(({ node }) => node)

  for (let i = 0; i < pages.length; i++) {
    actions.createPage({
      path: pages[i].uri,
      component: require.resolve(`./src/templates/DefaultPage.js`),
      context: { slug: pages[i].slug },
    })
  }
  console.log(redirects)
  redirects.forEach(redirect => 
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
    })
  )
}
