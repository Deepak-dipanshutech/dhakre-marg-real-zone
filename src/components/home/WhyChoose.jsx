import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaFileAlt,
  FaHandshake,
  FaSearchLocation,
  FaSyncAlt,
  FaGlobeAsia,
  FaHeadset,
} from "react-icons/fa";

const whyChooseData = [
  { icon: FaCheckCircle, text: "Verified Properties" },
  { icon: FaMoneyBillWave, text: "Best Investment Deals" },
  { icon: FaFileAlt, text: "Transparent Documentation" },
  { icon: FaHandshake, text: "Loan Assistance" },
  { icon: FaSearchLocation, text: "Site Visits" },
  { icon: FaSyncAlt, text: "Resale Expert" },
  { icon: FaGlobeAsia, text: "Trusted Local Knowledge" },
  { icon: FaHeadset, text: "Full Property Support" },
];

export default function WhyChoose({ heroImg }) {
  return (
    <section className="relative w-full overflow-hidden py-24 px-6 md:px-12">
      {/* BACKGROUND */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY — dark brand gradient for premium contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/88 to-brand-dark/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Why Choose{" "}
            <span className="text-gold">Dhakre Marg Real Zone?</span>
          </h2>

          <p className="text-lg text-white/70 mt-5 italic">
            "Your Trusted Partner in Property Solutions"
          </p>

          <div className="mx-auto mt-6 h-[3px] w-20 bg-gold rounded-full" />
        </motion.div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChooseData.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group flex flex-col items-center text-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-2xl group-hover:bg-gold group-hover:text-ink transition-colors duration-300">
                  <Icon />
                </div>

                <p className="text-base font-semibold text-white leading-snug">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
