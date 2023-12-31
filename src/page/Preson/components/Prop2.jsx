/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Prop/prop2.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Prop2(props) {
  const { nodes, materials } = useGLTF('models/Prop/prop2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.864, -0.852, 3.208]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={81.171}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Details 0']} />
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Details 1.001']} />
      </group>
      <group position={[0, 0.188, 4.642]} rotation={[-2.182, 0, 0]} scale={100}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Body.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Details 1']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials.Headlights} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials.Windows} />
      </group>
      <group position={[1.052, -0.858, -0.409]} rotation={[-Math.PI / 2, 0, 0]} scale={122.743}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Chair} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Chair Details 2']} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Chair Details']} />
      </group>
      <group position={[-1.048, -0.858, -0.409]} rotation={[-Math.PI / 2, 0, 0]} scale={122.743}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Body.001']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Chair Details 2']} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials['Chair Details']} />
      </group>
      <group position={[1.07, 0.373, 1.306]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Details 1']} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials.Interior} />
        <mesh geometry={nodes.Cylinder004_3.geometry} material={materials['Details 0.001']} />
        <mesh geometry={nodes.Cylinder004_4.geometry} material={materials.Clocks} />
      </group>
      <group position={[0, 0.188, 4.642]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Body.001']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Details 1']} />
        <mesh geometry={nodes.Plane002_3.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Plane002_4.geometry} material={materials.Interior} />
        <mesh geometry={nodes.Plane002_5.geometry} material={materials['Details 0.001']} />
        <mesh geometry={nodes.Plane002_6.geometry} material={materials.Sidelights} />
        <mesh geometry={nodes.Plane002_7.geometry} material={materials['Brakelights.001']} />
        <mesh geometry={nodes.Plane002_8.geometry} material={materials.Tailights} />
        <mesh geometry={nodes.Plane002_9.geometry} material={materials['Interior Details 0']} />
        <mesh geometry={nodes.Plane002_10.geometry} material={materials.Plate} />
      </group>
      <group position={[1.864, -0.852, -3.051]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={81.171}>
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.Cylinder005_2.geometry} material={materials['Details 0']} />
        <mesh geometry={nodes.Cylinder005_3.geometry} material={materials['Details 1.001']} />
      </group>
      <group position={[-1.867, -0.852, 3.208]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={81.171}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Details 0']} />
        <mesh geometry={nodes.Cylinder002_3.geometry} material={materials['Details 1.001']} />
      </group>
      <group position={[-1.867, -0.852, -3.051]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={81.171}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Details 0']} />
        <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['Details 1.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Prop/prop2.glb')
