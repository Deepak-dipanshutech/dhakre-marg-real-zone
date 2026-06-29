import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

import Reveal from "../components/ui/Reveal";
import contactBg from "../assets/herosection/contact (2).jpg";

export default function Contact() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal className="text-center mb-14">
          <p className="eyebrow">Contact Us</p>

          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-ink mt-4">
            Have Questions? We're Ready To Help!
          </h1>

          <p className="text-ink-soft mt-5 max-w-2xl mx-auto">
            Looking for your dream home or ready to sell your property? Our
            experts provide trusted guidance and personalized real estate
            solutions across Greater Noida.
          </p>
        </Reveal>

        {/* Main Card */}
        <Reveal className="bg-white rounded-[30px] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* LEFT SIDE */}
            <div className="lg:col-span-4 p-6">
              <div
                className="relative rounded-2xl overflow-hidden h-full min-h-[620px] bg-cover bg-center"
                style={{ backgroundImage: `url(${contactBg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/95 to-brand-dark/95"></div>

                <div className="relative z-10 h-full flex flex-col p-8 text-white">
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-4">
                      Contact Information
                    </h3>

                    <p className="text-white/80 leading-7">
                      Ready to buy your dream property or invest in real estate?
                      Our experts are always available to guide you.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="mt-10 space-y-7">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaPhoneAlt className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Mobile Number</p>
                        <a
                          href="tel:+916395955148"
                          className="font-medium hover:text-gold transition-colors"
                        >
                          +91 63959 55148
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaEnvelope className="text-gold" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-white/60">Email Address</p>
                        <a
                          href="mailto:dhakremargrealzone@gmail.com"
                          className="font-medium hover:text-gold transition-colors break-all"
                        >
                          dhakremargrealzone@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaMapMarkerAlt className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Office Address</p>
                        <p className="leading-7">
                          Alpha-I Commercial Belt Tradex
                          <br /> Tower-2 305, 3rd Floor, Block-E Greater Noida
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                        <FaClock className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Office Hours</p>
                        <p>
                          Monday - Sunday
                          <br />
                          9:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="mt-auto pt-10">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      {[
                        {
                          icon: FaInstagram,
                          href: "https://www.instagram.com/dhakrerealestate?igsh=MWhsMXk4Ym90NmZpeA==",
                        },
                        {
                          icon: FaFacebookF,
                          href: "https://www.facebook.com/profile.php?id=61590819427634",
                        },
                        { icon: FaWhatsapp, href: "https://wa.me/916395955148" },
                        {
                          icon: FaGlobe,
                          href: "https://www.google.com/search?client=ms-unknown&hs=cc4p&sca_esv=1bb8a0a34e58ba2b&hl=en-IN&cs=0&sxsrf=ANbL-n4jhvHOJVzoKr76EpZpuFErZn4qKQ%3A1781414739740&kgmid=%2Fg%2F11zbv9xdhl&q=Dhakre%20Marg%20Real%20Zone&shem=epsdc%2Crimspwouohc&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=d8054a5e0853e5d6",
                        },
                      ].map(({ icon: Icon, href }, i) => (
                        <a
                          key={i}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-11 h-11 rounded-full bg-white/15 hover:bg-gold transition flex items-center justify-center"
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-8 p-10">
              <h3 className="text-3xl font-serif font-semibold text-ink mb-2">
                Send Us A Message
              </h3>

              <p className="text-ink-soft mb-8">
                Fill out the form below and our team will get back to you as soon
                as possible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-full border border-cream-dark px-6 py-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-full border border-cream-dark px-6 py-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-full border border-cream-dark px-6 py-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-full border border-cream-dark px-6 py-4 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                  />
                </div>

                <textarea
                  rows={6}
                  placeholder="Tell us about your property requirement..."
                  className="w-full rounded-3xl border border-cream-dark p-6 outline-none resize-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                ></textarea>

                <label className="flex items-center gap-3 text-sm text-ink-soft">
                  <input type="checkbox" className="accent-brand" />I agree to
                  receive calls and emails regarding my property enquiry.
                </label>

                <button type="submit" className="btn-primary">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        {/* Google Map */}
        <div className="mt-16 overflow-hidden rounded-[30px] shadow-2xl border border-cream-dark">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Dhakre%20Marg%20Real%20Zone&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
