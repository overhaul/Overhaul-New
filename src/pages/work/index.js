import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const WorkPage = ({ data }) => {
    return (
        <Layout pageTitle="Our Work">
       {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
             <h2 className="newclass">
              <Link to={`/work/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
    )
}

export const query = graphql `
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`
export default WorkPage