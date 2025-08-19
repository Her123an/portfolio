// src/components/FloatingSphere.js
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({ position, color, speed = 1, amplitude = 1 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [x0, y0, z0] = position;

  // Random phase offsets for unique motion
  const offsetX = Math.random() * 2 * Math.PI;
  const offsetY = Math.random() * 2 * Math.PI;
  const offsetZ = Math.random() * 2 * Math.PI;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    if (meshRef.current) {
      // Smooth rotations
      meshRef.current.rotation.x = t * 0.3 + offsetX;
      meshRef.current.rotation.y = t * 0.5 + offsetY;

      // Organic floating motion
      meshRef.current.position.x = x0 + Math.sin(t + offsetX) * amplitude * 0.6;
      meshRef.current.position.y =
        y0 +
        Math.sin(t + offsetY) * amplitude +
        Math.sin(t * 0.5 + offsetY) * amplitude * 0.3;
      meshRef.current.position.z = z0 + Math.sin(t * 0.8 + offsetZ) * amplitude * 0.5;

      // Glow / color shift when hovered
      const baseColor = new THREE.Color(color);
      const hoverColor = new THREE.Color("#FFFFAA"); // light yellow glow
      meshRef.current.material.color.lerp(hovered ? hoverColor : baseColor, 0.1);
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[1, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={color} />
    </Sphere>
  );
}

export default FloatingSphere;
