// NeuralMonolith component – high‑fidelity centerpiece
"use client";

import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function NeuralMonolith() {
    const groupRef = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Mesh>(null);
    const mouse = useRef({ x: 0, y: 0 });

    // Mouse movement influences rotation
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
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                t * 0.15 + mouse.current.x * 0.3,
                0.05
            );
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                Math.sin(t * 0.2) * 0.1 - mouse.current.y * 0.3,
                0.05
            );
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
                        samples={16}
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
