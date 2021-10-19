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
    id,
    workSubtitle,
  } = data.wpPost

  // const maxRelated = 2

  const relatedPosts = workSubtitle?.relatedWork || []
  // (workSubtitle?.relatedWork || []).reduce((related, category) => {
  //   const posts = category.posts.nodes
  //   for (let i = 0; i < posts.length; i++) {
  //     if (related.used[posts[i].id]) continue
  //     related.used[posts[i].id] = true
  //     related.posts.push(posts[i])
  //   }
  //   return related
  // }, { used: { [id]: true }, posts: [] })

  console.log(relatedPosts)

  return (
    <Layout seo={seo}>
      <PageHero
        subTitle={title}
        image={featuredImage?.node?.sourceUrl}
        gatsbyImageData={featuredImage?.node.localFile.childImageSharp}
      />
      <div style={{zIndex: 100, backgroundColor: 'white', position: 'relative', willChange: 'transform'}}>
        <GutenbergContent content={content} />
      </div>
      <BlockRelatedWork cards={relatedPosts} />
    </Layout>
  )
}

export const query = graphql `
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      id
      title
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
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 80) {
                ...GatsbyImageSharpFluid
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
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 80) {
                      ...GatsbyImageSharpFluid
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