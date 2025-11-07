/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Code Developers",
      description:
        "A dynamic and interactive website showcasing modern web development capabilities. Features advanced animations and smooth transitions to create an engaging user experience.",
      tech: ["React JS", "Tailwind CSS", "Framer Motion"],
      gradient: "from-purple-500 to-pink-500",
      icon: "💻",
      highlights: ["Advanced Animations", "Responsive Design", "Modern UI/UX"],
      liveDemo: "https://jeeva-one.vercel.app/",
      github: "https://github.com/Jeevavenkatesan2006",
    },
    {
      title: "Portfolio",
      description:
        "Welcome to my portfolio! I am a passionate Front-End Developer with hands-on experience in building responsive, user-friendly, and visually appealing web applications.",
      tech: ["ReactJS", "TailwindCSS", "Gsap", "Framer-Motion"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🙋‍♂️",
      highlights: ["myself", "connect with social media", "Mail"],
      liveDemo: "https://jeeva-portfolio-beta.vercel.app/",
      github: "https://github.com/Jeevavenkatesan2006",
    },

    {
      title: "Tic Tac Toe Game",
      description:
        "Tic Tac Toe is a classic two-player strategy game played on a 3×3 grid. The goal is for each player to place their mark (either X or O) in empty cells to form a line of three — horizontally, vertically, or diagonally — before the opponent does.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🎮",
      highlights: ["Game Logic", "Winning Patterns", "Interactive UI"],
      liveDemo: "https://jeevavenkatesan.neocities.org/Tic-Tac-Toe%20Game/",
      github: "https://github.com/Jeevavenkatesan2006",
    },
    {
      title: "Music Player",
      description:
        "A music player is a device or application that plays digital audio files, like MP3s.Key features often include playing various audio formats, managing music libraries by artist, album, or genre, creating playlists",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🎧",
      highlights: ["Listen Music", "Imagine", "Our Life"],
      liveDemo: "https://jeeva-music-player.vercel.app/",
      github: "https://github.com/Jeevavenkatesan2006",
    },
    {
      title: "Grocery List Manager",
      description:
        "A practical web application for managing grocery lists efficiently. Built with foundational web technologies to demonstrate clean code principles and user-friendly interfaces.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🛒",
      highlights: ["CRUD Operations", "Local Storage", "Clean Interface"],
      liveDemo:
        "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wNGYzMzY3MmUzZTRjZjhjL0VWcG1wQ0VmZWRsSHFIUzRPRW12WElzQk1XZ1RaMXlTUHhKeUZ1YTV5SDdLOGc%5FZT00OlRwOG9RRCZzaGFyaW5ndjI9dHJ1ZSZmcm9tU2hhcmU9dHJ1ZSZhdD05&cid=04F33672E3E4CF8C&id=4F33672E3E4CF8C%21s21a4665a791f47d9a874b83849af5c8b&parId=4F33672E3E4CF8C%21s523385892256499596168a6240eeb6b3&o=OneUp",
      github: "https://github.com/Jeevavenkatesan2006",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
                className="h-full"
              >
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    animate={{
                      y: hoveredIndex === index ? -10 : 0,
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 right-6 text-5xl z-10"
                  >
                    {project.icon}
                  </motion.div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}
                      >
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-purple-300"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium flex items-center justify-center gap-2`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 bg-slate-700/50 border border-purple-500/30 text-purple-300 rounded-lg font-medium flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: hoveredIndex === index ? ["0%", "200%"] : "0%",
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
