'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshWobbleMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const Chip = ({ accentColor }: { accentColor: string }) => {
    const meshRef = useRef<Mesh>(null!);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
            meshRef.current.rotation.x += 0.001;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <boxGeometry args={[3, 0.2, 3]} />
                <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
                {[...Array(10)].map((_, i) => (
                    <group key={i}>
                        <mesh position={[-1.6, -0.1, -1.35 + i * 0.3]}>
                            <boxGeometry args={[0.3, 0.1, 0.1]} />
                            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.8} />
                        </mesh>
                        <mesh position={[1.6, -0.1, -1.35 + i * 0.3]}>
                            <boxGeometry args={[0.3, 0.1, 0.1]} />
                            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.8} />
                        </mesh>
                    </group>
                ))}
                <mesh position={[0, 0.12, 0]}>
                    <boxGeometry args={[1.2, 0.1, 1.2]} />
                    <MeshWobbleMaterial factor={0.2} speed={1} color={accentColor} emissive={accentColor} emissiveIntensity={1.5} />
                </mesh>
            </mesh>
        </Float>
    );
};

export const Hero3D: React.FC = () => {
    const [accentColor, setAccentColor] = useState('#0ea5e9');

    useEffect(() => {
        const updateColor = () => {
            const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            if (color) setAccentColor(color);
        };

        updateColor();

        // Listen for style changes
        const observer = new MutationObserver(updateColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="h-full w-full">
            <Canvas gl={{ alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} color={accentColor} />
                <Chip accentColor={accentColor} />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};
