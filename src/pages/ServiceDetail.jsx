import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import servicesData from "../components/data/servicesData";
import Reveal from "../components/ui/Reveal";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-ink-soft">Service not found</div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors"
        >
          <FaArrowLeft />
          Back to Services
        </Link>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <Reveal className="relative rounded-2xl overflow-hidden shadow-soft">
          <img
            src={service.banner}
            alt={service.title}
            className="w-full h-[300px] md:h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent flex items-end p-8">
            <div className="text-white">
              <p className="text-sm text-gold font-semibold">
                Service #{service.number}
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mt-1">
                {service.title}
              </h1>
              <p className="text-sm md:text-base mt-2 text-white/80">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* DESCRIPTION */}
      <Reveal className="max-w-6xl mx-auto px-6 mt-10">
        <p className="text-lg text-ink-soft leading-relaxed">
          {service.description}
        </p>
      </Reveal>

      {/* FEATURES + FACILITIES */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-8">
        {/* FEATURES */}
        <Reveal direction="right" className="bg-white p-8 rounded-2xl shadow-soft border border-cream-dark">
          <h2 className="text-2xl font-serif font-semibold mb-5 text-ink">
            Key Features
          </h2>

          <ul className="space-y-3">
            {service.features.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-ink-soft">
                <FaCheckCircle className="text-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* FACILITIES */}
        <Reveal direction="left" delay={0.1} className="bg-white p-8 rounded-2xl shadow-soft border border-cream-dark">
          <h2 className="text-2xl font-serif font-semibold mb-5 text-ink">
            Facilities
          </h2>

          <ul className="space-y-3">
            {service.facilities.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-ink-soft">
                <FaCheckCircle className="text-brand shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-ink">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {service.images.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="overflow-hidden rounded-xl shadow-soft"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-60 object-cover hover:scale-110 transition duration-500"
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* MORE SERVICES */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-ink">
          More Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {servicesData
            .filter((item) => item.id !== service.id)
            .slice(0, 3)
            .map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-soft border border-cream-dark hover:shadow-lg transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.banner}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-soft mt-2">
                    {item.shortDescription}
                  </p>

                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-block mt-4 text-brand font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <Reveal className="bg-gradient-to-r from-brand to-brand-dark text-white p-12 rounded-2xl text-center shadow-soft">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
            Interested in {service.title}?
          </h3>

          <p className="mb-6 text-white/80">
            Contact us now for the best deals and a site visit.
          </p>

          <a
            href="tel:+916395955148"
            className="btn-gold"
          >
            Call Now
          </a>
        </Reveal>
      </div>
    </div>
  );
}
