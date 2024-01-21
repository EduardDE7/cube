import React from 'react';

export const Cube = React.memo(({ rotateXCube, rotateYCube }) => {
  return (
    <div className="container">
      <div
        className="cube"
        style={{
          transform: `rotateX(${rotateXCube}deg) rotateY(${rotateYCube}deg)`,
        }}
      >
        <div className="face front">front1</div>
        <div className="face back">back2</div>
        <div className="face top">top3</div>
        <div className="face right">right4</div>
        <div className="face left">left5</div>
        <div className="face bottom">bottom6</div>
      </div>
    </div>
  );
});
