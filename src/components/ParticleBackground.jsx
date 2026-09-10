import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedParticles() {
  const ref = useRef();
  const count = 2000;

  // Generate random positions for particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create a sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 3 + Math.random() * 5;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Orange to white gradient colors
      const colorIntensity = Math.random();
      colors[i * 3] = 1; // R
      colors[i * 3 + 1] = 0.4 + colorIntensity * 0.6; // G
      colors[i * 3 + 2] = 0.17 + colorIntensity * 0.83; // B
    }

    return { positions, colors };
  }, [count]);

  // Animate particles
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.075;
  });

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrb({ position, scale, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.3;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

const ParticleBackground = ({ showOrbs = true }) => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#121110']} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B2C" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

        <AnimatedParticles />

        {showOrbs && (
          <>
            <FloatingOrb position={[-2, 0, 0]} scale={0.5} color="#FF6B2C" speed={0.5} />
            <FloatingOrb position={[2, 1, -1]} scale={0.3} color="#3b82f6" speed={0.7} />
            <FloatingOrb position={[0, -1, -2]} scale={0.4} color="#8b5cf6" speed={0.6} />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
