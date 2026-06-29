import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-cream via-white to-cream text-ink overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(180,145,74,0.15),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-ink"
        >
          Contact <span className="text-brand">Us</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* LEFT: Contact Info */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-soft border border-cream-dark hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-serif font-semibold mb-6 text-ink">
              Get In Touch
            </h3>

            <div className="space-y-5 text-lg">
              <a
                href="tel:+916395955148"
                className="flex items-center gap-3 hover:text-brand transition"
              >
                <FaPhoneAlt className="text-gold" />
                <span className="font-medium">+91 63959 55148</span>
              </a>

              <a
                href="mailto:dhakremargrealzone@gmail.com"
                className="flex items-center gap-3 hover:text-brand transition"
              >
                <FaEnvelope className="text-gold" />
                <span className="font-medium">dhakremargrealzone@gmail.com</span>
              </a>
            </div>

            <p className="mt-6 text-ink-soft">
              We are here to help you with your real estate needs. Feel free to
              contact us anytime.
            </p>
          </motion.div>

          {/* RIGHT: Services */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-soft border border-cream-dark hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-serif font-semibold mb-6 text-ink">
              Services Available
            </h3>

            <ul className="space-y-3 text-lg">
              {[
                "Residential Plots",
                "Flats & Apartments",
                "Independent Houses",
                "Builder Floors",
                "Villas",
                "Resale Properties",
                "Investment Consultation",
                "Interior Solutions Design",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 text-ink-soft hover:translate-x-2 transition-transform"
                >
                  <FaCheckCircle className="text-gold" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
