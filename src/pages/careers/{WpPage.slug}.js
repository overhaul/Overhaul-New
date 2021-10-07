import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import GutenbergContent from '../../components/GutenbergContent'
import PageTitle from '../../components/PageTitle'

const CareerPost = ({ data }) => {
  return (
    <Layout themeColor="dark" seo={data.wpPage.seo}>
      <div className="career">
        <PageTitle
          title={data.wpPage.title}
        />
        <div className="container row">
          <div className="col-xs-12 col-md-9 col-md-offset-3 row">
            {
              data.wpPage.content
                ? <GutenbergContent content={data.wpPage.content} />
                : <div />
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String) {
    wpPage(slug: {eq: $slug}) {
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
    }
    mdx(slug: {eq: $slug}, fileAbsolutePath: {regex: "/careers/"}) {
      body
      frontmatter {
        title
        paragraph
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default CareerPost