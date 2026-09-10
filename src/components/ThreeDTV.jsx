import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture, Environment, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TVScreen({ imageUrl }) {
  const meshRef = useRef();
  const texture = useTexture(imageUrl);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* TV Frame - Black bezel */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[4.5, 2.8, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen with video texture */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[4, 2.5]} />
        <meshStandardMaterial
          map={texture}
          emissive="#ffffff"
          emissiveIntensity={0.3}
          toneMapped={false}
        />
      </mesh>

      {/* Screen glow effect */}
      <pointLight position={[0, 0, 0.5]} intensity={2} color="#FF6B2C" distance={5} />

      {/* TV Stand */}
      <mesh position={[0, -1.6, -0.1]}>
        <cylinderGeometry args={[0.15, 0.2, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.8, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.8}
      />
    </mesh>
  );
}

const ThreeDTV = ({ imageUrl = 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80', autoRotate = false }) => {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#121110']} />

        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          color="#FF6B2C"
        />
        <spotLight
          position={[-5, 3, -2]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#3b82f6"
        />

        <Suspense fallback={null}>
          <TVScreen imageUrl={imageUrl} />
          <Floor />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Overlay text */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="bg-brand-black/80 backdrop-blur-md border border-brand-orange/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-300">LIVE IN 4K</span>
          </div>
          <h3 className="text-2xl font-bold text-white">30.500+ Kanalen</h3>
          <p className="text-gray-400">Bekijk op elk apparaat</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDTV;
