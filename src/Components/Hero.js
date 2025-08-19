// src/components/Hero.js
import React from "react";
import FloatingShape from "./FloatingShape"; // your 3D spheres

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #1e40af)", // black/navy/blue gradient
      }}
    >
      {/* Optional subtle background pattern or image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/background-pattern.png')", // optional
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 3D floating spheres */}
      <FloatingShape />

      {/* Hero Text */}
      <h1 className="relative text-5xl md:text-7xl font-bold text-white mb-4">
        I’m <span className="text-blue-400">Heran Bereket</span>
      </h1>
      <p className="relative text-lg md:text-2xl text-gray-300 mb-6">
        Web Designer, Video Editor, Social Media Manager, Reseller
      </p>

      <a
        href="#contact"
        className="relative bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Contact Me
      </a>
    </section>
  );
}
