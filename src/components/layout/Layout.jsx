import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp button (all pages) */}
      <WhatsAppButton />
    </div>
  );
}
