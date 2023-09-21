import { Grid, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import Character from "./Character.jsx";
import Floor from "./Floor.jsx";
import Lights from "./Lights.jsx";
import { useControls } from "leva";
import ScenePalo from "./ScenePalo.jsx";
import LogoPalo from "./LogoPalo.jsx";
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { Popconfirm } from 'antd'
import { useEffect,useRef,useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
export default function Experience() {
  /**
   * Debug settings
   */
 function Dome({ name, position, onClick }) {

  const [clicked, click] = useState(false)
  // const obj= useLoader(OBJLoader, require('./'))
   // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
   // Return the view, these are regular Threejs elements expressed in JSX
   if(onClick){
       
   }
    return (
      <group>

        <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
          <Html center>
              <a href="https://www.palo-it.com/es/">{name}</a>
          </Html>
        </mesh>
      </group>
    )
  }

  const { physics } = useControls("World Settings", {
    physics: false,
  });

  /**
   * Keyboard control preset
   */
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

   

      <Lights />

      <Physics debug={physics} interpolation={false} timeStep={"vary"}>

        <Dome name={"IR A PALO IT"} position={[20, 1, 5]} onClick={() => set(true)} scale={0.1}></Dome>
        {/* Character */},
        <KeyboardControls map={keyboardMap}>
        <Character />
        </KeyboardControls>
        <ScenePalo scale={0.01}></ScenePalo>
       

        <LogoPalo scale={0.01}></LogoPalo>

        {/* Floor */}
        <Floor />
      </Physics>
      
    </>
  );
}
