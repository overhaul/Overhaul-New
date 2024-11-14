import React from 'react'

import DualImages from './DualImages'
import FullWidthImage from './FullWidthImage'
import WorkIntro from './WorkIntro'
import PageTitle from './PageTitle'
import PageHero from './PageHero'

import gutenbergACFSrcSet from '../helpers/gutenbergACFSrcSet'

function Sections ({ sections }) {
  return !sections ? (<div />) : sections.map((section, index) => {
    switch (section.fieldGroupName || section.acf_fc_layout) {
      case 'om_images':
      case 'Post_Description_Sections_Images':
        return section.images.length > 1
          ? (
            <DualImages
              key={index}
              images={section.images.map(
                (node) => {
                  const image = node.image
                  const src = image.sourceUrl ?? image.url
                  const alt = image.altText ?? image.alt
                  const srcSet = gutenbergACFSrcSet(image)
                  return { src, alt, srcSet}
                }
              )}
            />
          )
          : (
            <FullWidthImage
              key={index}
              image={section.images.reduce(
                (imageObj, node) => {
                  const image = node.image
                  const src = image.sourceUrl ?? image.url
                  const alt = image.altText ?? image.alt
                  const srcSet = gutenbergACFSrcSet(image)
                  return { src, alt, srcSet }
                },
                {}
              )}
            />
          )
      case 'Post_Description_Sections_Content':
      case 'om_content':
        const {side_title, paragraph, taxonomies} = section.content_section
        return (
          <WorkIntro
            key={index}
            title={side_title}
            paragraph={paragraph}
            taxonomies={taxonomies}
          />
        ) 
      case 'om_page_title' :
        const { title, subtitle } = section
        return(
          <PageTitle
            title={title}
            subTitle={subtitle}
            key={index}
          />
        )
      case 'om_page_hero' :
        const { hero_title, sub_title, image } = section
        return(
          <PageHero
            gatsbyImageData={[image].reduce(
                (imageObj, image) => {
                  const src = image.sourceUrl ?? image.url
                  const alt = image.altText ?? image.alt
                  const srcSet = gutenbergACFSrcSet(image)
                  return { src, alt, srcSet }
                },
                {}
              )}
            title={hero_title}
            subTitle={sub_title}
            key={index}
          />
        )
      default:
        return (<></>)
    }
  })
}

export default Sections