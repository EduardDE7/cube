'use client';
import React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { faces } from './constants';
import debounce from 'debounce';
import { Buttons } from './buttons';
import { About } from './about';

export const Cube = () => {
  const [rotateXCube, setRotateXCube] = useState(0);
  const [rotateYCube, setRotateYCube] = useState(0);
  let activeFace = 0;

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const length = faces.length;

    activeFace =
      e.deltaY > 0
        ? (activeFace + 1) % length
        : (activeFace - 1 + length) % length;

    setRotateXCube(faces[activeFace].rotateXCube);
    setRotateYCube(faces[activeFace].rotateYCube);
  };

  console.log('render');

  const debouncedScroll = useMemo(() => debounce(handleWheel, 150), []);

  return (
    <main
      onWheel={debouncedScroll}
      className="flex items-center justify-center min-h-screen bg-gray-700 text-white"
    >
      <div className="perspective w-[500px] h-[500px]">
        <div
          className="relative w-full h-full preserve-3d transition-all duration-1000 ease-in-out"
          style={{
            transform: `rotateX(${rotateXCube}deg) rotateY(${rotateYCube}deg)`,
          }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden w-[var(--cubeSize)] h-[var(--cubeSize)] font-size-5 bg-gray-800 p-5 ${face.position} flex flex-col justify-center`}
            >
              <Buttons
                setRotateXCube={setRotateXCube}
                setRotateYCube={setRotateYCube}
              />
              <div className="w-full"></div>
              <div className="w-full flex-1 my-5">
                <About />
              </div>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
