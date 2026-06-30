import React from "react";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import Reveal from "../ui/Reveal";

/**
 * One full-width service block for the Services page.
 * Layout alternates (image left / right) based on the index for a zig-zag feel.
 */
export default function ServiceSection({ service, index }) {
  const reverse = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className={`scroll-mt-28 py-16 md:py-20 px-6 ${
        reverse ? "bg-cream" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ===== IMAGE ===== */}
        <Reveal
          direction={reverse ? "left" : "right"}
          className={`relative ${reverse ? "lg:order-2" : ""}`}
        >
          <div className="absolute -top-5 -right-5 w-28 h-28 rounded-3xl border-2 border-gold/40 hidden md:block" />
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={service.banner}
              alt={service.title}
              className="w-full h-[320px] md:h-[440px] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[radial-gradient(#e0d3b8_2px,transparent_2px)] [background-size:12px_12px] opacity-70 hidden md:block" />
        </Reveal>

        {/* ===== CONTENT ===== */}
        <Reveal
          direction={reverse ? "right" : "left"}
          delay={0.1}
          className={reverse ? "lg:order-1" : ""}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Service {service.number}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ink mt-2">
            {service.title}
          </h3>

          <p className="text-ink-soft leading-relaxed mt-4">
            {service.description}
          </p>

          {/* Features list */}
          <h4 className="text-lg font-serif font-semibold text-brand mt-7 mb-4">
            {service.featuresLabel || "What We Offer"}
          </h4>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {service.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-ink-soft text-sm font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <FiCheck size={12} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* Facilities list */}
          <h4 className="text-lg font-serif font-semibold text-brand mt-6 mb-3">
            {service.facilitiesLabel || "Facilities"}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {service.facilities.map((f, i) => (
              <li
                key={i}
                className="text-xs font-medium text-ink-soft bg-cream-dark/60 border border-cream-dark rounded-full px-3 py-1.5"
              >
                {f}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-primary mt-8">
            Enquire Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
