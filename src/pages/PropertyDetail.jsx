import React from "react";
import { useParams, Link } from "react-router-dom";
import propertiesData from "../components/data/propertiesData";
import Reveal from "../components/ui/Reveal";

export default function PropertyDetail() {
  const { id } = useParams();

  const property = propertiesData.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brand text-xl font-serif">
        Property not found
      </div>
    );
  }

  const relatedProperties = propertiesData.filter(
    (item) => item.id !== property.id,
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* HERO IMAGE */}
      <div className="w-full h-[450px] md:h-[550px] overflow-hidden">
        <img
          src={property.image}
          alt={property.project}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* TITLE */}
        <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink">
              {property.project}
            </h1>
            <p className="text-ink-soft/70 mt-1">{property.location}</p>
          </div>

          <div className="text-2xl font-bold text-brand">{property.price}</div>
        </Reveal>

        {/* INFO GRID */}
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 bg-white p-6 rounded-2xl shadow-soft border border-cream-dark">
          {[
            ["BHK", property.bhk],
            ["Area", property.area],
            ["Floor", property.floor],
            ["Price", property.price],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-ink-soft/60 text-sm">{label}</p>
              <p className="font-semibold text-ink">{value}</p>
            </div>
          ))}
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal className="mt-10 bg-white p-8 rounded-2xl shadow-soft border border-cream-dark">
          <h2 className="text-xl font-serif font-semibold mb-3 text-ink">
            About This Property
          </h2>

          <p className="text-ink-soft leading-relaxed">
            This premium {property.bhk} apartment located at {property.project}{" "}
            offers modern living with spacious interiors, excellent
            connectivity, and high-end amenities.
          </p>

          <Link
            to="/contact"
            className="btn-primary mt-6"
          >
            Enquire Now
          </Link>
        </Reveal>

        {/* RELATED PROPERTIES */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-6 text-ink">
            Related Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProperties.slice(0, 3).map((item) => (
              <Link
                to={`/properties/${item.id}`}
                key={item.id}
                className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 border border-cream-dark"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.project}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-serif font-semibold text-ink">
                    {item.project}
                  </h3>
                  <p className="text-ink-soft/70">{item.location}</p>
                  <p className="text-brand font-bold mt-1">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ALL PROPERTIES */}
        <div className="mt-20">
          <h2 className="text-2xl font-serif font-bold mb-6 text-ink">
            All Properties
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesData.map((item) => (
              <Link
                to={`/properties/${item.id}`}
                key={item.id}
                className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-xl transition-all duration-300 border border-cream-dark"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.project}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-serif font-semibold text-ink">
                    {item.project}
                  </h2>

                  <p className="text-ink-soft/70 mt-1">{item.location}</p>

                  <div className="mt-3 text-sm text-ink-soft space-y-1">
                    <p>
                      <b className="text-ink">BHK:</b> {item.bhk}
                    </p>
                    <p>
                      <b className="text-ink">Area:</b> {item.area}
                    </p>
                    <p>
                      <b className="text-ink">Floor:</b> {item.floor}
                    </p>
                  </div>

                  <p className="text-brand font-bold mt-2">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
