import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
  const [ref] = useBox((props) => ({
    type: "Static",
    position,
    texture,
  }));
  const activeTexture = textures[texture + "Texture"];
  console.log("activeTexture -> ", activeTexture);

  return (
    <mesh ref={ref}>
      <boxGeometry attach={"geometry"} />
      <meshStandardMaterial map={activeTexture} attach={"material"} />
    </mesh>
  );
};
