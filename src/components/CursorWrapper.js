import React from 'react'
import useMousePosition from "../hooks/useMousePosition";
import useCursorType from "../hooks/useCursorType";

function CursorWrapper ({ children }) {
  const { slug: cursorSlug, text: cursorText } = useCursorType()
  const { x, y } = useMousePosition()

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