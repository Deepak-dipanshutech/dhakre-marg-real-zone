import React from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Floating WhatsApp button — fixed at bottom-right on every page.
 * z-40 keeps it below the mobile menu overlay (z-50).
 */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916395955148"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14"
    >
      {/* pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300">
        <FaWhatsapp size={28} />
      </span>
    </a>
  );
}
