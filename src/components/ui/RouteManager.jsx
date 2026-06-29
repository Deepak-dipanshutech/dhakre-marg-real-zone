import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "Dhakre Marg Real Zone";

const DEFAULT_DESC =
  "Dhakre Marg Real Zone - Premium real estate services in Greater Noida, Noida Extension & Yamuna Expressway. Buy, sell & invest in flats, plots and villas with complete transparency.";

// Per-page title + meta description
const pageMeta = {
  "/": {
    title: "Home",
    desc: DEFAULT_DESC,
  },
  "/about": {
    title: "About Us",
    desc: "About Dhakre Marg Real Zone - your trusted real estate partner in Greater Noida specialising in resale flats, plots and societies across the Yamuna Expressway region.",
  },
  "/team": {
    title: "Our Team",
    desc: "Meet the experienced team at Dhakre Marg Real Zone guiding your real estate journey in Greater Noida.",
  },
  "/contact": {
    title: "Contact Us",
    desc: "Contact Dhakre Marg Real Zone for trusted real estate guidance in Greater Noida. Call +91 63959 55148 or email dhakremargrealzone@gmail.com.",
  },
  "/services": {
    title: "Services",
    desc: "Explore Dhakre Marg Real Zone services - residential plots, premium flats, independent houses, builder floors, villas, commercial, resale and rental properties in Greater Noida.",
  },
  "/properties": {
    title: "Properties",
    desc: "Browse verified properties for sale in Greater Noida with Dhakre Marg Real Zone - flats, plots and apartments at the best investment value.",
  },
};

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Route-level concerns in one place:
 *  1. Sets the document <title> per page  ->  "About Us | Dhakre Marg Real Zone"
 *  2. Sets the meta description per page (SEO)
 *  3. Scrolls back to the top on every route change.
 *
 * Titles live here (not inside each page) to avoid flicker, because the
 * Home page reuses several page components as stacked sections.
 */
export default function RouteManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname];

    let title = meta?.title;
    let desc = meta?.desc || DEFAULT_DESC;

    if (!title) {
      if (pathname.startsWith("/services/")) title = "Service Details";
      else if (pathname.startsWith("/properties/")) title = "Property Details";
      else if (pathname === "/login") title = "Login";
      else if (pathname === "/register") title = "Register";
    }

    document.title = title ? `${title} | ${SITE}` : SITE;
    setMetaDescription(desc);

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
