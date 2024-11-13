import * as React from 'react'
import { Component } from "react";
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import WorkCard from '../../components/WorkCard'
// import WorkListItem from '../../components/WorkListItem'
import BlockMarquee from '../../components/BlockMarquee'

class WorkPage extends Component {
  constructor() {
    super();
    this.state = {
      listIsOpen: true,
      currentCategory: -1,
      showAllCategories: false,
    };
    this.toggleView = this.toggleView.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.clearCategoryFilter = this.clearCategoryFilter.bind(this); // Reset filter
    this.fitlerNode = this.fitlerNode.bind(this);
  }

  toggleView(view) {
    if (window.ScrollTriggerInstance) {
      window.ScrollTriggerInstance.refresh(true);
    }

    this.setState({
      listIsOpen: view === 'list',
    });
  }

  updateCategory(index) {
    this.setState({
      currentCategory: index,
      showAllCategories: false, // Hide all categories once one is selected
    });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  clearCategoryFilter() {
    this.setState({
      currentCategory: -1, // Reset filter
    });
  }

  fitlerNode(node) {
    if (this.state.currentCategory === -1) return true;
    const currentCategoryObject = this.categoryList()[this.state.currentCategory];
    const currentCategoryTitle = currentCategoryObject?.title;
    return (node.categories.nodes || []).find((cat) => cat.name === currentCategoryTitle);
  }

  categoryList() {
    const { nodes: workNodes } = this.props.data.allWpPost;

    const workPostCategories = workNodes.reduce((usedCategories, post) => {
      for (let i = 0; i < post.categories.nodes.length; i++) {
        if (!usedCategories[post.categories.nodes[i].slug]) {
          usedCategories[post.categories.nodes[i].slug] = 
            post.categories.nodes[i].name;
        }
      }
      return usedCategories;
    }, {});

    return Object.keys(workPostCategories).map((cat) => ({
      title: workPostCategories[cat],
      slug: cat,
    }));
  }

  toggleShowAllCategories = () => {
    this.setState({ showAllCategories: !this.state.showAllCategories });
  };

  updateCategoryFilter = (category) => {
    this.updateCategory(this.categoryList().map(cat => cat.title).indexOf(category))
  };

  render() {
    const { nodes: workNodes } = this.props.data.allWpPost;
    const categories = this.categoryList();
    const categoriesToShow = this.state.showAllCategories ? categories : categories.slice(0, 3);
    const activeCategory = this.state.currentCategory !== -1 ? categories[this.state.currentCategory] : null;

    return (
      <Layout seo={this.props.data.wpPage.seo}>
        <PageTitle title="Building brands that matter." />
        <div className="container row">
          <div className="col-xs-12 col-md-6 work-filters">
            <div className="work-filter">
              <ul className="work-filter_items">
                <li className="work-filter_item first">We deal with&nbsp;</li>

                {activeCategory && !this.state.showAllCategories ? (
                  // Show only the active category with an "X" to reset the filter
                  <li className="work-filter_item active-category">
                    <button onClick={this.clearCategoryFilter}>X&nbsp;</button>
                    <span>{activeCategory.title}</span>
                    {',\u00A0'}
                  </li>
                ) : (
                  <>
                  {activeCategory && <li className="work-filter_item active-category">
                    <button onClick={this.clearCategoryFilter}>X&nbsp;</button>
                    <span>{activeCategory.title}</span>
                    {',\u00A0'}
                  </li>}
                  
                  {categoriesToShow.map((category, index) => (
                    <li
                      className={
                        'work-filter_item ' +
                        (this.state.currentCategory === index ? 'work-filter_item--off' : '')
                      }
                      key={index}
                    >
                      <a onClick={() => this.updateCategory(index)}>{category.title}</a>
                      {index <= categoriesToShow.length - 1 ? ',\u00A0' : this.state.showAllCategories ? '.\u00A0' : ''}
                    </li>
                  ))}
                  </>
                )}

                {/* Show "and more" link if more than 3 categories */}
                {categories.length > 3 && !this.state.showAllCategories && (
                  <li className="work-filter_item">
                    
                    <a onClick={this.toggleShowAllCategories}>and more.</a>
                  </li>
                )}

                {/* Show "show less" link when all categories are shown */}
                {this.state.showAllCategories && (
                  <li className="work-filter_item show-less">
                    <a onClick={this.toggleShowAllCategories}>Show less.</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className={`work container row grid ${this.state.listIsOpen ? 'grid-view' : 'list-view'}`}>
          {workNodes.filter(this.fitlerNode).map((node) => (
            <WorkCard
              key={node.id}
              title={node.title}
              url={`/work/${node.slug.toLowerCase()}`}
              featuredImage={node.featuredImage}
              gatsbyImageData={node.featuredImage?.node.localFile.childImageSharp}
              excerpt={node.workSubtitle.subTitle}
              categories={node.categories.nodes.map((cat) => cat.name)}
              onCategoryClick={this.updateCategoryFilter}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        <BlockMarquee text="Look like something you need? Start the conversation." link="/contact" linkText='Reach_Out' />
      </Layout>
    );
  }
}


export const query = graphql `
  query WorkPage {
    allWpPost(sort: {fields: date, order: DESC}, limit: 32){
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
    }
  }
`

export default WorkPage