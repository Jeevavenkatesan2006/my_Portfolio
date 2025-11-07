/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
   Instagram,
  X as XIcon,
} from "lucide-react";
import emailjs from "emailjs-com"; // use @emailjs/browser

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  // ---- Replace these IDs with your actual EmailJS IDs if different ----
  const SERVICE_ID = "service_351re5j";
  const TEMPLATE_ID = "template_3fk9gct";
  const PUBLIC_KEY = "BmSGc6rSev5Qvq0jI";
  // ----------------------------------------------------------------------

  useEffect(() => {
    // Initialize EmailJS once
    try {
      emailjs.init(PUBLIC_KEY);
      console.info("EmailJS initialized with public key");
    } catch (err) {
      console.error("EmailJS init failed:", err);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeevavenkatesan2006@gmail.com",
      link: "mailto:jeevavenkatesan2006@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
  icon: Instagram,
  label: "Instagram",
  value: "Follow me on Instagram",
  link: "https://www.instagram.com/jee_v_a006?igsh=MWc1MWM5czBudHczNQ==",
  color: "from-pink-500 to-purple-500",
},
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "http://www.linkedin.com/in/jeeva-v-212006bca",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      link: "https://github.com/Jeevavenkatesan2006/Jeeva-V",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    setIsSending(true);

    try {
      // sendForm uses the form element values (so keep name attributes in sync with template variables)
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );
      console.log("EmailJS result:", result);

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);

      // Provide more helpful error text if available
      const errText =
        (error && (error.text || error.message)) ||
        "Failed to send message. Please check console for details or try again later.";

      setStatus({ type: "error", message: errText });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 bg-slate-900/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
              animate={{ rotateX: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-4 text-lg"
          >
            Lets create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-slate-700/30 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl relative overflow-hidden">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-400">Tamil Nadu, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {/* Name */}
            <input
              type="text"
              name="from_name" // must match template variable
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />

            {/* Email */}
            <input
              type="email"
              name="from_email" // must match template variable
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30"
            />

            {/* Message */}
            <textarea
              name="message" // must match template variable
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/30 h-32"
            />

            {/* Status message */}
            {status && (
              <div
                className={`text-sm p-3 rounded ${
                  status.type === "success"
                    ? "bg-green-800 text-green-200"
                    : "bg-red-800 text-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full ${
                isSending ? "opacity-70 cursor-not-allowed" : ""
              } bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all`}
            >
              <Send className="w-5 h-5" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
