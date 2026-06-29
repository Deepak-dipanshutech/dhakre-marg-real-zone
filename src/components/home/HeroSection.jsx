import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center px-6 py-20 md:px-12 lg:px-20 font-sans">
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-white" />

      {/* Soft grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.25]
        [background-image:linear-gradient(to_right,#e9e1d3_1px,transparent_1px),linear-gradient(to_bottom,#e9e1d3_1px,transparent_1px)]
        [background-size:60px_60px]"
      />

      {/* Floating blur blobs (brand tints) */}
      <div className="absolute w-80 h-80 bg-gold/15 rounded-full blur-3xl top-[-100px] right-[-80px]" />
      <div className="absolute w-96 h-96 bg-brand/10 rounded-full blur-3xl bottom-[-120px] left-[-100px]" />
      <div className="absolute w-72 h-72 bg-gold/10 rounded-full blur-3xl top-[40%] left-[30%]" />

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10"
      >
        {/* LEFT */}
        <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[2px] w-10 bg-gold rounded-full" />
            <span className="eyebrow">Premium Real Estate · Greater Noida</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-ink leading-[1.12] mb-6 max-w-xl"
          >
            Let us help you find your{" "}
            <span className="text-brand">dream home</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-md"
          >
            Trusted guidance, transparent dealings and handpicked luxury
            properties across Greater Noida & the Yamuna Expressway.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRfdiOf-j24TtIlf0W3OPypPyC0jVb4XS5oq-P6B2AWuKfHqUNBbhXpL0r62vqdELp8AAdpJVske4Wj/pubhtml?gid=0&single=true"
              target="_blank"
              rel="noreferrer"
              className="btn-primary group"
            >
              <span>Home's List</span>
              <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <FiArrowUpRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-6 w-full flex items-center justify-center relative"
        >
          {/* Image glow frame */}
          <div className="absolute w-[520px] h-[520px] bg-gold/15 blur-3xl rounded-full" />

          <div className="relative w-full max-w-[550px] transition-transform duration-500 hover:scale-[1.02] z-10">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
              alt="Premium Real Estate House"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
