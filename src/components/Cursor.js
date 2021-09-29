import React, { useContext } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { MouseContext } from "../context/mouse-context";

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default Cursor