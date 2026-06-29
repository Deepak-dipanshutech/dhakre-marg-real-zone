import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cards = [
  {
    title: "Drawing Room Setup",
    desc: "Elegant and modern living room interiors.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modular Kitchen",
    desc: "Smart and space-saving kitchen design.",
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bedroom Interiors",
    desc: "Luxury comfort-focused bedroom styling.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "False Ceiling & Lighting",
    desc: "Modern ceiling with ambient lighting.",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
  },
];

export default function InteriorSection() {
  return (
    <section className="bg-cream-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Design & Build</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-semibold text-ink">
            Interior <span className="text-brand">Solutions</span>
          </h2>

          <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
            We design luxury interiors with modern aesthetics and smart
            planning.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SERVICES LIST */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 bg-white p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-serif font-semibold mb-6 text-ink">
            Complete Interior Services Include:
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-ink-soft">
            {[
              "Drawing room setup",
              "Modular kitchen",
              "Bedroom interiors",
              "False ceiling",
              "Wall textures",
              "Lighting design",
              "Furniture planning",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-gold">✔</span> {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
