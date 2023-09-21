import { RigidBody } from "@react-three/rapier";
import { useGLTF,useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function ScenePalo() {
  
  const {scene} = useGLTF("./RoomPalo3D.glb");

   
  return (
    <RigidBody type="fixed"  position={[0,-2,0]} rotation={[0,0,0]} >
      <primitive object={scene} scale={1} />    </RigidBody>
  );
}
