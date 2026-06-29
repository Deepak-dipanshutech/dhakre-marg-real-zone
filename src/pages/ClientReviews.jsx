import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";
import Reveal from "../components/ui/Reveal";
import backgroundImage from "../assets/about/background.jpg";

const reviews = [
  {
    name: "Ms. Arpita Gupta",
    location: "Edana, Tower-A",
    size: "1400 sqft",
    type: "3BHK",
    review:
      "Smooth experience with the team. They helped me find the perfect flat with complete transparency and professional support. Highly recommended!",
  },
  {
    name: "Mr. K.K Sharma",
    location: "SDS NRI City, Tower-10",
    size: "1765 sqft",
    type: "3BHK",
    review:
      "Excellent service and professional guidance. The entire property buying process was smooth and hassle-free.",
  },
  {
    name: "Mr. A.K Singh",
    location: "Alpha Homes, Tower-4",
    size: "1200 sqft",
    type: "3BHK",
    review:
      "Great experience dealing with the team. Very supportive from property selection to final registration.",
  },
];

export default function ClientReviews() {
  return (
    <section
      className="relative bg-cover bg-center pt-28 pb-24 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading Section */}
        <Reveal direction="right" className="text-left mb-16 max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-serif font-medium text-brand leading-tight">
            Happy Clients Reviews
          </h2>

          <div className="flex items-center gap-2 mt-4 mb-5">
            <div className="h-[1px] w-12 bg-gold"></div>
            <div className="text-gold text-xs">◆</div>
            <div className="h-[1px] w-24 bg-gold"></div>
          </div>

          <p className="text-ink-soft text-sm md:text-base leading-relaxed">
            Trusted by families across Greater Noida & Yamuna Expressway.
            <br />
            Your satisfaction is our biggest achievement.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gold/20 flex flex-col text-center justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-sm" />
                  ))}
                </div>

                <p className="text-ink-soft text-sm md:text-base italic mb-6 px-2">
                  "{item.review}"
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-gold/20 my-4"></div>

                <div className="mb-4">
                  <p className="font-semibold text-ink text-sm md:text-base">
                    {item.location}
                  </p>
                  <p className="text-xs text-ink-soft/70 mt-1 font-medium">
                    {item.size} • {item.type}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gold/20 my-4"></div>

                <h4 className="font-serif font-bold text-lg text-brand">
                  {item.name}
                </h4>
                <p className="text-xs text-ink-soft/60 mt-0.5">
                  Verified Home Buyer
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-gold">
            <FaGoogle className="text-lg opacity-90" />
            Submit Your Review
          </a>
        </div>
      </div>
    </section>
  );
}
