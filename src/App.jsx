/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";


import Hero from "./Components/Portfolio/Hero";
import About from "./Components/Portfolio/About";
import Skills from "./Components/Portfolio/Skills";
import Experience from "./Components/Portfolio/Experience";
import Projects from "./Components/Portfolio/Projects";
import Education from "./Components/Portfolio/Education";
import Contact from "./Components/Portfolio/Contact";
import Navigation from "./Components/Portfolio/Navigation";
import ResumeDownload from "./Components/Portfolio/ResumeDownload";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="fixed w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />
      <motion.div
        className="fixed top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Navigation />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>
    </div>
  );
}
