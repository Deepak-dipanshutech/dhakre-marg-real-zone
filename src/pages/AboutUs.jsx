import React from "react";
import { ShieldCheck, UserCheck, Handshake, BarChart3 } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import luxaryroom from "../assets/about/luxaryroom.jpg";
import dinig from "../assets/about/dinig.png";
import chair from "../assets/about/chair.jpg";

const coreValues = [
  { icon: ShieldCheck, label: ["Trusted", "Partners"] },
  { icon: UserCheck, label: ["Client", "Focused"] },
  { icon: Handshake, label: ["Transparent", "Deals"] },
  { icon: BarChart3, label: ["Market", "Expertise"] },
];

export default function AboutUs() {
  return (
    <section
      className="relative w-full bg-cream py-24 px-6 md:px-20 font-sans overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(250, 247, 242, 0.94) 50%, rgba(250, 247, 242, 0.82) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <Reveal direction="right" className="space-y-12">
          <div>
            {/* Title with decorative dots */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-10 bg-gold rounded-full" />
                <span className="eyebrow">Who We Are</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-ink uppercase">
                About Us
              </h1>
              <div className="flex gap-1 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              </div>
            </div>

            <p className="mt-8 text-ink-soft leading-relaxed text-base md:text-lg">
              Welcome to{" "}
              <span className="font-semibold text-brand">
                Dhakre Marg Real Zone
              </span>
              , your trusted partners in the real estate sector, specializing in
              the dynamic Resale and Flats markets of Greater Noida sectors,
              societies, flats, and the Yamuna Expressway region.
            </p>

            <p className="mt-4 text-ink-soft/90 leading-relaxed text-base">
              We are dedicated to providing comprehensive real estate guidance
              and solutions tailored to the diverse needs of our esteemed
              clients.
            </p>
          </div>

          {/* 4-COLUMN ICON CORE VALUE ROW */}
          <div className="grid grid-cols-4 gap-2 pt-6 border-t border-gold/20">
            {coreValues.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className={`flex flex-col items-start space-y-3 ${
                  i > 0 ? "border-l border-gold/20 pl-4" : ""
                }`}
              >
                <div className="p-2 text-gold">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <p className="text-xs md:text-sm font-semibold text-ink leading-tight">
                  {label[0]}
                  <br />
                  {label[1]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* RIGHT IMAGE GRID WITH CENTRAL DECOR LINE */}
        <Reveal direction="left" delay={0.1} className="flex gap-6 lg:ml-6 items-stretch h-[500px] md:h-[600px]">
          {/* Central Decor Line with Center Circle */}
          <div className="relative w-px bg-gold/30 items-center justify-center hidden sm:flex">
            <div className="w-2 h-2 rounded-full border border-gold bg-cream absolute"></div>
          </div>

          {/* Main Image and Stacked Images Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1.4fr,1fr] gap-4 md:gap-6">
            {/* BIG IMAGE */}
            <div className="h-full w-full">
              <img
                src={luxaryroom}
                alt="luxurious modern lounge"
                className="w-full h-full object-cover rounded-[2rem] shadow-xl"
              />
            </div>

            {/* STACKED IMAGES */}
            <div className="hidden sm:flex flex-col gap-4 md:gap-6 h-full">
              <div className="flex-1 min-h-0">
                <img
                  src={chair}
                  alt="minimalist reading nook"
                  className="w-full h-full object-cover rounded-[2rem] shadow-md"
                />
              </div>
              <div className="flex-1 min-h-0">
                <img
                  src={dinig}
                  alt="elegant dining area"
                  className="w-full h-full object-cover rounded-[2rem] shadow-md"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
