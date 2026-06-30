import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  TrendingUp,
  Users,
  ArrowBigDownDash,
} from "lucide-react";

const PropertyGuide = () => {
  const steps = [
    {
      id: "01",
      title: "1. Top Societies in Greater Noida",
      desc: "Discover premium living in the best residential communities with great amenities and strong investment value.",
      icon: <Home className="w-10 h-10 text-brand" />,
      color: "border-brand",
      bgColor: "bg-brand",
      position: "md:col-start-2 md:row-start-1",
    },
    {
      id: "02",
      title: "2. Noida Extension Property Rates",
      desc: "Get the latest market insights and find the best deals in one of the fastest-growing real estate locations.",
      icon: <Building2 className="w-10 h-10 text-gold-dark" />,
      color: "border-gold",
      bgColor: "bg-gold",
      position: "md:col-start-3 md:row-start-2",
    },
    {
      id: "03",
      title: "3. Smart Investment Guide 2026",
      desc: "Make better property decisions with expert tips on location, pricing, and future growth.",
      icon: <TrendingUp className="w-10 h-10 text-brand" />,
      color: "border-brand",
      bgColor: "bg-brand",
      position: "md:col-start-2 md:row-start-3",
    },
    {
      id: "04",
      title: "4. Expert Real Estate Consulting",
      desc: "Personalized guidance for choosing the right home or investment, backed by local market expertise.",
      icon: <Users className="w-10 h-10 text-gold-dark" />,
      color: "border-gold",
      bgColor: "bg-gold",
      position: "md:col-start-1 md:row-start-2",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-cream p-6 md:p-12 relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <rect
            x="50%"
            y="50%"
            width="400"
            height="400"
            transform="translate(-200,-200) rotate(45)"
            fill="none"
            stroke="#B4914A"
            strokeWidth="2"
          />
          <rect
            x="50%"
            y="50%"
            width="500"
            height="500"
            transform="translate(-250,-250) rotate(45)"
            fill="none"
            stroke="#B4914A"
            strokeWidth="1"
          />
        </svg>
      </div>

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 md:absolute md:top-20 md:left-20 max-w-sm"
      >
        <span className="eyebrow">Market Insights</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-serif font-black text-ink leading-tight">
          GREATER NOIDA & <br />
          NOIDA EXTENSION: <br />
          <span className="text-brand">YOUR PROPERTY GUIDE</span>
        </h1>
        <div className="h-1 w-20 bg-gold mt-4"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 items-center justify-items-center max-w-6xl mx-auto mt-16"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`relative bg-white p-8 rounded-2xl shadow-2xl border-b-8 ${step.color} ${step.position} w-full max-w-[320px] z-10 group`}
          >
            {/* number badge */}
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-right-6 md:left-auto w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white`}
            >
              {step.id}
            </div>

            <div className="flex justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
              {step.icon}
            </div>

            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-ink mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>

            <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-20 group-hover:opacity-100 transition-opacity">
              <ArrowBigDownDash className="w-8 h-8 text-gold" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-32 h-32 bg-gold rounded-full blur-3xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default PropertyGuide;
