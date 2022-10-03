import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from "../images/textures";

export const Ground = function () {
  const [ref] = usePlane(function () {
    return {
      rotation: [-Math.PI/2.3, 0, 0],
      position: [0, 0, 0],
    };
  });

  groundTexture.magFilter = NearestFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100,100);

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      {/*planeBufferGeometry renamed */}
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
