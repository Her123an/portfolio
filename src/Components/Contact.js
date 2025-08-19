// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
        Contact Me
      </h2>

      {/* Direct Contact Info */}
      <div className="mb-8 space-y-2">
        <p className="text-white text-lg">
          📧 Email: <a href="mailto:herantsehaye6@gmail.com" className="text-blue-400 hover:underline">herantsehaye6@gmail.com</a>
        </p>
        <p className="text-white text-lg">
          📞 Phone: <a href="tel:+251912608767" className="text-blue-400 hover:underline">+251 912 608 767</a>
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/myzpverk" // <-- your Formspree endpoint
        method="POST"
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
