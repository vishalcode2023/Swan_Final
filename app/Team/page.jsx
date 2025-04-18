"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import VideoSection from "../Components/LandingPages/VideoSection";

const team = [
  {
    name: "Mr. Shijo George",
    role: "Director – Sales",
    category: "Leadership",
    image: "/partners1.jpeg",
  },
  {
    name: "Mr. Vinayaka T.",
    role: "Director – Technical",
    category: "Leadership",
    image: "partners2.jpeg",
  },
  {
    name: "Varsha",
    role: "Marketing Executive",
    category: "Marketing",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
  {
    name: "G. Nagaraj",
    role: "Marketing Executive",
    category: "Marketing",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },

  {
    name: "Alka",
    role: "Customer Support Lead",
    category: "Marketing",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
  {
    name: "G. Nagaraj",
    role: "Customer Support Lead",
    category: "Marketing",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
  {
    name: "Sujatha.A",
    role: "Customer Support Lead",
    category: "Support",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
  {
    name: "Veerabhadra",
    role: "Customer Support Lead",
    category: "Support",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
  {
    name: "Harish",
    role: "Service Engineer",
    category: "Support",
    image: "/360_F_463667026_B6L8IGy2cgGYdYOkN8hBE55B1zpcVvDc.webp",
  },
];

const categories = {
  Leadership: "Our Visionary Leaders",
  Marketing: "Marketing & Sales Team",
  Support: "Services & Support Team",
};

const TeamPage = () => {
  return (
    <div>
        <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The heart and soul of our company – driving innovation, growth, and
            unmatched customer experience.
          </p>
        </div>

        {Object.keys(categories).map((category, i) => (
          <section key={i} className="mb-16">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">
              {categories[category]}
            </h2>

            <div className="flex flex-wrap justify-center gap-8 max-w-8xl mx-auto">
              {team
                .filter((member) => member.category === category)
                .map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center w-full sm:w-72 md:w-80 lg:w-80"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover mb-4 rounded-xl"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}
      </div>
      <VideoSection/>
      <ContactSidebar/>
      <ChatBot/>
      <AutoPopupChat/>
      <Footerpage/>
    </div>
  );
};

export default TeamPage;
