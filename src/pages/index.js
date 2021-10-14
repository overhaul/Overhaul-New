import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'
import BlockCallToAction from '../components/BlockCallToAction'

const IndexPage = ({data}) => {

  const slides = (data?.wpPage?.homepagePosts.posts || []).map(({post}) => {
    return {
      title: post.workSubtitle.subTitle,
      link: post.uri,
      image: {
        src: post.featuredImage.node.sourceUrl,
        alt: post.featuredImage.node.altText,
      }
    }
  })

  const seo = data?.wpPage?.seo || {}

  const titleSlideText = [
    'You have this long to make an impression.',
    'Stand out,',
    'or sit on the bench.',
    // 'get', 'to', 'zeee', 'choppa',
  ]

  return (
    <Layout themeColor="dark" seo={seo}>
      <TypingSlide
        height="150"
        text={titleSlideText}
        nextSlide={slides[0]}
      />
      <FixedSlides slides={slides} />
      <BlockCallToAction
        title="Have a specific need? Don't see what you're after?"
        link="/contact"
        cta="Ask us if we're a good fit."
      />
    </Layout>
  )
}

export const query = graphql `
  query {
    wpPage(slug: {eq: "home"}) {
      title
      homepagePosts {
        posts {
          post {
            ... on WpPost {
              id
              workSubtitle {
                subTitle
              }
              uri
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
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

export default IndexPage
