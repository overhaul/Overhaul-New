import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [ cursorType, setCursorType ] = useState({ slug: 'default', text: '' })

  useEffect(() => {
    const mouseOverHandler = (event) => {
      let cursorTarget = event.target
      let depth = 5
      let slug = 'default'
      let text = ''
      while (depth-- && cursorTarget) {
        const className = cursorTarget.className
        if (
          className?.match &&
          className.match(/cursor-type--|cursor-text--/)
        ) {
          const hasText = className.match(/cursor-text--/)
          slug = hasText ? 'text' : className.replace(/.*cursor-type--([^"'\s]+).*/, '$1')
          text = !hasText ? '' : className
            .replace(/.*cursor-text--([^"'\s]+).*/, '$1')
            .replace(/_/g, ' ')
          break
        }
        cursorTarget = cursorTarget.parentNode
      }
      setCursorType({ slug, text })
    }

    document.addEventListener("mouseover", mouseOverHandler)
    document.addEventListener("mouseout", mouseOverHandler)

    return () => {
      document.removeEventListener("mouseover", mouseOverHandler)
      document.removeEventListener("mouseout", mouseOverHandler)
    }
  }, [])

  return cursorType;
}
