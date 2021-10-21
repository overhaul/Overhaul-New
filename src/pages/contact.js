import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Contact from '../components/Contact'

const ContactPage = ({data}) => {
    const seo = data?.wpPage?.seo || {}
    return (
        <Layout themeColor="dark" seo={seo}>
            <PageTitle
                title='We do what you can’t.'
                subTitle='You’ve got a great business. We’re here to help make it better. If you’d like to talk about working with us then we’d love to hear your story.'
            />
            <Contact/>
        </Layout>
    )
}

export const query = graphql `
  query {
    wpPage(slug: {eq: "contact"}) {
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

export default ContactPage