import React from 'react'
import useMousePosition from "../hooks/useMousePosition";
import useCursorType from "../hooks/useCursorType";

function CursorWrapper ({ children }) {
  const { slug: cursorSlug, text: cursorText } = useCursorType()
  const { x, y } = useMousePosition()

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

  if( isTablet || isMobile ) return null
  
  return (
    <>
      <span
        className={[
          'cursor',
          `cursor--${cursorSlug}`,
        ].join(' ')}
        style={{
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
        }}
      >
        <span className="dot" />
        <span className="cursor__text">{cursorText}</span>
      </span>
      {children}
    </>
  )
}

export default CursorWrapper