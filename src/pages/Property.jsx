import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiHome,
  FiMaximize,
  FiTag,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import propertiesData from "../components/data/propertiesData";
import Reveal from "../components/ui/Reveal";

const PER_PAGE = 12;
const HOME_COUNT = 6;

function PropertyCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: "easeOut" }}
      className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-cream-dark flex flex-col"
    >
      {/* Image + badges */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.project}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="absolute top-4 left-4 bg-brand text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-soft">
          {item.price}
          {item.listingType === "Rent" ? " /mo" : ""}
        </span>
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full ${
            item.listingType === "Rent"
              ? "bg-ink/80 text-white"
              : "bg-white/90 text-ink"
          }`}
        >
          For {item.listingType}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-serif font-semibold text-ink">
          {item.project}
        </h2>

        <p className="flex items-center gap-1.5 text-ink-soft/70 mt-1.5 text-sm">
          <FiMapPin className="text-gold shrink-0" />
          {item.location}
        </p>

        <p className="text-sm text-ink-soft mt-3 line-clamp-2">
          {item.description}
        </p>

        {/* Specs row */}
        <div className="mt-5 grid grid-cols-3 border-t border-cream-dark pt-4 text-center">
          <div className="px-1">
            <FiHome className="mx-auto text-gold mb-1.5" />
            <p className="text-[11px] uppercase tracking-wide text-ink-soft/50">
              Type
            </p>
            <p className="text-sm font-semibold text-ink mt-0.5 truncate">
              {item.type}
            </p>
          </div>

          <div className="px-1 border-x border-cream-dark">
            <FiMaximize className="mx-auto text-gold mb-1.5" />
            <p className="text-[11px] uppercase tracking-wide text-ink-soft/50">
              Area
            </p>
            <p className="text-sm font-semibold text-ink mt-0.5 truncate">
              {item.area}
            </p>
          </div>

          <div className="px-1">
            <FiTag className="mx-auto text-gold mb-1.5" />
            <p className="text-[11px] uppercase tracking-wide text-ink-soft/50">
              BHK
            </p>
            <p className="text-sm font-semibold text-ink mt-0.5">{item.bhk}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Heading() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="h-[2px] w-10 bg-gold rounded-full" />
        <span className="eyebrow">Featured Listings</span>
        <span className="h-[2px] w-10 bg-gold rounded-full" />
      </div>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink">
        Our <span className="text-brand">Properties</span>
      </h1>
    </>
  );
}

function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const btn =
    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors";

  return (
    <div className="flex items-center justify-center gap-2 mt-16 flex-wrap">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
        className={`${btn} bg-white border border-cream-dark text-ink-soft hover:border-gold hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-cream-dark disabled:hover:text-ink-soft`}
      >
        <FiChevronLeft />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`${btn} ${
            p === current
              ? "bg-brand text-white shadow-soft"
              : "bg-white border border-cream-dark text-ink-soft hover:border-gold hover:text-brand"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
        className={`${btn} bg-white border border-cream-dark text-ink-soft hover:border-gold hover:text-brand disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-cream-dark disabled:hover:text-ink-soft`}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default function Property({ preview = false }) {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("search") || "").trim();
  const [page, setPage] = useState(1);

  // reset to first page whenever the search term changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  const filtered = query
    ? propertiesData.filter((p) =>
        [p.project, p.location, p.bhk, p.type].some((field) =>
          (field || "").toLowerCase().includes(query.toLowerCase()),
        ),
      )
    : propertiesData;

  /* ================= HOME PREVIEW (6 only) ================= */
  if (preview) {
    const list = propertiesData.slice(0, HOME_COUNT);
    return (
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <Heading />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((item, i) => (
              <PropertyCard key={item.id} item={item} i={i} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/properties" className="btn-gold">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ================= FULL LISTING (pagination) ================= */
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-10">
          <Heading />

          {query ? (
            <p className="mt-4 text-ink-soft inline-flex items-center gap-2">
              Showing results for{" "}
              <span className="font-semibold text-brand">"{query}"</span>
              <Link
                to="/properties"
                className="inline-flex items-center gap-1 text-sm text-gold-dark hover:text-brand"
              >
                <FiX /> Clear
              </Link>
            </p>
          ) : (
            <p className="mt-4 text-ink-soft">
              {filtered.length} properties across Greater Noida & Yamuna
              Expressway
            </p>
          )}
        </Reveal>

        {filtered.length === 0 ? (
          /* No results */
          <div className="text-center py-16">
            <p className="text-xl font-serif text-ink">
              No properties found for{" "}
              <span className="text-brand">"{query}"</span>.
            </p>
            <p className="text-ink-soft mt-2">
              Try a different project name, location, type or BHK.
            </p>
            <Link to="/properties" className="btn-gold mt-6">
              View All Properties
            </Link>
          </div>
        ) : (
          <>
            {/* count line */}
            <p className="text-center text-sm text-ink-soft/60 mb-8">
              Showing {start + 1}–{Math.min(start + PER_PAGE, filtered.length)}{" "}
              of {filtered.length}
            </p>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageItems.map((item, i) => (
                <PropertyCard key={item.id} item={item} i={i} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                current={safePage}
                total={totalPages}
                onChange={goTo}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
