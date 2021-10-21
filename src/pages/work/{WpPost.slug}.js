import * as React from 'react'
import { graphql } from 'gatsby'

import PageHero from '../../components/PageHero'
import Layout from '../../components/Layout'

import GutenbergContent from '/src/components/GutenbergContent'
import BlockRelatedWork from '/src/components/BlockRelatedWork'

const WorkPost = ({ data }) => {
  const {
    title,
    content,
    featuredImage,
    seo,
    excerpt,
    workSubtitle,
  } = data.wpPost

  // const maxRelated = 2

  const relatedPosts = workSubtitle?.relatedWork || []

  if (!seo.metaDesc) seo.metaDesc = excerpt
  if (!seo.opengraphDescription) seo.opengraphDescription = excerpt
  if (!seo.twitterDescription) seo.twitterDescription = excerpt

  return (
    <Layout seo={seo} startNavWhite={true}>
      <PageHero
        subTitle={title}
        image={featuredImage?.node?.sourceUrl}
        gatsbyImageData={{
          ...(featuredImage?.node.localFile.childImageSharp || {}),
          alt: featuredImage?.node?.altText
        }}
      />
      <div className="work_content">
        <GutenbergContent content={content} />
      </div>
      {relatedPosts.length ? <BlockRelatedWork cards={relatedPosts} /> : ''}
    </Layout>
  )
}

export const query = graphql `
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      id
      title
      content
      excerpt
      seo {
        canonical
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
        title
        twitterDescription
        twitterTitle
        schema {
          raw
        }
        opengraphImage {
          sourceUrl
        }
        twitterImage {
          sourceUrl
        }
      }
      featuredImage {
        node {
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
      workSubtitle {
        relatedWork {
          ... on WpPost {
            id
            title
            slug
            workSubtitle {
              subTitle
            }
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 80) {
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
        subTitle
      }
    }
  }
`

export default WorkPost