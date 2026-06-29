import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RouteManager from "./components/ui/RouteManager";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Property from "./pages/Property";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <RouteManager />
      <Routes>
        {/* All pages wrapped in Layout */}
        <Route element={<Layout />}>
          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* Services List Page (listing only — no detail page) */}
          <Route path="/services" element={<Services />} />

          {/* Property List Page (listing only — no detail page) */}
          <Route path="/properties" element={<Property />} />
        </Route>
      </Routes>
    </Router>
  );
}
