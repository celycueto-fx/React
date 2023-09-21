import { KeyboardControls } from '@react-three/drei'

const controls = [
    { name: 'Idle', keys: ['ArrowUp', 'KeyW'] },
    { name: 'TPose', keys: ['ArrowDown', 'KeyS'] },
    { name: 'Walk', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'Run', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'reset', keys: ['r', 'R'] },
    { name: 'rotate', keys: ['KeyO'] },
    { name: 'audio', keys: ['m', 'M'] }
]

function NavigationControls({ children }) {
    return <KeyboardControls map={controls}>{children}</KeyboardControls>
}

export  default NavigationControls 
