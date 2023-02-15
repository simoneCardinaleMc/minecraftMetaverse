import { Canvas } from '@react-three/fiber';
import {Sky} from "@react-three/drei";
import {Ground} from "./components/Ground";
import {Physics} from "@react-three/cannon";
import {Player} from "./components/Player";
import {FPV} from "./components/FPV";
import {Cubes} from "./components/Cubes";
import {TextureSelector} from "./components/TextureSelector";

function App() {
  return (
    <>
      <Canvas>
          <Sky sunPosition={[200, 200, 20]} />
          <ambientLight intensity={0.5} />
          <FPV />
          <Physics>
              <Ground />
              <Cubes />
              <Player />
          </Physics>
      </Canvas>
        <div className="absolute centered">+</div>
        <TextureSelector />
    </>
  );
}

export default App;
