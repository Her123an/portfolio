import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-blue-500 drop-shadow-lg">
          My Portfolio
        </h1>

        {/* Navigation */}
        <nav className="flex space-x-3 items-center bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
          <a
            href="#about"
            className="px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#project"
            className="px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Project
          </a>
          <a
            href="#skills"
            className="px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#whychooseme"
            className="px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Why Choose Me?
          </a>
          <a
            href="#contact"
            className="px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 ml-4">
            <a
              href="https://github.com/Her123an"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}