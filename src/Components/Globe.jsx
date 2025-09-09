import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import { Suspense } from 'react'

function Earth() {
  const [colorMap] = useTexture([
    'https://cdn.jsdelivr.net/gh/nikolay-govorov/earth-textures@main/8k_earth_daymap.jpg'
  ])

  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}


export default function Globe() {
  return (
    <Canvas style={{ height: '100vh', background: '#000' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}
