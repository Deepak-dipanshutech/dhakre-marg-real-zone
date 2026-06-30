// Residential Plots
import residentialBanner from "../../assets/services/residentailmg.png";
// import residential1 from "../assets/services/residential/img1.jpg";
// import residential2 from "../assets/services/residential/img2.jpg";
// import residential3 from "../assets/services/residential/img3.jpg";

// // Premium Flats
// import flatsBanner from "../assets/services/flats/banner.jpg";
// import flats1 from "../assets/services/flats/img1.jpg";
// import flats2 from "../assets/services/flatsresidentialBanner// import flats3 from "../assets/services/flats/img3.jpg";

// // Independent Houses
// import houseBanner from "../assets/services/houses/banner.jpg";
// import house1 from "../assets/services/houses/img1.jpg";
// import house2 from "../assets/services/houses/img2.jpg";
// import house3 from "../assets/services/houses/img3.jpg";

// // Builder Floors
// import builderBanner from "../assets/services/builder-floor/banner.jpg";
// import builder1 from "../assets/services/builder-floor/img1.jpg";
// import builder2 from "../assets/services/builder-floor/img2.jpg";
// import builder3 from "../assets/services/builder-floor/img3.jpg";

// // Villas
// import villaBanner from "../assets/services/villas/banner.jpg";
// import villa1 from "../assets/services/villas/img1.jpg";
// import villa2 from "../assets/services/villas/img2.jpg";
// import villa3 from "../assets/services/villas/img3.jpg";

// // Commercial
// import commercialBanner from "../assets/services/commercial/banner.jpg";
// import commercial1 from "../assets/services/commercial/img1.jpg";
// import commercial2 from "../assets/services/commercial/img2.jpg";
// import commercial3 from "../assets/services/commercial/img3.jpg";

// // Resale
// import resaleBanner from "../assets/services/resale/banner.jpg";
// import resale1 from "../assets/services/resale/img1.jpg";
// import resale2 from "../assets/services/resale/img2.jpg";
// import resale3 from "../assets/services/resale/img3.jpg";

// // Rental
// import rentalBanner from "../assets/services/rental/banner.jpg";
// import rental1 from "../assets/services/rental/img1.jpg";
// import rental2 from "../assets/services/rental/img2.jpg";
// import rental3 from "../assets/services/rental/img3.jpg";

const servicesData = [
  {
    id: 1,
    slug: "residential-plots",
    number: "01",
    title: "Residential Plots",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Own your land and build your dream home.",

    description:
      "Own your land and build your dream home with premium residential plots in Greater Noida, Noida Extension and along the Yamuna Expressway. Every plot comes with clear legal documentation, registry support and strong long-term investment value — ready for you to build exactly the home you imagine.",

    features: [
      "Prime location plots",
      "Registry support",
      "Loan assistance",
      "Corner plots",
      "Gated plot societies",
      "Investment plots",
    ],

    facilities: [
      "Wide roads",
      "Water supply",
      "Electricity",
      "Security",
      "Park area",
    ],
  },

  {
    id: 2,
    slug: "premium-flats",
    number: "02",
    title: "Premium Flats & Apartments",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Luxury and affordable flats in top societies.",

    description:
      "From luxury high-rises to affordable homes, find premium flats and apartments in Greater Noida's most sought-after societies. Choose from 2BHK, 3BHK and 4BHK options with modern amenities, excellent connectivity and trusted builders — ready to move or under construction.",

    featuresLabel: "Available In",
    features: [
      "Jaypee Greens",
      "Eldeco",
      "Supertech",
      "Gaur Atulyam",
      "ATS Projects",
      "United Horizon",
      "Migsun Twinz",
      "Purvanchal Royal City",
    ],

    facilitiesLabel: "Amenities",
    facilities: [
      "Clubhouse",
      "Swimming pool",
      "Gym",
      "Park",
      "Security",
      "Parking",
      "Lift",
      "Power backup",
    ],
  },

  {
    id: 3,
    slug: "independent-houses",
    number: "03",
    title: "Independent Houses",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Private homes with complete ownership and freedom.",

    description:
      "Enjoy complete ownership and freedom with your own independent house — spacious, private and designed for comfortable family living. Best for families looking for privacy and comfort.",

    featuresLabel: "Features",
    features: [
      "Spacious rooms",
      "Private parking",
      "Balcony",
      "Garden space",
      "Full ownership",
    ],

    facilities: [],
  },

  {
    id: 4,
    slug: "builder-floors",
    number: "04",
    title: "Builder Floors",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Premium independent floor options with modern construction.",

    description:
      "Premium independent builder floors with modern construction and quality finishes. Enjoy more privacy than apartments, a separate entry and better space — all at affordable pricing, available in 1 to 4 BHK configurations.",

    featuresLabel: "Benefits",
    features: [
      "More privacy than flats",
      "Affordable pricing",
      "Better space",
      "Modern interiors",
      "Separate entry",
    ],

    facilitiesLabel: "Configurations",
    facilities: ["1BHK", "2BHK", "3BHK", "4BHK"],
  },

  {
    id: 5,
    slug: "villas",
    hidden: true,
    number: "05",
    title: "Luxury Villas",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Luxury villas with premium lifestyle.",

    description:
      "Exclusive villas featuring spacious interiors, private gardens, and world-class amenities.",

    features: [
      "Private Garden",
      "Luxury Interiors",
      "Smart Home",
      "Club Membership",
    ],

    facilities: ["Swimming Pool", "Security", "Premium Community"],
  },

  {
    id: 6,
    slug: "commercial-properties",
    hidden: true,
    number: "06",
    title: "Commercial Properties",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Office and retail investment.",

    description:
      "Commercial shops, office spaces and business investment opportunities.",

    features: ["Retail Shops", "Office Space", "Prime Location", "High ROI"],

    facilities: ["Parking", "Business Hub", "24x7 Security"],
  },

  {
    id: 7,
    slug: "resale-properties",
    hidden: true,
    number: "07",
    title: "Resale Properties",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Verified resale properties.",

    description:
      "Verified apartments, villas and plots with complete legal support.",

    features: [
      "Verified Listings",
      "Best Price",
      "Loan Support",
      "Documentation",
    ],

    facilities: ["Immediate Possession", "Legal Assistance"],
  },

  {
    id: 8,
    slug: "rental-properties",
    hidden: true,
    number: "08",
    title: "Rental Properties",

    banner: residentialBanner,

    images: [residentialBanner, residentialBanner, residentialBanner],

    shortDescription: "Residential and commercial rentals.",

    description:
      "Find rental flats, villas, offices and commercial properties in prime locations.",

    features: [
      "Affordable Rent",
      "Verified Owners",
      "Office Rental",
      "Family Homes",
    ],

    facilities: ["Immediate Availability", "Prime Locations"],
  },
];

export default servicesData;
