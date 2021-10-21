import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import BlockList from '../components/BlockList'

const SitemapPage = ({data}) => {
    const seo = data?.wpPage?.seo || {}
    const pages = data?.allWpPage?.nodes || []
    const posts = data?.allWpPost?.nodes || []
    const pageLinks = []
    const postLinks = []

    for (let i = 0; i < pages.length; i++) {
      pageLinks.push({
        title: (
          <a href={pages[i].uri}>
            {pages[i].title}
          </a>
        )
      })
    }

    for (let i = 0; i < posts.length; i++) {
      postLinks.push({
        title: (
          <a href={posts[i].uri}>
            {posts[i].title}
          </a>
        )
      })
    }
    
    return (
        <Layout themeColor="dark" seo={seo}>
            <PageTitle
                title='Sitemap.'
                subTitle="If you're looking for a links on links on links, you've come to the right place."
            />

            <BlockList
              title="Pages"
              icon="star"
              listItems={pageLinks}
            />

            <BlockList
              title="Work"
              icon="fire"
              listItems={postLinks}
            />

        </Layout>
    )
}

export const query = graphql `
  query {
    allWpPage {
      nodes {
        uri
        title
      }
    }
    allWpPost {
      nodes {
        uri
        title
      }
    }
    wpPage(slug: {eq: "sitemap"}) {
      title
      seo {
        canonical
        cornerstone
        focuskw
        fullHead
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
        title
        twitterDescription
        twitterTitle
        schema {
          raw
        }
      }
    }
  }
`

export default SitemapPage