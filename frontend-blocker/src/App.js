import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 65]} />
        <ambientLight intensity={0.3} />
        <Physics>
          <Ground/>
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
