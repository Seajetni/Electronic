import { Environment, OrbitControls } from "@react-three/drei";

import { Bg } from "./Background";
import { Floor1 } from "./Floor1";



export const Experience = () => {
  return (
    <>
    <OrbitControls />
    <Environment preset="sunset"/>
    <Bg/>
    <Floor1/>

    </>
  );
};