import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PageHero from '../../components/PageHero'
import Layout from '../../components/Layout'

import GutenbergContent from '/src/components/GutenbergContent'

const WorkPost = ({ data }) => {
    const { title, content, description, featuredImage, excerpt } = data.wpPost
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
}

export const query = graphql `
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      id
      title
      excerpt
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
      content
    }
  }
`

export default WorkPost