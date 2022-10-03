import { usePlane } from "@react-three/cannon";
import { RepeatWrapping } from "three";
import { groundTexture } from "../images/textures";

export const Ground = function () {
  const [ref] = usePlane(function () {
    return {
      rotation: [0, 0, 0],
      position: [0, 0, 0],
    };
  });

  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(1)
  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      {/*planeBufferGeometry renamed */}
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
