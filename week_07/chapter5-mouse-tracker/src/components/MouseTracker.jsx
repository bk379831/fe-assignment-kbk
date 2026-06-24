import { useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickedPositions, setClickedPositions] = useState([]);

  const getOffsetInfo = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    return {
      offsetX,
      offsetY,
    };
  };

  return (
    <>
      <div className="trackerInfo">
        현재 위치 x: {position.x}, y: {position.y}
      </div>

      <div
        className="trackerArea"
        onMouseMove={(e) => {
          const { offsetX, offsetY } = getOffsetInfo(e);

          setPosition({
            x: offsetX,
            y: offsetY,
          });
        }}
        onClick={(e) => {
          const { offsetX, offsetY } = getOffsetInfo(e);

          setClickedPositions([
            ...clickedPositions,
            { x: offsetX, y: offsetY },
          ]);
        }}
      >
        마우스 트래킹 하는 공간

        <div
          className="trackerBall"
          style={{
            left: position.x - 10,
            top: position.y - 10,
          }}
        />

        {clickedPositions.map((pos, index) => (
          <div
            key={index}
            className="clickedBall"
            style={{
              left: pos.x - 10,
              top: pos.y - 10,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MouseTracker;