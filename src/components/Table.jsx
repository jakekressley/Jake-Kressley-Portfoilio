import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Table(props) {
  const { nodes, materials } = useGLTF('./scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.973}>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Folding_Table} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./scene.gltf')