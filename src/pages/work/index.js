import * as React from 'react'
import { Component } from "react";
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import WorkCard from '../../components/WorkCard'
import WorkListItem from '../../components/WorkListItem'
import BlockCallToAction from '../../components/BlockCallToAction'

class WorkPage extends Component {

  constructor() {
    super()
    this.state = {
      listIsOpen: true,
      currentCategory: -1,
    }
    this.toggleView = this.toggleView.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
    this.fitlerNode = this.fitlerNode.bind(this)
  }

  toggleView() {
    if (window.ScrollTriggerInstance) {
      window.ScrollTriggerInstance.refresh(true)
    }

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
    const currentCategoryObject = this.categoryList()[this.state.currentCategory]
    const currentCategoryTitle = currentCategoryObject?.title
    return (node.categories.nodes || []).find((cat) => cat.name === currentCategoryTitle)
  }

  categoryList() {
    const { nodes: workNodes } = this.props.data.allWpPost;

    const workPostCategories = workNodes.reduce((usedCategories, post) => {
      for (let i = 0; i < post.categories.nodes.length; i++) {
        if (!usedCategories[post.categories.nodes[i].slug]) {
          usedCategories[post.categories.nodes[i].slug] = 
            post.categories.nodes[i].name
        }
      }
      return usedCategories
    }, {})

    return Object.keys(workPostCategories).map((cat) => {
      return {
        title: workPostCategories[cat],
        slug: cat,
      }
    })
  }

  render() {
    const { nodes: workNodes } = this.props.data.allWpPost;
    return (
      <Layout seo={this.props.data.wpPage.seo}>
        <PageTitle
          title='Building brands that matter.'
        />
        <div className="container row">
          <div className="col-xs-12 work-filters">
            <div className="work-filter">
              <ul className="work-filter_items">
                <li className="work-filter_item first">
                  <a onClick={ () => this.updateCategory(-1)}>
                    {this.categoryList()[this.state.currentCategory]?.title ?? 'All'}
                  </a>
                </li>
                <li className={'work-filter_item ' + (this.state.currentCategory === -1 ? 'work-filter_item--off' : '')}>
                  <a onClick={ () => this.updateCategory(-1)}>All</a>
                </li>
                {this.categoryList().map((category, index) => (
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
                <WorkCard
                  key={node.id}
                  title={node.title}
                  url={`/work/${node.slug.toLowerCase()}`}
                  featuredImage={node.featuredImage}
                  gatsbyImageData={node.featuredImage?.node.localFile.childImageSharp}
                  excerpt={node.workSubtitle.subTitle}
                />
              )
            })
          }
        </div>

        <div className={`work container row list ${this.state.listIsOpen ? 'grid-view' : 'list-view'}`}>
          {
            workNodes.filter(this.fitlerNode).map((node, index) => (
              <WorkListItem {...node} key={index} />
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
    allWpPost(limit: 18){
      nodes {
        id
        uri
        slug
        title
        excerpt
        content
        date(formatString: "yyyy")
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900, quality: 80) {
                  ...GatsbyImageSharpFluid
                  srcSetWebp
                  srcWebp
                }
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
        workSubtitle {
          subTitle
        }
      }
    }

    wpPage(slug: {eq: "work"}) {
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
        readingTime
        title
        twitterDescription
        twitterTitle
      }
    }
  }
`

export default WorkPage