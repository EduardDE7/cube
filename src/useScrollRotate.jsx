import { useCallback, useState } from 'react';
import { faces } from './consatants';

export const useScrollRotate = () => {
  const [rotateXCube, setRotateXCube] = useState(0);
  const [rotateYCube, setRotateYCube] = useState(0);
  const [activeFace, setActiveFace] = useState(0);

  const onScroll = useCallback((e) => {
    if (e.deltaY > 0) {
      setActiveFace((prev) => (prev + 1) % faces.length);
    } else {
      setActiveFace(
        (prev) => (prev > 0 ? prev - 1 : prev + faces.length) % faces.length
      );
    }
    const { rotateXCube, rotateYCube } = faces[activeFace];
    setRotateXCube(rotateXCube);
    setRotateYCube(rotateYCube);
    console.log('test');
  }, []);
  return { rotateXCube, setRotateXCube, rotateYCube, setRotateYCube, onScroll };
};
