import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiFramer,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    category: "Markup Language",
    icon: FaHtml5,
    color: "#f97316",
    glow: "rgba(249, 115, 22, 0.3)",
  },
  {
    name: "CSS3",
    category: "Styling & Layout",
    icon: FaCss3Alt,
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    name: "React JS",
    category: "Frontend Library",
    icon: FaReact,
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.3)",
  },
  {
    name: "Tailwind CSS",
    category: "Utility-First CSS",
    icon: SiTailwindcss,
    color: "#2dd4bf",
    glow: "rgba(45, 212, 191, 0.3)",
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: SiJavascript,
    color: "#facc15",
    glow: "rgba(250, 204, 21, 0.3)",
  },
  {
    name: "Framer Motion",
    category: "Animation Library",
    icon: SiFramer,
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.3)",
  },
];

const particles = [
  { left: "8%", top: "18%", delay: 0 },
  { left: "23%", top: "72%", delay: 1 },
  { left: "42%", top: "12%", delay: 0.5 },
  { left: "61%", top: "82%", delay: 1.5 },
  { left: "79%", top: "23%", delay: 0.8 },
  { left: "92%", top: "61%", delay: 1.2 },
  { left: "49%", top: "48%", delay: 2 },
  { left: "15%", top: "48%", delay: 0.7 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  const shouldReduceMotion = useReducedMotion();

  const infiniteTransition = (duration, delay = 0) => ({
    duration,
    delay,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-y border-white/[0.07] bg-[#050510] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Animated aurora background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        animate={
          shouldReduceMotion
            ? {}
            : {
                background: [
                  "radial-gradient(ellipse at 10% 20%, rgba(124,58,237,0.24), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(6,182,212,0.17), transparent 50%)",
                  "radial-gradient(ellipse at 80% 15%, rgba(217,70,239,0.22), transparent 50%), radial-gradient(ellipse at 20% 85%, rgba(59,130,246,0.20), transparent 50%)",
                  "radial-gradient(ellipse at 45% 75%, rgba(16,185,129,0.15), transparent 50%), radial-gradient(ellipse at 75% 25%, rgba(124,58,237,0.23), transparent 50%)",
                ],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Moving purple light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-purple-600/25 blur-[110px] sm:h-96 sm:w-96"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 100, 40, 0],
                y: [0, 70, 140, 0],
                scale: [1, 1.25, 0.9, 1],
                opacity: [0.35, 0.7, 0.4, 0.35],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving cyan light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -100, -40, 0],
                y: [0, 90, -80, 0],
                scale: [1, 0.8, 1.3, 1],
                opacity: [0.3, 0.7, 0.4, 0.3],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving pink light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[110px]"
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 120, -80, 0],
                y: [0, -70, -20, 0],
                opacity: [0.2, 0.55, 0.3, 0.2],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating background particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-purple-200/70"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -25, 0],
                    x: [0, 12, -8, 0],
                    opacity: [0.15, 0.8, 0.2],
                    scale: [1, 1.5, 0.8],
                  }
            }
            transition={{
              ...infiniteTransition(4 + index * 0.4),
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 30 }
          }
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 backdrop-blur-xl">
            <motion.span
              className="h-2 w-2 rounded-full bg-cyan-400"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.2, 0.8],
                    }
              }
              transition={infiniteTransition(2)}
            />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-200 sm:text-sm">
              My Technical Arsenal
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      backgroundPosition: [
                        "0% 50%",
                        "100% 50%",
                        "0% 50%",
                      ],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Skills
            </motion.span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400"
          />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Technologies and tools I use to create modern,
            responsive, and interactive web experiences.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.article
                key={skill.name}
                variants={cardVariants}
                onMouseMove={(event) => {
                  const rect =
                    event.currentTarget.getBoundingClientRect();

                  event.currentTarget.style.setProperty(
                    "--mouse-x",
                    `${event.clientX - rect.left}px`
                  );

                  event.currentTarget.style.setProperty(
                    "--mouse-y",
                    `${event.clientY - rect.top}px`
                  );

                  setHoveredSkill(skill.name);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                onFocus={() => setHoveredSkill(skill.name)}
                onBlur={() => setHoveredSkill(null)}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -10,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        },
                      }
                }
                className="group relative isolate rounded-2xl p-px"
                style={{
                  "--skill-color": skill.color,
                  "--skill-glow": skill.glow,
                }}
              >
                {/* Animated gradient border */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/70 via-fuchsia-400/30 to-cyan-400/70"
                  style={{ backgroundSize: "200% 200%" }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          backgroundPosition: [
                            "0% 0%",
                            "100% 100%",
                            "0% 0%",
                          ],
                        }
                  }
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Card surface */}
                <div className="relative flex h-full min-h-[260px] flex-col items-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#090919]/95 p-7 text-center shadow-lg shadow-black/30 backdrop-blur-2xl transition-colors duration-500 group-hover:bg-[#111126]/95 sm:p-8">
                  {/* Cursor-following spotlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168,85,247,0.22), transparent 70%)",
                    }}
                  />

                  {/* Animated skill-colored glow */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-[65px]"
                    style={{ backgroundColor: skill.glow }}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: [0.8, 1.25, 0.8],
                            opacity: [0.2, 0.65, 0.2],
                          }
                    }
                    transition={infiniteTransition(5 + index * 0.5)}
                  />

                  {/* Bottom colored light */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -left-12 h-36 w-36 rounded-full blur-[60px]"
                    style={{ backgroundColor: skill.glow }}
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: [0, 25, 0],
                            opacity: [0.1, 0.4, 0.1],
                          }
                    }
                    transition={infiniteTransition(6 + index * 0.4)}
                  />

                  {/* Corner indicator */}
                  <span
                    className="absolute right-5 top-5 z-20 h-2 w-2 rounded-full transition duration-500 group-hover:scale-150"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}`,
                    }}
                  />

                  {/* Floating icon */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : { y: [0, -5, 0] }
                    }
                    transition={{
                      ...infiniteTransition(3 + index * 0.3),
                      delay: index * 0.15,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { rotate: 8, scale: 1.1 }
                    }
                    className="relative z-20 mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/[0.08]"
                  >
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl"
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              boxShadow: [
                                `0 0 0px ${skill.glow}`,
                                `0 0 25px ${skill.glow}`,
                                `0 0 0px ${skill.glow}`,
                              ],
                            }
                      }
                      transition={infiniteTransition(4 + index * 0.4)}
                    />

                    <Icon
                      aria-hidden="true"
                      className="relative z-10 h-10 w-10 transition-all duration-500 group-hover:scale-125"
                      style={{
                        color: skill.color,
                        filter: isHovered
                          ? `drop-shadow(0 0 12px ${skill.color})`
                          : `drop-shadow(0 0 5px ${skill.glow})`,
                      }}
                    />
                  </motion.div>

                  {/* Skill name */}
                  <h3 className="relative z-20 text-xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-purple-200 sm:text-2xl">
                    {skill.name}
                  </h3>

                  <p className="relative z-20 mt-2 text-sm text-slate-400 transition-colors duration-500 group-hover:text-slate-200">
                    {skill.category}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    aria-hidden="true"
                    className="relative z-20 mt-auto h-px bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            width: ["30px", "55px", "30px"],
                            opacity: [0.4, 1, 0.4],
                          }
                    }
                    transition={infiniteTransition(4 + index * 0.3)}
                    style={{ marginTop: 28 }}
                  />

                  {/* Hover border light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-300 to-cyan-300 transition-all duration-500 group-hover:w-4/5"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing text */}
        <motion.p
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 15 }
          }
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center text-sm tracking-wide text-slate-500 sm:mt-16"
        >
          Always learning. Always building. Always improving.
        </motion.p>
      </div>
    </section>
  );
}