/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Zap, Award } from "lucide-react";

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    
    { icon: Zap, label: "Projects Completed", value: "4+", color: "from-blue-500 to-cyan-500" },

    { icon: Award, label: "Achievement", value: "92.84%", color: "from-orange-500 to-red-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }
    },
  };

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border-2 border-purple-500/10 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <motion.span
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mx-auto rounded-full"
            style={{ backgroundSize: "200% 200%" }}
          >
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text with stagger animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            {[
              "I'm an emerging Front-End Web Developer currently pursuing my Bachelor of Computer Applications at K.S.Rangasamy College of Arts and Science in Tamil Nadu.",
              "With a strong foundation in React JS, HTML, CSS, and Tailwind CSS, I specialize in creating dynamic, responsive, and visually stunning web applications. I'm passionate about bringing designs to life with smooth animations using Framer-Motion and creating engaging user experiences.",
              "I completed an internship at KSquare where I worked on responsive web design implementation, and I love coordinating tech events and symposiums at my college."
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-0 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                  animate={isInView ? { height: "100%" } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                />
                <p className="text-gray-300 text-lg leading-relaxed pl-2">
                  {text.split(/(React JS|HTML|CSS|Tailwind CSS|Framer-Motion|KSquare)/).map((part, i) => {
                    const highlights = {
                      "React JS": "text-purple-400",
                      "HTML": "text-pink-400",
                      "CSS": "text-blue-400",
                      "Tailwind CSS": "text-cyan-400",
                      "Framer-Motion": "text-pink-400",
                      "KSquare": "text-purple-400"
                    };
                    return highlights[part] ? (
                      <motion.span
                        key={i}
                        className={`${highlights[part]} font-semibold`}
                        whileHover={{ scale: 1.1, display: "inline-block" }}
                      >
                        {part}
                      </motion.span>
                    ) : part;
                  })}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Grid with enhanced animations */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                />
                <motion.div
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center overflow-hidden"
                  whileHover={{
                    borderColor: "rgba(168, 85, 247, 0.5)",
                  }}
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", bounce: 0.6 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-2xl font-bold text-white mb-6 text-center relative z-10"
          >
            Soft Skills
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-wrap justify-center gap-4 relative z-10"
          >
            {["Team Leadership", "Creativity", "Time Management", "Event Coordination", "Public Speaking"].map((skill, index) => (
              <motion.div
                key={skill}
                variants={item}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-50"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative px-6 py-3 bg-slate-800/50 border border-purple-500/30 rounded-full text-purple-300 font-medium backdrop-blur-sm">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text"
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {skill}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}