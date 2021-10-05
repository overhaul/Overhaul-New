import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PageHero from '../../components/PageHero'
import WorkIntro from '../../components/WorkIntro'
import Layout from '../../components/Layout'

import Sections from '/src/components/Sections'

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
        <WorkIntro
          title={subtitle}
          paragraph={paragraph}
          taxonomies={lists}
        />

        <Sections sections={description.sections} />

        <div style={{zIndex: 100, backgroundColor: 'white', position: 'relative'}}>
          <div
            className="container"
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>
      </Layout>
    )
}

export const query = graphql `
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      id
      title
      description {
        description
        sections {
          ... on WpPost_Description_Sections_Images {
            fieldGroupName
            images {
              image {
                altText
                title
                srcSet
                sourceUrl
              }
            }
          }
        }
        fieldGroupName
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
      content
    }
  }
`

export default WorkPost