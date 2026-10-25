
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // Replace these with the exact IDs from your EmailJS dashboard.
  const SERVICE_ID = "service_0upia3t";
  const TEMPLATE_ID = "template_3fk9gct";
  const PUBLIC_KEY = "geaqB5eE_-AOn0W73";

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
      link: "https://www.instagram.com/jee_v_a006/",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/jeeva-v-212006bca",
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setStatus(null);

    if (
      !formData.name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS success:", result.status, result.text);

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        from_email: "",
        message: "",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Unable to send message. Please check your EmailJS settings.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses =
    "contact-input block w-full box-border rounded-lg border border-purple-500/30 bg-slate-700 px-4 py-3 text-white placeholder-gray-400 opacity-100 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-900/30 px-6 py-32"
    >
      <style>{`
        #contact .contact-input {
          pointer-events: auto !important;
          user-select: text !important;
          -webkit-user-select: text !important;
          cursor: text;
          position: relative;
          z-index: 1;
        }

        #contact .contact-input:disabled {
          cursor: not-allowed;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

          <p className="mt-4 text-lg text-gray-400">
            Lets create something amazing together!
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={
                    info.label === "Email" ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 rounded-xl border border-purple-500/20 bg-slate-700/30 p-4 transition-all hover:border-purple-500/50"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${info.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">
                      {info.label}
                    </p>
                    <p className="break-words font-medium text-white">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <div className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-purple-400" />

                <div>
                  <p className="mb-1 font-semibold text-white">
                    Location
                  </p>
                  <p className="text-gray-400">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editable contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 space-y-6 rounded-2xl border border-purple-500/20 bg-slate-800/80 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className={inputClasses}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              autoComplete="email"
              required
              className={inputClasses}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} resize-y`}
            />

            <input
              type="hidden"
              name="title"
              value="Portfolio Contact Form"
              readOnly
            />

            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-lg p-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-800 text-green-100"
                    : "bg-red-800 text-red-100"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-5 w-5" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
