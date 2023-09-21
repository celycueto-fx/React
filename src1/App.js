import { useEffect,useState,Text,useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows, OrbitControls, useFBX } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"
import "./App.css"
import * as THREE from 'three'
import { Html} from '@react-three/drei'
import { Popconfirm } from 'antd'
import { Environment } from "./Environment"
import { useInput } from "./components/useInput"

const store = [

  { name: 'IR A PALO IT', color: 'blue', position: [2, 0, 5], url: 'https://www.palo-it.com/es/' , link: 0 }
  
]

function ModelEscena(props) {

  const { scene,nodes, materials, animations } = useGLTF("/escenaTestPalo.glb")
  const { ref, actions } = useAnimations(animations)
 
  animations[0].name="rotate"

  
  useEffect(()=>{
    
      actions["rotate"].reset().play();
     

  },[])
  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    
    </group>
  )
}
//<Dome name={"IR A PALO IT"}  position={[2, 0, 5]}  onClick={() => set("https://www.palo-it.com/es/")}></Dome>
function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[50, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="red" />
        <Html center>
          <Popconfirm title="Desea visitar la pagina oficial de PALO IT?" onConfirm={onClick} okText="SI" cancelText="NO">
            <a href="https://www.palo-it.com/es/">{name}</a>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  )
}

function LogoPalo(props){
  let count=1;
  const scroll = useScroll();
  const {Idle,TPose,Run,Walk,jump}=useInput();
const grupo=useRef();
  
  const { animations,scene} = useGLTF("/logoAnimacionPalo.glb")

  animations[0].name="rotate"

  const { actions } = useAnimations(animations,grupo)
 

  useEffect(()=>{
    
      actions["rotate"].reset().play();
     

  },[])
  
 
 
  return (
    <group {...props} ref={grupo} >
      
      <primitive object={scene} />
     
    </group>
  )

}
function ModelJump(props) {
let count=1;
  const scroll = useScroll();
  const {Idle,TPose,Run,walk,jump}=useInput();
const grupo=useRef();
  
  console.log(useGLTF("/jump-transformed.glb"));

  const { animations , materials,nodes,scene} = useGLTF("/ciclo_caminar.glb")

  const {animations2}= useFBX("./Walking.fbx");

console.log(animations)
  animations[0].name="Walk"

  const { actions } = useAnimations(animations,grupo)
 
  const currentAction=useRef("");

console.log("res",count,count/2)
  useEffect(()=>{
          actions["Walk"].reset().play();
  
  
  },[])

  /*
 console.log(actions)
useEffect(()=>{
  let action = "";
  
  if(walk){
    action="walking";
  
  }

  console.log(currentAction.current)
  console.log(currentAction)
  console.log(action )
  if(currentAction.current!=action){
    const nextActionToPlay= actions[action];
    console.log(actions[action])

    const current=actions[currentAction.current];
    current?.fadeOut(0.3);
    nextActionToPlay?.reset().play();
    currentAction.current=action;
  }
  },[walk])
  
*/

 
  return (
    <group {...props} ref={grupo} >
      

      <primitive object={scene} />
  
     
    </group>
  )
}


export default function App() {

  const [which, set] = useState(0)

 // const {  url,link, ...props } = store[which]

  return (
   
    
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [0, 4, 15], fov: 50 }}>
    
      <color attach="background" args={["#f0f0f0"]} />
     
       
      <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
      
      < ModelEscena position={[0,1,-20]} rotation={[0,0,0]} scale={0.01} />
      <OrbitControls></OrbitControls>
      <ModelJump position={[-8, 0, -4]} rotation={[Math.PI / 90, 0, 0]} scale={0.01} ></ModelJump>
      <Environment color="red"></Environment>
      
      </ScrollControls>
     
  
    <OrbitControls></OrbitControls>
    
    </Canvas>
 
  )
}
