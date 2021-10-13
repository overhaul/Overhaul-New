import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const ServicesPage = ({data}) => {
    const seo = data?.wpPage?.seo || {}
    return (
        <Layout themeColor="dark" seo={seo}>
            <PageTitle
                title='Services.'
                subTitle='Does this page even exist.'
            />
        </Layout>
    )
}

export const query = graphql `
  query {
    wpPage(slug: {eq: "services"}) {
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
      }
    }
  }
`

export default ServicesPage