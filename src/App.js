import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/about";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import WhyChooseMe from "./Components/WhyChooseMe";
import Contact from "./Components/Contact"; // Import the Contact component
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-sans text-white bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WhyChooseMe />
      <Contact /> {/* Use the Contact component */}
      <Footer />
    </div>
  );
}

export default App;