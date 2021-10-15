import React from 'react'
import Sections from './Sections'

function GutenbergContent ({ content, containerClass }) {
  if(!content) content = ''
  const sectionBlocks = content.match(/<!--SECTIONS(.+)ENDSECTIONS-->/g)
  const gutenbergBlocks =
    content.replace(/<!--SECTIONS(.+)ENDSECTIONS-->/g, 'BLOCKSPLITGUTENBERGSECTIONSBLOCKSPLIT')
    .split('BLOCKSPLIT')
    .filter((v) => !v.match(/^[\s\n]*$/))
  return (
    <div className={'gutenberg-content' + (containerClass ?? '')}>
      {gutenbergBlocks.map((content, index) => {

        // Vimeo embed override
        content = content.replace(/(https:\/\/player\.vimeo.+?\?)/g, '$1background=1&')

        if (content.match(/GUTENBERGSECTIONS/) && sectionBlocks.length) {
          const sections = JSON.parse(sectionBlocks.shift().replace(/<!--SECTIONS|ENDSECTIONS-->/g, ''))
          return (<Sections sections={sections.sections} key={index} />)
        }
        
        return (
          <div className='wp gsap-fade-in' dangerouslySetInnerHTML={{__html: content}} key={index}>
          </div>
        )
      })}
    </div>
  )
}

export default GutenbergContent
