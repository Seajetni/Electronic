/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Main/Teacher.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Prop =(props)  => {
  const { nodes, materials } = useGLTF('models/Main/Teacher.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1.geometry} material={materials['795548']} />
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1_1.geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1_2.geometry} material={materials.DD9944} />
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1_3.geometry} material={materials['1A1A1A']} />
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1_4.geometry} material={materials.FF5722} />
      <mesh geometry={nodes.Teacher_Cube008_Cube003_1_5.geometry} material={materials['00BCD4']} />
    </group>
  )
}

useGLTF.preload('models/Main/Teacher.glb')