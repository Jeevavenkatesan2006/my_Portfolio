/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = {
    title: "Front-End Developer Intern",
    company: "KSquare",
    duration: "1 Month",
    location: "Remote",
    description:
      "Completed a one-month intensive internship focusing on Front-End Development. Assisted senior developers with responsive web design implementation and contributed to real-world projects.",
    achievements: [
      "Collaborated with senior developers on responsive design implementation",
      "Worked on multiple client projects using modern web technologies",
      "Learned industry best practices for clean and maintainable code",
      "Gained hands-on experience with version control and team workflows",
    ],
  };

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
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
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-12"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-purple-500 rounded-full"
              />
            </motion.div>

            <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-xl text-purple-400 font-semibold mb-3">{experience.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Notable Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Notable Achievement</h3>
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-2">
              Presented research paper on <span className="text-cyan-400 font-semibold">'IOT Things - IOT Basic'</span>
            </p>
            <p className="text-gray-400">
              SNR College, Coimbatore • August 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
