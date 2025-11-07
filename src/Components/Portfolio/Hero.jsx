/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  // Curtain animation variants
  const curtainReveal = {
    hidden: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold relative overflow-hidden"
          >
            {/* "Hi, I'm" curtain reveal */}
            <motion.span
              variants={curtainReveal}
              initial="hidden"
              animate="visible"
              className="block text-white mb-2"
            >
              Hi, I’m
            </motion.span>

            {/* "JEEVA V" curtain reveal with gradient */}
            <motion.span
              variants={curtainReveal}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.4,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              JEEVA V
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-300 font-light"
          >
            Front-End Web Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive, and interactive web experiences with React, Tailwind CSS, and modern animation libraries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 rounded-full font-semibold text-lg hover:bg-purple-500/10"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.7, duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
