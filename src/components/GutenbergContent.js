import React from 'react'
import Sections from './Sections'

function GutenbergContent ({ content }) {
  const sectionBlocks = content.match(/<!--SECTIONS(.+)ENDSECTIONS-->/g)
  const gutenbergBlocks =
    content.replace(/<!--SECTIONS(.+)ENDSECTIONS-->/g, 'BLOCKSPLITGUTENBERGSECTIONSBLOCKSPLIT')
    .split('BLOCKSPLIT')
    .filter((v) => !v.match(/^[\s\n]*$/))
  return (
    <div style={{zIndex: 100, backgroundColor: 'white', position: 'relative', willChange: 'transform'}}>
      <div className="container">
        {gutenbergBlocks.map((content, index) => {

          if (content.match(/GUTENBERGSECTIONS/) && sectionBlocks.length) {
            const sections = JSON.parse(sectionBlocks.shift().replace(/<!--SECTIONS|ENDSECTIONS-->/g, ''))
            return (<Sections sections={sections.sections} key={index} />)
          }
          
          return (
            <div dangerouslySetInnerHTML={{__html: content}} key={index}>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GutenbergContent