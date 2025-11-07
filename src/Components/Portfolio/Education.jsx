/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "K.S.Rangasamy College of Arts and Science",
      location: "Tiruchengode, Tamil Nadu",
      duration: "2023 - 2026",
      status: "Currently Pursuing",
      color: "from-purple-500 to-pink-500",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Ponnu Matriculation Higher Secondary School",
      location: "Dharapuram",
      duration: "2022 - 2023",
      percentage: "92.84%",
      color: "from-blue-500 to-cyan-500",
      icon: "📚",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Ponnu Matriculation Higher Secondary School",
      location: "Dharapuram",
      duration: "2020 - 2021",
      color: "from-green-500 to-emerald-500",
      icon: "📖",
    },
  ];

  return (
    <section id="education" ref={ref} className="py-32 px-6">
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
            Educational{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Journey
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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-green-500 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                  className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10 hidden md:block"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute inset-0 bg-purple-500 rounded-full"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}
                      >
                        {edu.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-lg text-purple-400 font-semibold mb-3">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      {edu.percentage && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-yellow-400 font-semibold">Percentage: {edu.percentage}</span>
                        </div>
                      )}
                      {edu.status && (
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-green-500" />
                          <span className="text-green-400 font-semibold">{edu.status}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
