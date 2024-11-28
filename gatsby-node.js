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
            slug
            link
          }
        }
      }
    }
  `)

  const pages = (data.allWpPage.edges || [])
      .filter(({ node }) => {
        const isAStaticPage = staticPages.includes(node.link)
        const isACareerPage = node.link.match(/^\/careers\//)
        const isHomepage = node.link.match(/^\/$/)
        // Add other exclusion conditions here for pages
        // That have been created on WP

        return !isAStaticPage && !isACareerPage && !isHomepage 
      })
      .map(({ node }) => node)

  for (let i = 0; i < pages.length; i++) {
    actions.createPage({
      path: pages[i].link,
      component: require.resolve(`./src/templates/DefaultPage.js`),
      context: { slug: pages[i].slug },
    })
  }

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: false,
      statusCode: 200,
    })
  )
}

// Copy favicon files to public folder after build
exports.onPostBuild = () => {
  const filesToCopy = [
    { src: 'src/images/favicons/favicon.ico', dest: 'public/favicon.ico' },
    { src: 'src/images/favicons/favicon.png', dest: 'public/favicon.png' },
    { src: 'src/images/favicons/apple-touch-icon.png', dest: 'public/apple-touch-icon.png' },
    { src: 'src/images/favicons/favicon-32x32.png', dest: 'public/favicon-32x32.png' },
    { src: 'src/images/favicons/favicon-16x16.png', dest: 'public/favicon-16x16.png' },
    { src: 'src/images/favicons/safari-pinned-tab.svg', dest: 'public/safari-pinned-tab.svg' },
    { src: 'src/images/favicons/browserconfig.xml', dest: 'public/browserconfig.xml' },
    { src: 'src/images/favicons/site.webmanifest', dest: 'public/site.webmanifest' },
    { src: 'src/images/favicons/android-chrome-192x192.png', dest: 'public/android-chrome-192x192.png' },
    { src: 'src/images/favicons/android-chrome-512x512.png', dest: 'public/android-chrome-512x512.png' },
    { src: 'src/images/favicons/mstile-150x150.png', dest: 'public/mstile-150x150.png' },
  ];

  filesToCopy.forEach(file => {
    fs.copyFileSync(path.resolve(file.src), path.resolve(file.dest));
  });
};