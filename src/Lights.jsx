import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"

export default function Lights() {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)

  return (
    <>
      <directionalLight
        castShadow
        position={[-21, -0.5, -2.5]}
        intensity={1.5}
   
        shadow-camera-near={2}
        shadow-camera-far={10}
        shadow-camera-top={1}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      
      />
      <ambientLight intensity={0.5} />
    </>
  );
}
