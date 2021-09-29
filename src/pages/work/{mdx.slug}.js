import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PageHero from '../../components/PageHero'
import WorkIntro from '../../components/WorkIntro'
import Layout from '../../components/Layout'

const WorkPost = ({ data }) => {

  const { title, subtitle, paragraph, lists, hero_image } = data.mdx.frontmatter

    return (
        <Layout pageTitle={title}>
        <PageHero
          title={title}
          subTitle={subtitle}
          image={hero_image.publicURL}
        />
        <WorkIntro
          title={subtitle}
          paragraph={paragraph}
          taxonomies={lists}
        />
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </Layout>
    )
}

export const query = graphql `
  query($slug: String) {
    mdx(slug: {eq: $slug}, fileAbsolutePath: {regex: "/work/"}) {
      body
      frontmatter {
        title
        subtitle
        subtitle
        paragraph
        lists {
          items
          title
        }
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          publicURL
        }
      }
    }
  }
`

export default WorkPost