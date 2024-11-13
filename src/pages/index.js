import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FixedSlides from '../components/FixedSlides'
import TypingSlide from '../components/TypingSlide'
import BlockMarquee from '../components/BlockMarquee'

const IndexPage = ({data}) => {

  const slides = (data?.wpPage?.homepagePosts.posts || []).map(({post}) => {
    return {
      title: post.workSubtitle ? post.workSubtitle.subTitle : 'Default Value',
      link: post.uri,
      gatsbyImageData: post && post.featuredImage && post.featuredImage.node && post.featuredImage.node.localFile && post.featuredImage.node.localFile.childImageSharp ? post.featuredImage.node.localFile.childImageSharp : null,
      image: {
        src: post && post.featuredImage && post.featuredImage.node ? post.featuredImage.node.sourceUrl : null,
        alt: post && post.featuredImage && post.featuredImage.node ? post.featuredImage.node.altText : null,
      }
    }
  })

  const seo = data?.wpPage?.seo || {}

  const titleSlideText = [
    'You have this long to make an impression. ',
    'Stand out, ',
    'or sit on the bench.',
  ]

  return (
    <Layout themeColor="dark" seo={seo}>
      <TypingSlide
        height="150"
        text={titleSlideText}
        nextSlide={slides[0]}
      />
      <FixedSlides slides={slides} />
      <BlockMarquee
        text="Have a specific need? Ask us if we're a good fit."
        link="/contact"
        linkText="Reach_Out"
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
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 2000, quality: 80) {
                        ...GatsbyImageSharpFluid
                        srcSetWebp
                        srcWebp
                      }
                    }
                  }
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
        opengraphImage {
          sourceUrl
        }
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

export default IndexPage
