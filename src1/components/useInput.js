import { useEffect, useState } from "react";

export const useInput =()=>{

    const [input,setInput]=useState({
       
        rotate:false
    });
    const keys={
        KeyA:"Idle",
        KeyW:"TPose",
        KeyS:"walk",
        KeyD:"Run",
        Space:"Space"
        
    }
    const findKey=(key)=>keys[key];

    useEffect(()=>{

    const handleKeyDown=(e)=>{
        setInput((m)=>({...m,[findKey(e.code)]:true}))
    }

    const handleKeyUp=(e)=>{
        setInput((m)=>({...m,[findKey(e.code)]:false}))
    }

    
        document.addEventListener("keydown",handleKeyDown);
        document.addEventListener("keyup",handleKeyUp);
    
        return ()=>{
            document.addEventListener("keydown",handleKeyDown);
            document.addEventListener("keyup",handleKeyUp)
        }
    
    },[])

   
    return input;
}