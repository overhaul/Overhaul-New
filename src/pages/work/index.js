import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

const WorkPage = ({ data }) => {
    return (
        <Layout>
        <PageTitle
          title='Building brands that matter.'
        />
        <div className="work container row">
         {
          data.allMdx.nodes.map((node) => (
            <div className="col-xs-12 col-md-6">
              <article className="work_card" key={node.id}>
                <Link to={`/work/${node.slug}`}>
                  <div className="work_card-featured-image">
                    <img src={node.frontmatter.hero_image.publicURL} alt={node.frontmatter.hero_image_alt}/>
                  </div>
                  <p>{node.frontmatter.title}</p>
                  <p className="work_card-subtitle">{node.frontmatter.subtitle}</p>
                </Link>
              </article>
            </div>
          ))
        }
      </div>
    </Layout>
    )
}

export const query = graphql `
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          subtitle
          hero_image_alt
          hero_image {
            publicURL
          }
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`
export default WorkPage