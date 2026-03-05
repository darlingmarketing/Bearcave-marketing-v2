"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

// ── Gravity Ripple Grid ────────────────────────────────────────────────────

function GravityGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const GRID = 40;
  const SPACING = 0.55;

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      GRID * SPACING,
      GRID * SPACING,
      GRID - 1,
      GRID - 1
    );
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [size]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    const mx = mouse.current.x * (GRID * SPACING * 0.5);
    const mz = -mouse.current.y * (GRID * SPACING * 0.5);

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const dxMouse = x - mx;
      const dzMouse = z - mz;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dzMouse * dzMouse);
      const rippleMouse = Math.exp(-distMouse * 0.18) * Math.sin(distMouse * 0.6 - t * 3.5) * 0.9;
      const wave = Math.sin(x * 0.5 + t * 0.8) * 0.08 + Math.cos(z * 0.5 + t * 0.6) * 0.06;
      positions.setY(i, rippleMouse + wave);
    }
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -2.5, 0]}>
      <meshBasicMaterial
        color="#00F2FF"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

// ── Floating Glass Geometry ────────────────────────────────────────────────

function FloatingAsset() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Base rotation + subtle mouse influence
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, t * 0.15 + mouse.current.x * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, Math.sin(t * 0.2) * 0.1 + -mouse.current.y * 0.3, 0.05);
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.z = -t * 0.4;
      coreRef.current.scale.setScalar(0.4 + Math.sin(t * 2) * 0.02);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Elite Refractive Layer — Neural Hub */}
        <mesh>
          <icosahedronGeometry args={[1.2, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={16} // Higher quality
            resolution={512}
            transmission={0.98}
            roughness={0.02}
            thickness={1.2}
            ior={1.5}
            chromaticAberration={0.15}
            anisotropy={0.3}
            distortion={0.2}
            color="#ffffff"
          />
        </mesh>

        {/* Crystalline Core */}
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#00F2FF"
            emissive="#00F2FF"
            emissiveIntensity={4}
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Data Rings (Multiple for complexity) */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.005, 16, 128]} />
          <meshBasicMaterial color="#FFA500" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.0, 0.003, 16, 128]} />
          <meshBasicMaterial color="#00F2FF" transparent opacity={0.15} />
        </mesh>

        {/* Glow Halo */}
        <pointLight intensity={2} distance={3} color="#00F2FF" />
      </group>
    </Float>
  );
}

// ── Particle Field ─────────────────────────────────────────────────────────

const COUNT = 180;
const PARTICLE_POSITIONS = (() => {
  const arr = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 22;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4;
  }
  return arr;
})();

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#00F2FF"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

// ── Scene ──────────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 4, 2]} intensity={1.8} color="#00F2FF" />
      <pointLight position={[-4, -2, -4]} intensity={0.6} color="#0044ff" />
      <Environment preset="night" />
      <GravityGrid />
      <FloatingAsset />
      <ParticleField />
    </>
  );
}

// ── Export ─────────────────────────────────────────────────────────────────

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
