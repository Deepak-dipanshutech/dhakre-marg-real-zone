import Reveal from "../ui/Reveal";
import visionImage from "../../assets/herosection/vision1.jfif";
import visionImage1 from "../../assets/herosection/vsion2.jfif";

export default function VisionSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* LEFT IMAGE COLLAGE */}
        <Reveal direction="right" className="relative w-full h-[450px] md:h-[500px]">
          {/* Subtle decorative dotted patch */}
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-[radial-gradient(#e0d3b8_2px,transparent_2px)] [background-size:12px_12px] opacity-70" />

          {/* Gold frame accent */}
          <div className="absolute right-0 top-2 w-[55%] h-[65%] rounded-[2rem] border-2 border-gold/40" />

          {/* BACK IMAGE */}
          <div className="absolute left-0 top-0 w-[70%] h-[90%] overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={visionImage}
              alt="Real Estate Surveying"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FRONT SMALL IMAGE */}
          <div className="absolute right-4 bottom-12 w-[50%] h-[60%] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
            <img
              src={visionImage1}
              alt="Engineers discussing plan"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* RIGHT CONTENT */}
        <Reveal direction="left" delay={0.1} className="flex flex-col justify-center">
          {/* Top Subheading with Gold Accent Line */}
          <div className="flex items-center gap-3 mb-5">
            <span className="eyebrow">Our Vision</span>
            <div className="w-12 h-[2px] bg-gold rounded-full" />
          </div>

          {/* Main Header */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-ink leading-[1.2] mb-6">
            To be the most trusted and respected real estate service provider in{" "}
            <span className="text-brand">Greater Noida</span>.
          </h2>

          {/* Description */}
          <p className="text-ink-soft leading-relaxed text-base md:text-lg">
            We combine deep local market knowledge with honest, transparent
            dealings to help every client buy, sell, and invest with complete
            confidence. From premium flats to prime plots, our promise is simple
            — the right property, the right guidance, every single time.
          </p>

          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-serif font-bold text-brand">500+</p>
              <p className="text-sm text-ink-soft mt-1">Happy Families</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-brand">10+</p>
              <p className="text-sm text-ink-soft mt-1">Years of Trust</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-brand">100%</p>
              <p className="text-sm text-ink-soft mt-1">Transparency</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
