import { Environment, Sphere } from '@react-three/drei'
import { Gradient, LayerMaterial } from 'lamina'
import React from 'react'
import * as THREE from 'three'
export const Bg = () => {
  return (
    <>
    <Environment preset='city'/>
    <Sphere scale={[100,100,100]} rotationY={Math.PI/2}>
        <LayerMaterial lighting='physical' transmission={1} side={THREE.BackSide}>
            <Gradient
            colorA={"white"} 
            colorB={"#357ca1"}
            axes={"y"}
            start={-1}
            end={-0.1}/>
            
        </LayerMaterial>
    </Sphere>
    </>
  )
}
