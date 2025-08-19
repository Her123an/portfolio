import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseMe() { // Capitalized function name
  const points = [
    "Proven experience in web design and development.",
    "Strong problem-solving and analytical skills.",
    "Passionate about delivering high-quality work.",
    "Excellent communication and teamwork abilities.",
    "Always eager to learn and adapt to new technologies.",
  ];

  return (
    <section id="whychooseme" className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-8">
        Why Choose Me?
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-300 text-center mb-6">
          I am dedicated to creating impactful and user-friendly solutions that
          meet your needs. Here’s why I’m the right choice for your project:
        </p>
        <ul className="space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-center space-x-3">
              <FaCheckCircle className="text-blue-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}