import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiCheck, FiPhone } from "react-icons/fi";
import servicesData from "../components/data/servicesData";
import Reveal from "../components/ui/Reveal";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-2xl font-serif text-ink">Service not found</p>
        <Link to="/services" className="btn-gold mt-6">
          Back to Services
        </Link>
      </div>
    );
  }

  const related = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-cream">
      {/* ================= HERO ================= */}
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={service.banner}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/30" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors mb-6 w-fit"
          >
            <FiArrowLeft /> Back to Services
          </Link>

          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Service {service.number}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-[2px] w-10 bg-gold rounded-full" />
          <span className="eyebrow">Overview</span>
          <span className="h-[2px] w-10 bg-gold rounded-full" />
        </div>
        <p className="text-lg md:text-xl text-ink-soft leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* ================= OFFER + FACILITIES + IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — lists */}
          <div className="space-y-10">
            <Reveal direction="right">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-ink mb-6">
                What We <span className="text-brand">Offer</span>
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {service.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-ink-soft font-medium"
                  >
                    <span className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                      <FiCheck size={15} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-ink mb-6">
                Facilities
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {service.facilities.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-ink-soft"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — image with gold frame accent */}
          <Reveal direction="left" className="relative">
            <div className="absolute -top-5 -right-5 w-32 h-32 rounded-3xl border-2 border-gold/40 hidden md:block" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={service.banner}
                alt={service.title}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[radial-gradient(#e0d3b8_2px,transparent_2px)] [background-size:12px_12px] opacity-70 hidden md:block" />
          </Reveal>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <Reveal className="bg-gradient-to-r from-brand to-brand-dark rounded-3xl px-8 py-14 text-center shadow-soft">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Interested in {service.title}?
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Get in touch with our experts for the best deals, site visits and
            complete guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+916395955148" className="btn-gold">
              <FiPhone /> Call Now
            </a>
            <Link to="/contact" className="btn-outline-light">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ================= MORE SERVICES ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-center mb-12">
            More <span className="text-brand">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="group bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition border border-cream-dark"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={s.banner}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gold font-semibold">{s.number}</p>
                  <h3 className="text-xl font-serif font-semibold text-ink mt-1">
                    {s.title}
                  </h3>
                  <p className="text-ink-soft text-sm mt-2">
                    {s.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand font-medium mt-3 group-hover:gap-2 transition-all">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
