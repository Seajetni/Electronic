import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";



 export const Presen =() => {
  return (
    <>
      <Canvas >
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


