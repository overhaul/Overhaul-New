import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

const CareersPage = ({ data }) => {
    return (
        <Layout themeColor="dark" seo={data.wpPage.seo}>
        <PageTitle
          title='We’re on the lookout for talented individuals with a passion for creativity and technology to join our team.'
          />
          <div className="careers container row">
            <h2 className="col-md-6 col-xs-12 careers-title">Open Positions</h2>
            <div className="col-xs-12 col-md-6 career-items">
              {
                data.wpPage.wpChildren.nodes.map((node) => (
                  <Link to={`/careers/${node.slug}`} className="careers_card" key={node.id}>
                    <h2>{node.title}</h2>
                    <div className="careers_card-link" />
                  </Link>
                ))
              }
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql `
  query {
    wpPage(slug: {eq: "careers"}) {
      title
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
      wpChildren {
        nodes {
          ... on WpPage {
            id
            title
            slug
            uri
          }
        }
      }
    }
  }
`
export default CareersPage