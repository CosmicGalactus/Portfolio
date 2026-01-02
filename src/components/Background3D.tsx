import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0003;
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color={isDark ? '#6366f1' : '#818cf8'}
        emissive={isDark ? '#4f46e5' : '#6366f1'}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </Sphere>
  );
};

const Background3D: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 4] }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color={isDark ? '#818cf8' : '#c7d2fe'} />
      <AnimatedSphere isDark={isDark} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Background3D;
