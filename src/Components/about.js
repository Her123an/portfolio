// src/components/AboutMe.js
import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 py-16"
    >
      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/photo_2025-08-15_10-28-25.jpg" // your uploaded photo in public folder
          alt="Heran Bereket"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="mt-8 md:mt-0 md:ml-12 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I’m <span className="text-blue-400 font-semibold">Heran Bereket</span>,
          a passionate Web Designer, Video Editor, Social Media Manager, and
          Reseller. I love creating modern, functional, and visually appealing
          designs that help brands stand out online.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
          {["Web Design", "Video Editing", "Social Media", "Reselling"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full border border-blue-500 text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* CV Button */}
        <a
          href="https://pdf.ac/3boQO9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg text-white transition"
        >
          View CV
        </a>
      </motion.div>
    </section>
  );
}
