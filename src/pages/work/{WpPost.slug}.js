import * as React from 'react'
import { graphql } from 'gatsby'

import PageHero from '../../components/PageHero'
import Layout from '../../components/Layout'

import GutenbergContent from '/src/components/GutenbergContent'

const WorkPost = ({ data }) => {
<<<<<<< HEAD
    const { title, content, featuredImage, excerpt } = data.wpPost
    return (
      <Layout pageTitle={title}>
        <PageHero
          title={title}
          subTitle={excerpt.replace(/<[^><]+>/g, '')}
          image={featuredImage?.node?.sourceUrl}
        />
        <GutenbergContent content={content} />
      </Layout>
    )
=======
  const {
    title,
    content,
    description,
    featuredImage,
    excerpt,
    seo,
  } = data.wpPost
  return (
    <Layout seo={seo}>
      <PageHero
        title={title}
        subTitle={excerpt.replace(/<[^><]+>/g, '')}
        image={featuredImage?.node?.sourceUrl}
      />
      <GutenbergContent content={content} />
    </Layout>
  )
>>>>>>> 5b1e5ccc89ee548e4a431507f8fe061a04c7e528
}

export const query = graphql `
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      id
      title
      excerpt
      content
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
          uri
          slug
          sizes
          srcSet
          title
          caption
          sourceUrl
        }
      }
    }
  }
`

export default WorkPost