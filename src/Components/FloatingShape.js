// src/components/FloatingShape.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import FloatingSphere from "./FloatingSphere";

export default function FloatingShape() {
  return (
    <Canvas className="w-full h-96">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <FloatingSphere position={[-2, 0, 0]} color="#4F46E5" speed={1} amplitude={1} />
      <FloatingSphere position={[2, 1, -1]} color="#22D3EE" speed={0.8} amplitude={1.2} />
      <FloatingSphere position={[0, -1, 2]} color="#F43F5E" speed={1.2} amplitude={1} />
    </Canvas>
  );
}
