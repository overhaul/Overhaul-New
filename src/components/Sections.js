import React from 'react'

import DualImages from './DualImages'
import FullWidthImage from './FullWidthImage'
import WorkIntro from './WorkIntro'

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
                  return { src, alt }
                }
              )}
            />
          )
          : (
            <FullWidthImage
              key={index}
              image={section.images[0].image.sourceUrl ?? section.images[0].image.url}
              alt={section.images[0].image.altText ?? section.images[0].image.alt}
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
      default:
        return (<></>)
    }
  })
}

export default Sections