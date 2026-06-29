import React from "react";
import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import director from "../assets/team/director.png";
import manager from "../assets/team/manager.png";

const teamMembers = [
  {
    name: "Mr. P.S Dhakre",
    role: "Managing Director",
    image: director,
    desc: "Leading the organization with a vision for growth and excellence in real estate.",
  },
  {
    name: "Dr. Neeraj Sharma",
    role: "General Manager",
    image: manager,
    desc: "Oversees operations and ensures smooth execution of all real estate projects.",
  },
];

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-cream to-white py-24 px-6 md:px-20">
      {/* Heading */}
      <Reveal className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-[2px] w-10 bg-gold rounded-full" />
          <span className="eyebrow">Our Experts</span>
          <span className="h-[2px] w-10 bg-gold rounded-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink">
          Meet Our <span className="text-brand">Team</span>
        </h1>
        <p className="text-ink-soft mt-3 text-lg">
          Experienced professionals guiding your real estate journey
        </p>
      </Reveal>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-2xl shadow-soft hover:shadow-2xl transition duration-300 overflow-hidden group border border-cream-dark"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center">
              <h2 className="text-2xl font-serif font-semibold text-ink">
                {member.name}
              </h2>
              <p className="text-gold-dark font-medium mt-1 uppercase tracking-wider text-sm">
                {member.role}
              </p>
              <div className="mx-auto mt-3 h-[2px] w-12 bg-gold/50 rounded-full" />
              <p className="text-ink-soft mt-4 text-sm leading-relaxed">
                {member.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
