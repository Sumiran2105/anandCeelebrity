import React from "react";
import { FiShield, FiTruck, FiHome, FiUsers } from "react-icons/fi";

const services = [
  { icon: <FiTruck />, title: "Luxury Cars & Chauffeurs", desc: "Mercedes, BMW, Lexus with vetted and protocol-trained chauffeurs." },
  { icon: <FiShield />, title: "Professional Security", desc: "Elite PSOs, gunmen, bouncers, and high-alert protection officers." },
  { icon: <FiHome />, title: "Private Hotel Stays", desc: "5-star suites, VIP check-in, and fully discreet arrangements." },
  { icon: <FiUsers />, title: "Backend Coordination", desc: "Dedicated handlers for logistics, routing, and on-ground execution." },
];

export default function Services() {
  return (
    <section className="py-19 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 drop-shadow-lg">
  Our Premium Services
</h3>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Exclusive end-to-end service crafted for celebrities and elite clients.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="
                p-8 rounded-2xl bg-white 
                border border-gray-200 shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl 
              "
            >
              {/* Icon */}
              <div className="
                text-4xl mb-4 p-4 rounded-xl inline-flex 
                bg-gradient-to-br from-gray-100 to-gray-200 
                shadow-inner text-blue-900
              ">
                {s.icon}
              </div>

              <h4 className="mt-4 font-bold text-xl text-blue-900">
                {s.title}
              </h4>

              <p className="mt-3 text-gray-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
