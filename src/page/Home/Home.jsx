import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

 export const Home =() => {
  return (
    <>
      <Canvas  camera={{ position: [0, 0, 1], fov: 80 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={10}>
        <Scroll html>
 
        </Scroll>
        <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}


