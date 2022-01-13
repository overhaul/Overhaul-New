import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (window.mousePosition) setMousePosition(window.mousePosition);

    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      const mousePosition = { x: clientX, y: clientY }
      window.mousePosition = mousePosition
      setMousePosition(mousePosition);
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
