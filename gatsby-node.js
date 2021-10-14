const path = require('path')
const fs = require('fs');

const staticPages = fs.readdirSync('./src/pages').map((file) => {
  return file.replace(/^(.+?)(?:\.js)?$/, '/$1/')
})

exports.createPages = async function ({graphql, actions}) {
  const { data } = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            id
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

        return !isAStaticPage && !isACareerPage
      })
      .map(({ node }) => node)

  for (let i = 0; i < pages.length; i++) {
    actions.createPage({
      path: pages[i].uri,
      component: require.resolve(`./src/templates/DefaultPage.js`),
      context: { slug: pages[i].slug },
    })
  }
}