// frontend/front/src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser"

// Mock useToast hook (replace with your implementation)
const useToast = () => {
  const toast = ({ title, description }) => {
    alert(`${title}: ${description}`); // Fallback for testing
  };
  return { toast };
};

const ContactMe = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ref for the contact section
  const form = useRef(null);
  const contact = useRef(null);
  // Detect when section is in view
  const isInView = useInView(contact, {
    once: true, // Animate only once
    amount: 0.2, // Trigger when 20% is visible
    margin: "0px 0px -50px 0px", // Trigger 50px before bottom
  });

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log(form.current);

    emailjs.sendForm(
      'service_ldnh2zi',
      'template_h2zjyl9',
      form.current,
      {publicKey : 'ypdF_nQp6-K3poURx',}
    )
    .then(() => {
      setIsSubmitting(false)
      form.current.reset()
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    }).catch((err) => {
      toast({
        title: "Message not sent!",
        description: "Some Error Occurred. Please Try again." + err,
      });
      console.log(err)
    })
    setIsSubmitting(false)

  }

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for decorative elements
  const decorVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-[var(--background)] to-[rgba(168,85,247,0.1)] relative"
      ref={contact}
    >
      <motion.div
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Let’s{" "}
              <span className="connect-title">
                Connect
              </span>
            </motion.h2>

            <motion.p
              className="mb-8"
              variants={itemVariants}
            >
              Let’s connect and make some *purple pixel* magic! Reach out via the
              form or my socials below.
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={itemVariants}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--primary)]/10 rounded-full">
                  <Mail className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <a
                  href="mailto:hello@example.com"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors interactive"
                >
                  hello@example.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--primary)]/10 rounded-full">
                  <Github className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors interactive"
                >
                  github.com/username
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--primary)]/10 rounded-full">
                  <Linkedin className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors interactive"
                >
                  linkedin.com/in/username
                </a>
              </div>
            </motion.div>

            <motion.div
              className="p-5 border border-[rgba(168,85,247,0.2)] rounded-lg bg-gray-100/20 dark:bg-slate-800/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">
                Current Status
              </h3>
              <p className="text-[rgba(31,41,55,0.7)] dark:text-[rgba(243,244,246,0.7)] mb-3">
                Available for freelance projects and full-time positions.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-[rgba(31,41,55,0.7)] dark:text-[rgba(243,244,246,0.7)]">
                  Response time: within 24 hours
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="relative" variants={itemVariants}>
            <form ref={form}
              onSubmit={sendEmail}
              className="p-6 md:p-8 border border-[rgba(168,85,247,0.2)] rounded-lg backdrop-blur-sm relative z-10 bg-gray-100/10 dark:bg-slate-800/10"
            >
              <div className="mb-6">
                <label
                  htmlFor="to_name"
                  className="block mb-2 text-sm font-medium text-[var(--foreground)]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="to_name"
                  placeholder="Enter Your Name"
                  required
                  className="bg-gray-100/50 dark:bg-slate-800/50 border-[rgba(168,85,247,0.2)] text-[var(--foreground)]"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="to_email"
                  className="block mb-2 text-sm font-medium text-[var(--foreground)]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="to_email"
                  placeholder="Enter Your email id"
                  required
                  className="bg-gray-100/50 dark:bg-slate-800/50 border-[rgba(168,85,247,0.2)] text-[var(--foreground)]"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-[var(--foreground)]"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="contact-textarea"
                />
              </div>

              <button
                type="submit"
                className="send_email focus:outline-black text-sm py-2.5 px-8 rounded w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-r-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Decorative elements */}
            <motion.div
              className="absolute -z-10 top-10 right-10 w-40 h-40 bg-[var(--primary)]/20 rounded-full blur-3xl"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={decorVariants}
            />
            <motion.div
              className="absolute -z-10 -bottom-5 -left-5 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={decorVariants}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;