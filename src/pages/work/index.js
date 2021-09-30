import * as React from 'react'
import { Component } from "react";
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import BlockCallToAction from '../../components/BlockCallToAction'
import {categories} from '/work-data/work-categories'

class WorkPage extends Component {

  constructor() {
    super()
    this.state = {
      listIsOpen: true
    }
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView() {
    this.setState( 
      function(prevState){
        return{
          listIsOpen: !prevState.listIsOpen
        }
      }
    )
  }

  render() {
    var { data } = this.props;
    return (
        <Layout>
          <PageTitle
            title='Building brands that matter.'
          />
          <div className="container row">
            <div className="col-xs-12 work-filters">
              <div className="work-filter">
                <ul className="work-filter_items">
                  <li className="work-filter_item first">All</li>
                  {categories.map((category, index) => (
                    <li className="work-filter_item" key={index}>{category.title}</li>
                  ))}
                </ul>
              </div>
              <div className="work-toggle">
                <p className="work-toggle_trigger">{this.state.listIsOpen ? 'Grid' : 'List'}</p>
                <div className="work-toggle_buttons">
                  {this.state.listIsOpen ? 
                    <button className="work-toggle_button list"
                        onClick={this.toggleView}
                        onKeyDown={this.toggleView}
                        >
                        <p>List</p>
                    </button> : 
                    ''
                  }
                  {this.state.listIsOpen ? 
                    '' : 
                    <button className="work-toggle_button grid"
                        onClick={this.toggleView}
                        onKeyDown={this.toggleView}
                        > 
                        <p>Grid</p>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className={`work container row grid ${this.state.listIsOpen ? 'grid-view' : 'list-view'}`}>
           {
            data.allMdx.nodes.map((node, index) => (
              <div className="col-xs-12 col-md-6 grid_card" key={index}>
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
          <div className={`work container row list ${this.state.listIsOpen ? 'grid-view' : 'list-view'}`}>
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
          <BlockCallToAction
            title='Look like something you need?'
            cta='Start the conversation.'
            link='/contact'
          />
        </Layout>
    )
  }
}

export const query = graphql `
  query WorkPage{
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