import { RigidBody } from "@react-three/rapier";
import { useGLTF,useAnimations } from "@react-three/drei";
import { useEffect,useRef } from "react";
import * as THREE from "three";

export default function LogoPalo() {

  const grupo=useRef();
  
  const {animations,scene} = useGLTF("./logoAnimacionPalo.glb");
  const { actions } = useAnimations(animations,grupo);

  useEffect(()=>{ actions["rotate"].reset().play(); },[]);

  return (
    <group ref={grupo}>
    <RigidBody type="fixed"  position={[10,3,5]} rotation={[0,-19.5,0]} >
      <primitive object={scene} scale={0.01} />
    </RigidBody>
    </group>
   
  );
}
