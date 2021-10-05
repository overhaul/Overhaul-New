import React from 'react'

import DualImages from '/src/components/DualImages'
import FullWidthImage from '/src/components/FullWidthImage'

function Sections ({ sections }) {
  return !sections ? (<div />) : sections.map((section, i) => {
    switch (section.fieldGroupName) {
      case 'Post_Description_Sections_Images':
        return section.images.length > 1
          ? (
            <DualImages
              key={i}
              images={section.images.map(
                (node) => ({ src: node.image.sourceUrl , alt: node.image.altText })
              )}
            />
          )
          : (
            <FullWidthImage
              key={i}
              image={section.images[0].image.sourceUrl}
              alt={section.images[0].image.altText}
            />
          )        
      default:
        return(<div>NO IMAGE</div>)
    }
  })
}

export default Sections