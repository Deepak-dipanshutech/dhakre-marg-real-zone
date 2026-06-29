import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import DMR from "../../assets/logo/DMRlogo1.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const menus = ["HOME", "PROPERTIES", "SERVICES", "TEAM", "ABOUT", "CONTACT"];

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/properties?search=${encodeURIComponent(q)}` : "/properties");
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-cream-dark shadow-sm"
      >
        {/* ================= ROW 1 ================= */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={DMR} alt="DMR Logo" className="w-16 h-16 object-contain" />

            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide leading-tight">
                <span className="text-gold">Dhakre</span>{" "}
                <span className="text-brand">Marg</span>
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <div className="h-[1px] w-5 bg-gold/40" />
                <p className="uppercase text-[10px] tracking-[0.25em] font-medium text-ink-soft">
                  Real Zone
                </p>
                <div className="h-[1px] w-5 bg-gold/40" />
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form
              onSubmit={handleSearch}
              className="w-full flex items-center bg-white border border-cream-dark rounded-full overflow-hidden h-11 shadow-sm focus-within:border-gold transition-colors"
            >
              <div className="flex items-center gap-2 px-4 flex-1">
                <IoLocationOutline className="text-gold" size={18} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search properties, location..."
                  className="w-full text-sm outline-none bg-transparent text-ink placeholder:text-ink-soft/60"
                />
              </div>

              <button
                type="submit"
                aria-label="Search"
                className="h-full px-5 bg-gold hover:bg-gold-dark text-white transition"
              >
                <FiSearch size={18} />
              </button>
            </form>
          </div>

          {/* Mobile Menu (right side) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(true);
            }}
            className="lg:hidden text-ink"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* ================= ROW 2 ================= */}
        <nav className="hidden lg:block border-t border-cream-dark bg-white">
          <div className="max-w-5xl mx-auto flex justify-center gap-10 h-12 items-center">
            {menus.map((item) => {
              const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <Link key={item} to={path} className="relative group">
                  <span
                    className={`text-xs tracking-widest font-semibold transition ${
                      isActive
                        ? "text-brand"
                        : "text-ink-soft group-hover:text-gold-dark"
                    }`}
                  >
                    {item}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </nav>
      </motion.header>

      {/* Spacer */}
      <div className="h-20 lg:h-[120px]" />

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-ink/50 z-50"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed left-0 top-0 w-72 h-full bg-white z-50 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <img src={DMR} alt="Dhakre Marg Real Zone" className="w-12 h-12" />
                <FiX
                  onClick={() => setMobileOpen(false)}
                  className="text-ink cursor-pointer"
                />
              </div>

              <div className="flex flex-col gap-4">
                {menus.map((item) => (
                  <Link
                    key={item}
                    to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    className="text-ink-soft font-medium hover:text-gold-dark"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
