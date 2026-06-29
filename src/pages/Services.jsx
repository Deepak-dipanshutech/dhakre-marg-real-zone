import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBuilding,
  FaCity,
  FaHome,
} from "react-icons/fa";

import heroImg from "../assets/services/servicehero1.png";
import servicesData from "../components/data/servicesData";
import Reveal from "../components/ui/Reveal";
import WhyChoose from "../components/home/WhyChoose";
import ContactSection from "../components/home/ContactSection";
import InteriorSection from "../components/home/InteriorSection";

const categories = [
  { icon: FaMapMarkerAlt, label: "Residential Plots" },
  { icon: FaBuilding, label: "Premium Flats" },
  { icon: FaHome, label: "Independent Houses" },
  { icon: FaCity, label: "Builder Floors" },
  { icon: FaHome, label: "Luxury Villas" },
  { icon: FaBuilding, label: "Commercial Properties" },
  { icon: FaHome, label: "Resale Properties" },
  { icon: FaBuilding, label: "Rental Properties" },
];

export default function Services() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Real Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-brand-dark/50"></div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-gold uppercase tracking-[4px] text-sm font-semibold">
              Our Real Estate Solutions
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Complete Property Solutions, Done Right.
            </h1>

            <p className="mt-6 text-white/80 text-lg leading-8 max-w-2xl">
              At <strong className="text-gold">Dhakre Marg Real Zone</strong>, we
              provide complete property solutions in Greater Noida, Noida
              Extension, and Yamuna Expressway with expert guidance, transparent
              dealings, and personalized real estate services.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <Link
                to="/contact"
                className="btn-gold"
              >
                Explore Our Services
                <FaArrowRight />
              </Link>

              <Link
                to="/properties"
                className="btn-outline-light"
              >
                Browse Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <span className="eyebrow">We Deal In</span>

              <h2 className="mt-5 text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
                Find, Buy, Invest & Live Better With Our Expert Solutions
              </h2>

              <p className="mt-8 text-ink-soft leading-8 text-lg">
                Whether you're buying your dream home, investing in premium
                plots, or searching for commercial opportunities, our team
                delivers end-to-end real estate solutions tailored to your
                lifestyle and investment goals.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="bg-cream rounded-3xl p-10 shadow-soft border border-cream-dark">
              <h3 className="text-2xl font-serif font-bold text-brand mb-8">
                Property Categories
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {categories.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="text-gold text-xl shrink-0" />
                    <span className="text-ink-soft">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[2px] w-10 bg-gold rounded-full" />
              <span className="eyebrow">What We Offer</span>
              <span className="h-[2px] w-10 bg-gold rounded-full" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-ink">
              Our Premium <span className="text-brand">Services</span>
            </h2>
            <p className="text-ink-soft mt-3">
              Explore complete real estate solutions tailored for you
            </p>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition border border-cream-dark h-full">
                  {/* Image */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.banner}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-gold font-semibold">
                      {item.number}
                    </p>

                    <h3 className="text-xl font-serif font-semibold mt-1 text-ink">
                      {item.title}
                    </h3>

                    <p className="text-ink-soft mt-2 text-sm">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL SECTIONS ================= */}
      <InteriorSection />
      <WhyChoose heroImg={heroImg} />
      <ContactSection />
    </>
  );
}
