import { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

import ResizableRect from "./components/ResizableRect";

import "./App.css";

const initialRect = {
  x: 150,
  y: 150,
  width: 150,
  height: 100,
  fill: "white",
  id: "main-rect",
};

function App() {
  const [rectData, setRectData] = useState(initialRect);
  const [rectSelected, selectRect] = useState(false);

  function checkDeselect(e) {
    console.log(e.target);
    // const clickedOnResizable = e.target.attrs.id === initialRect.id;
    const clickedOnStage = e.target === e.target.getStage();

    if (clickedOnStage) {
      selectRect(false);
    }
  }

  function onRectChange(newAttrs) {
    console.log(newAttrs);
    setRectData(newAttrs);
  }

  return (
    <Stage
      className={"canvas"}
      width={window.innerWidth}
      height={window.innerWidth}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <ResizableRect
          shapeProps={rectData}
          isSelected={rectSelected}
          onSelect={() => {
            selectRect(true);
          }}
          onChange={onRectChange}
        />
      </Layer>
      <Layer className={"layer1"}>
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="brown"
          shadowBlur={1}
        />
        <Circle
          x={100}
          y={250}
          width={100}
          height={100}
          fill="orange"
          shadowBlur={1}
        />
      </Layer>
    </Stage>
  );
}

export default App;
