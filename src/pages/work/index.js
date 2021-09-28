import * as React from 'react'
import { Component } from "react";
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import WorkToggle from '../../components/WorkToggle'

const WorkPage = ({ data }) => {
  return (
      <Layout>
        <PageTitle
          title='Building brands that matter.'
        />
        <WorkToggle/>
        <div className="work container row grid">
         {
          data.allMdx.nodes.map((node, index) => (
            <div className="col-xs-12 col-md-6" key={index}>
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
      <div className="work container row list">
         {
          data.allMdx.nodes.map((node, index) => (
            <div className="work_card-list col-xs-12" key={index}>
              <article key={node.id}>
                <Link to={`/work/${node.slug}`}>
                  <p>{node.frontmatter.title}</p>
                  <p className="work_card-list-subtitle">{node.frontmatter.subtitle}</p>
                  <p className="work_card-list-date">{node.frontmatter.date}</p>
                </Link>
              </article>
              <div className="work_card-list-image">
                <img src={node.frontmatter.hero_image.publicURL} alt={node.frontmatter.hero_image_alt}/>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql `
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC},filter: {fileAbsolutePath: {regex: "/work/"}}) {
      nodes {
        frontmatter {
          title
          subtitle
          paragraph
          hero_image_alt
          hero_image {
            publicURL
          }
          date(formatString: "YYYY")
        }
        id
        slug
      }
    }
  }
`
export default WorkPage