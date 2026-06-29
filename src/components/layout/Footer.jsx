import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import Reveal from "../ui/Reveal";
import DMR from "../../assets/logo/DMRlogo1.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61590819427634",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dhakrerealestate?igsh=MWhsMXk4Ym90NmZpeA==",
  },
  { icon: FaWhatsapp, href: "https://wa.me/916395955148" },
  {
    icon: FaGlobe,
    href: "https://www.google.com/search?client=ms-unknown&hs=cc4p&sca_esv=1bb8a0a34e58ba2b&hl=en-IN&cs=0&sxsrf=ANbL-n4jhvHOJVzoKr76EpZpuFErZn4qKQ%3A1781414739740&kgmid=%2Fg%2F11zbv9xdhl&q=Dhakre%20Marg%20Real%20Zone&shem=epsdc%2Crimspwouohc&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=d8054a5e0853e5d6",
  },
];

const contacts = [
  { icon: FaPhoneAlt, text: "+91 63959 55148", href: "tel:+916395955148" },
  {
    icon: FaEnvelope,
    text: "dhakremargrealzone@gmail.com",
    href: "mailto:dhakremargrealzone@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    text: "Alpha-I, Commercial Belt, Tradex Tower-2, 305-3rd Floor, Block E",
  },
];

function Heading({ children }) {
  return (
    <h3 className="relative inline-block pb-2 text-lg font-serif font-semibold">
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] w-10 bg-gold rounded-full" />
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-ink to-black text-white overflow-hidden">
      {/* Gold top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Soft glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 w-80 h-80 bg-brand/25 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <Reveal direction="up" className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={DMR}
                alt="Dhakre Marg Real Zone"
                className="w-14 h-14 object-contain"
              />
              <h2 className="text-2xl font-serif font-bold tracking-wide">
                Dhakre Marg <span className="text-gold">Real Zone</span>
              </h2>
            </div>

            <p className="text-white/60 mt-5 leading-relaxed max-w-sm">
              Premium real estate services in Greater Noida. We help you find
              luxury homes, trusted projects, and the best investment
              opportunities with complete transparency.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:bg-gold hover:border-gold hover:text-ink hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-3">
            <Heading>Quick Links</Heading>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
                  >
                    <span className="h-px w-3 bg-gold/50 group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Get In Touch */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-4">
            <Heading>Get In Touch</Heading>

            <div className="mt-5 space-y-4">
              {contacts.map(({ icon: Icon, text, href }, i) => {
                const inner = (
                  <>
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-ink transition-colors duration-300">
                      <Icon size={13} />
                    </span>
                    <span className="text-white/65 leading-relaxed group-hover:text-white transition-colors">
                      {text}
                    </span>
                  </>
                );
                return href ? (
                  <a key={i} href={href} className="group flex items-start gap-3">
                    {inner}
                  </a>
                ) : (
                  <div key={i} className="group flex items-start gap-3">
                    {inner}
                  </div>
                );
              })}
            </div>

            <Link to="/contact" className="btn-gold w-full mt-7">
              Join Dhakre Marg Real Zone
            </Link>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-6 flex items-center justify-center gap-3 text-white/40 text-sm">
          <span className="hidden sm:block h-px w-8 bg-gold/40" />
          <p className="text-center">
            © {new Date().getFullYear()} Dhakre Marg Real Zone. All Rights
            Reserved.
          </p>
          <span className="hidden sm:block h-px w-8 bg-gold/40" />
        </div>
      </div>
    </footer>
  );
}
