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
      listIsOpen: true,
      currentCategory: -1
    }
    this.toggleView = this.toggleView.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
    this.fitlerNode = this.fitlerNode.bind(this)
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

  updateCategory(index){
    this.setState({
      currentCategory: index
    })
  }

  fitlerNode(node) {
    if (this.state.currentCategory === -1) return true
    const currentCategoryObject = categories[this.state.currentCategory]
    const currentCategoryTitle = currentCategoryObject?.title
    return (node.cats || []).find((cat) => cat.title === currentCategoryTitle)
  }

  render() {
    const { nodes: workNodes } = this.props.data.allWpPost;
    return (
        <Layout>
          <PageTitle
            title='Building brands that matter.'
          />
          <div className="container row">
            <div className="col-xs-12 work-filters">
              <div className="work-filter">
                <ul className="work-filter_items">
                  <li className="work-filter_item first">
                    <a onClick={ () => this.updateCategory(-1)}>
                      {categories[this.state.currentCategory]?.title ?? 'All'}
                    </a>
                  </li>
                  <li className={'work-filter_item ' + (this.state.currentCategory === -1 ? 'work-filter_item--off' : '')}>
                    <a onClick={ () => this.updateCategory(-1)}>All</a>
                  </li>
                  {categories.map((category, index) => (
                    <li className={'work-filter_item ' + (this.state.currentCategory === index ? 'work-filter_item--off' : '')} key={index}>
                      <a onClick={ () => this.updateCategory(index)}>{category.title}</a>
                    </li>
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
              workNodes.filter(this.fitlerNode).map((node, index) => {
                return (
                <div className="col-xs-12 col-md-6 grid_card" key={index}>
                  <article className="work_card" key={node.id}>
                    <Link to={`/work/${node.slug.toLowerCase()}`}>
                      <div className="work_card-featured-image">
                        {node.featuredImage && <img
                          src={node.featuredImage.node.sourceUrl}
                          alt={node.featuredImage.node.altText}
                        />}
                      </div>
                      <p>{node.title}</p>
                      <p className="work_card-subtitle">{node.subtitle || 'NO SUBTITLE'}</p>
                    </Link>
                  </article>
                </div>
              )
              })
            }
          </div>

          <div className={`work container row list ${this.state.listIsOpen ? 'grid-view' : 'list-view'}`}>
            {
              workNodes.filter(this.fitlerNode).map((node, index) => (
                <div className="work_card-list col-xs-12" key={index}>
                  <article key={node.id}>
                    <Link to={`/work/${node.slug.toLowerCase()}`}>
                      <p>{node.title}</p>
                      <p className="work_card-list-subtitle">{node.subtitle}</p>
                      <p className="work_card-list-date">{node.date}</p>
                    </Link>
                  </article>
                  <div className="work_card-list-image">
                    {node.featuredImage && <img
                      src={node.featuredImage.node.sourceUrl}
                      alt={node.featuredImage.node.altText}
                    />}
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
  query WorkPage {
    allWpPost {
      nodes {
        id
        uri
        slug
        title
        excerpt
        content
        featuredImage {
          node {
            srcSet
            slug
            sourceUrl
            title
            uri
          }
        }
      }
    }
  }
`

export default WorkPage