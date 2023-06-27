import { Backdrop, Float, Html, Line, OrbitControls, PerspectiveCamera, Shadow, Stars, Text, useScroll } from "@react-three/drei";
import { Bg } from "./Background";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import { Car } from "./Car";
import { Road } from "./Road";
import { Department } from "./Department";
import { Prop } from "./Prop";
import { Park } from "./Park";
import { Porp1 } from "./Prop1";
import { Prop2 } from "./Prop2";
import { Prop3 } from "./Prop3";
import { Bull } from "./Bull";


const LINE_NB_POINT = 20000;

export const Experience = () => {
  
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0,-1 ,0),
      new THREE.Vector3(0,-1 , 10),
      new THREE.Vector3(0,-1 , 20),
      new THREE.Vector3(0,-1 , 30),
      new THREE.Vector3(0,-1 , 40),
      new THREE.Vector3(0,-1 , 50),
      new THREE.Vector3(0,-1 , 60),
      new THREE.Vector3(0,-1 , 70),
      new THREE.Vector3(0,-1 , 80),
      new THREE.Vector3(0,-1 , 90),
      new THREE.Vector3(0,-1 , 100),
      new THREE.Vector3(0,-1 , 110),
      new THREE.Vector3(0,-1 , 120),
      new THREE.Vector3(0,-1 , 130),
      new THREE.Vector3(0,-1 , 140),
      new THREE.Vector3(0,-1 , 150),
      new THREE.Vector3(0,-1 , 160),
      new THREE.Vector3(0,-1 , 170),
      new THREE.Vector3(0,-1 , 180),
      new THREE.Vector3(0,-1 , 190),
      new THREE.Vector3(0,-1 , 200),
      new THREE.Vector3(0,-1 , 210),
      new THREE.Vector3(0,-1 , 220),
      new THREE.Vector3(0,-1 , 230),
      new THREE.Vector3(0,-1 , 240),
      new THREE.Vector3(0,-1 , 250),
      new THREE.Vector3(0,-1 , 260),
      new THREE.Vector3(0,-1 , 270),
      new THREE.Vector3(0,-1 , 280),
      new THREE.Vector3(0,-1 , 290),
      new THREE.Vector3(0,-1 , 300),
      new THREE.Vector3(0,-1 , 310),
      new THREE.Vector3(0,-1 , 320),


    ],
    false,
    "catmullrom",
    0.5);
  }, []);

  const linePoint = useMemo(() => {
    return curve.getPoints(LINE_NB_POINT);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);
    return shape;
  }, []);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoint.length),
      linePoint.length - 1
    );
    const curPoint = linePoint[curPointIndex];

    cameraGroup.current.position.lerp(curPoint, delta);
  });


  


  return (
    <>
      <group ref={cameraGroup} >
        <Bg />
        <PerspectiveCamera position={[0, 1, -5]} rotation={[0, Math.PI, 0]} fov={40} makeDefault />
          <Car rotateY={1} scale={0.003} />

      </group>
      <group position={[0, -1, 0]}>
      
      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,1]}>
        Hello We Will Go To 
        Electronic Department In 
        Trat Technical College
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,40]}>
        There are a lot of strange things in this department.
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,80]}>
        Most individual teachers in this department are mentally retarded.
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,120]}>
       I Don't kwon Why
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,160]}>
       And there is a department head who is as outstanding as we could ever imagine
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,200]}>
       I'll Be The One To Take You To See For Yourself. 
      </Text>

      <Text font={"/Font/Kanit-Regular.woff"}
      color="white" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[1,2,240]}>
       At This Electronic Department  !!!
      </Text>
      

      <Text font={"/Font/Kanit-Regular.woff"}
      backgroundColor="red"
      color="black" 
      anchorX="left" 
      anchorY="middle"
      fontSize={0.22}
      maxWidth={2.5}
      rotation={[0, Math.PI, 0]}
      position={[0.5,4.5,325]}>
       Open The Door !!!!!!!!!!!!
      </Text>


      

      
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINT,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"red"} opacity={0.7} transparent />
        </mesh>
      </group>
      <Prop position={[-5,-1,330]} scale={[0.1,0.1,0.1]} rotation={[0, Math.PI/1.5, 0]}/>
      <Department position={[-1,-2,340]} rotation={[0, Math.PI, 0]}   onClick={() => {window.location.href = "/home";}}/>
      
      
      <Road position={[-1,-2,0]}/>
      <Road position={[-1,-2,13]}/>
      <Road position={[-1,-2,26]}/>
      <Road position={[-1,-2,39]}/>
      <Road position={[-1,-2,52]}/>
      <Road position={[-1,-2,65]}/>
      <Road position={[-1,-2,78]}/>
      <Road position={[-1,-2,91]}/>
      <Road position={[-1,-2,104]}/>
      <Road position={[-1,-2,117]}/>
      <Road position={[-1,-2,130]}/>
      <Road position={[-1,-2,143]}/>
      <Road position={[-1,-2,156]}/>
      <Road position={[-1,-2,169]}/>
      <Road position={[-1,-2,182]}/>
      <Road position={[-1,-2,195]}/>
      <Road position={[-1,-2,208]}/>
      <Road position={[-1,-2,221]}/>
      <Road position={[-1,-2,234]}/>
      <Road position={[-1,-2,247]}/>
      <Road position={[-1,-2,260]}/>
      <Road position={[-1,-2,273]}/>
      <Road position={[-1,-2,286]}/>
      <Road position={[-1,-2,299]}/>
      <Road position={[-1,-2,312]}/>
      <Road position={[-1,-2,325]}/>
      <Park position={[-30,-1,325]} scale={[10,10,10]}/>
      <Porp1 scale={[0.7,0.7,0.7]} position={[3,-1.03,50]} rotation={[0, Math.PI, 0]}/>
      <Prop2 scale={[0.15,0.15,0.15]} position={[-2,-0.5,200]} rotation={[0, Math.PI, 0]}/>
      <Prop3 scale={[0.5,0.5,0.5]} position={[-2,-1,150]} rotation={[0, Math.PI, 0]}/>
      <Bull  position={[5,-1,330]} scale={[0.25,0.25,0.25]} rotation={[0, Math.PI/-1.5, 0]}/>
     </>
  );
};
