import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

const CareerPost = ({ data }) => {

  return (
    <Layout>
      <div className="career">
        <PageTitle
          title={data.mdx.frontmatter.title}
        />
        <div className="container row">
          <div className="col-xs-12 col-md-9 col-md-offset-3 row">
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String) {
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