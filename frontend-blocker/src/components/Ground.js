import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import {
  dirtTexture,
  logTexture,
  grassTexture,
  glassTexture,
  woodTexture,
  groundTexture,
} from "../images/textures";
import { useStore } from "../hooks/useStore";

export const Ground = function () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.magFilter = NearestFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      onClick={(event) => {
        event.stopPropagation();
        const [x, y, z] = Object.values(event.point).map((val) =>
          Math.ceil(val)
        );
        addCube(x, y, z);
      }}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      {/*planeBufferGeometry renamed */}
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
