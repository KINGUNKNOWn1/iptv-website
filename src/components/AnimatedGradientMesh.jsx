import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.4 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={2.5}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0}
        metalness={0.1}
        opacity={0.8}
        transparent={true}
        blending={THREE.AdditiveBlending}
      />
    </Sphere>
  );
}

function GradientPlane() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.material.uniforms.uTime.value = time;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Animated gradient
      float gradient1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
      float gradient2 = cos(uv.y * 3.0 - uTime * 0.3) * 0.5 + 0.5;

      // Brand colors: orange #FF6B2C and blue
      vec3 color1 = vec3(1.0, 0.42, 0.17); // Orange
      vec3 color2 = vec3(0.23, 0.51, 0.96); // Blue
      vec3 color3 = vec3(0.55, 0.36, 0.96); // Purple

      vec3 finalColor = mix(color1, color2, gradient1);
      finalColor = mix(finalColor, color3, gradient2);

      gl_FragColor = vec4(finalColor, 0.15);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        uniforms={{
          uTime: { value: 0 }
        }}
      />
    </mesh>
  );
}

const AnimatedGradientMesh = ({ variant = 'hero' }) => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />

        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#FF6B2C" />
        <pointLight position={[-5, -5, 0]} intensity={0.8} color="#3b82f6" />

        {variant === 'hero' && (
          <>
            <AnimatedSphere position={[-3, 0, -2]} color="#FF6B2C" speed={0.5} distort={0.6} />
            <AnimatedSphere position={[3, 1, -3]} color="#3b82f6" speed={0.7} distort={0.5} />
            <AnimatedSphere position={[0, -2, -4]} color="#8b5cf6" speed={0.6} distort={0.4} />
          </>
        )}

        {variant === 'gradient' && (
          <GradientPlane />
        )}

        {variant === 'minimal' && (
          <AnimatedSphere position={[0, 0, -3]} color="#FF6B2C" speed={0.4} distort={0.3} />
        )}
      </Canvas>
    </div>
  );
};

export default AnimatedGradientMesh;
