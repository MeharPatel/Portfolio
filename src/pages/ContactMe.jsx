import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact } from "lucide-react";
// import { Button } from "./components/ui/button";

const ContactMe = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      setStatus(result.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message!");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Glassmorphic background */}
      <motion.div
        className="absolute inset-0 glass float"
        style={{
          background: `linear-gradient(45deg, var(--primary), var(--accent))`,
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <motion.div
          className="max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-[var(--primary)]"
            variants={itemVariants}
          >
            Let’s Talk: No *Buggy* Replies!
          </motion.h1>
          <motion.p
            className="text-lg text-center mb-8 text-[rgba(31,41,55,0.8)] dark:text-[rgba(243,244,246,0.8)]"
            variants={itemVariants}
          >
            Drop me a line, and I’ll *catch* it faster than a JavaScript Promise!
          </motion.p>

          {/* Contact form */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-[var(--primary)]/[0.3] bg-background/80 glass text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-[var(--primary)]/[0.3] bg-background/80 glass text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-md border border-[var(--primary)]/[0.3] bg-background/80 glass text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-[var(--primary)]/[0.9] text-white py-3 rounded-md text-lg"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-[var(--primary)]">{status}</p>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <a
              href="https://linkedin.com"
              className="text-[var(--primary)] hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="text-[var(--primary)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              className="text-[var(--primary)] hover:text-[var(--accent)]"
            >
              Twitter
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;