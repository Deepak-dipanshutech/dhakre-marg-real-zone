import React from "react";
import { FiCheck } from "react-icons/fi";
import Reveal from "../ui/Reveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=600&q=80",
    alt: "Swimming pool",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    alt: "Modern clubhouse",
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    alt: "Gymnasium",
  },
  {
    src: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=600&q=80",
    alt: "Landscaped garden",
  },
];

// interleaved so a 2-col grid reads: left column then right column
const amenities = [
  "Clubhouse",
  "CCTV Security",
  "Swimming Pool",
  "24×7 Water Supply",
  "Gymnasium",
  "Power Backup",
  "Children Park",
  "Covered Parking",
  "Sports Area",
  "Gated Society",
];

export default function AmenitiesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-10 bg-gold rounded-full" />
            <span className="eyebrow">Lifestyle</span>
            <span className="h-[2px] w-10 bg-gold rounded-full" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-ink">
            Property Facilities & <span className="text-brand">Amenities</span>
          </h2>
        </Reveal>

        {/* Image row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="group overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-44 md:h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </Reveal>
          ))}
        </div>

        {/* Checklist */}
        <Reveal className="max-w-4xl mx-auto bg-cream rounded-3xl p-8 md:p-10 border border-cream-dark">
          <h3 className="text-xl font-serif font-semibold text-brand mb-6">
            Properties we deal with include:
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {amenities.map((a, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-ink-soft font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <FiCheck size={13} />
                </span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
