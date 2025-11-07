/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFramer } from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="w-14 h-14 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-14 h-14 text-blue-500" /> },
    { name: "React JS", icon: <FaReact className="w-14 h-14 text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-14 h-14 text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-14 h-14 text-yellow-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="w-14 h-14 text-purple-400" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 px-6 bg-slate-900/30 backdrop-blur-lg border-b border-purple-700/20 shadow-lg shadow-purple-900/10 "
          
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              variants={item}
            >
              <motion.div
                className="p-6 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-5 shadow-lg shadow-purple-800/50 text-white"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
