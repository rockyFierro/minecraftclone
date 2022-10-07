import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[80, 100, 65]} />
        <ambientLight intensity={0.26} />
        <Physics>
          <Player/>
          <Ground/>
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
