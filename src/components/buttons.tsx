import { faces } from './constants';

interface NumberProps {
  setRotateXCube: (number: number) => void;
  setRotateYCube: (number: number) => void;
}

export const Buttons = ({ setRotateXCube, setRotateYCube }: NumberProps) => {
  return (
    <div className="flex justify-center gap-5">
      {faces.length > 0 &&
        faces.map((face) => (
          <button
            key={face.position}
            className=""
            onClick={() => {
              setRotateXCube(face.rotateXCube);
              setRotateYCube(face.rotateYCube);
            }}
          >
            {face.position}
          </button>
        ))}
    </div>
  );
};
