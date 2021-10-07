import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GutenbergContent from '../components/GutenbergContent'

const DefaultPage = ({data}) => {
    const seo = data?.wpPage?.seo || {}
    console.log(data)
    return (
        <Layout themeColor="dark" seo={seo}>
          <GutenbergContent
            content={data.wpPage.content}
            />
        </Layout>
    )
}

export const query = graphql `
  query($slug: String) {
    wpPage(slug: {eq: $slug}) {
      title
      content
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
      }
    }
  }
`

export default DefaultPage