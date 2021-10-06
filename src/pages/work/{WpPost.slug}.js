import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PageHero from '../../components/PageHero'
import Layout from '../../components/Layout'

import GutenbergContent from '/src/components/GutenbergContent'

const WorkPost = ({ data }) => {
    const { title, content, description, featuredImage } = data.wpPost
    const subtitle = 'Subtitle'
    const hero_image = {}
    const paragraph = ''
    const lists = []
    return (
      <Layout pageTitle={title}>
        <PageHero
          title={title}
          subTitle={subtitle}
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