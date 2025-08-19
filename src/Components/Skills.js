import React from "react";

const skills = [
  "React", "Tailwind", "JavaScript", "CSS", "HTML",
  "Video Editing", "Social Media Management", "Sales"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-gray-200">
      <h3 className="text-3xl font-bold text-center mb-8 text-primary drop-shadow-md animate-fadeUp">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-accent text-primary rounded-full font-semibold transform hover:scale-110 transition duration-300 animate-fadeUp delay-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
