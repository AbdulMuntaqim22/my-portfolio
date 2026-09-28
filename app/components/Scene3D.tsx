"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function DriftField() {
  const groupRef = useRef<Group>(null);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.15;
      groupRef.current.rotation.y = t * 0.18;
    }

    camera.position.x = Math.sin(t * 0.45) * 0.7;
    camera.position.y = Math.cos(t * 0.5) * 0.45;
    camera.position.z = 5.1;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh rotation={[0.9, 0.5, 0]}>
          <torusGeometry args={[1.8, 0.04, 16, 180]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#22d3ee" emissiveIntensity={0.7} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh rotation={[1.2, 0.7, 0.6]} position={[0.35, -0.2, -0.9]}>
          <icosahedronGeometry args={[0.7, 1]} />
          <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 3, 3]} intensity={2} color="#dbeafe" />
        <pointLight position={[-2, 1, 2]} intensity={12} color="#22d3ee" />
        <pointLight position={[2, -1, 2]} intensity={10} color="#a855f7" />

        <DriftField />
        <Stars radius={28} depth={18} count={1600} factor={3.2} saturation={0} fade speed={0.8} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
