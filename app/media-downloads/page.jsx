"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import VideoSection from "../Components/LandingPages/VideoSection";
import OurClients from "../Components/LandingPages/OurClients";

const brochures = [
  {
    title: "AI Sorting Machine Brochure",
    description: "Next-gen precision with AI technology.",
    image: "/480532064_17858754729363518_6554481134940405817_n.jpg",
    file: "/PdfFolder/SwanSorter-Brochure_V2 -Buyers (Final).pdf",
  },
  {
    title: "Industrial Automation Catalog",
    description: "Explore our industrial automation solutions.",
    image: "/480900357_17859032925363518_2686052875078245082_n.jpg",
    file: "/PdfFolder/SwanSorter-Brochure_V2.pdf",
  },
  {
    title: "Smart Conveyor Systems",
    description: "Optimized flow with smart conveyors.",
    image: "/482459461_17860304673363518_6347099990345907053_n.jpg",
    file: "/PdfFolder/SwanSorter-Brochure_V2.pdf",
  },
];

const MediaPage = () => {
  return (
    <div className="w-full min-h-full">
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="w-full  py-10 text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold px-4 rounded-2xl">
              Media & Brochures
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Explore and download our latest marketing materials, catalogs, and
            more.
          </p>
        </div>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:py-16 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {brochures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">
                  {item.description}
                </p>
                <a
                  href={item.file}
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-full  transition"
                >
                  <FaDownload className="text-lg" /> Download PDF
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
      {/* Our Team Section */}
      {/* Our Team Section */}
      {/* Our Team Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-1 rounded-2xl">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            A passionate group of innovators, engineers, and visionaries driving
            the future of AI and automation.
          </p> */}
          <OurClients/>

          <VideoSection/>
          
        </div>
      </section>
      <ContactSidebar/>
      <ChatBot/>
      <AutoPopupChat/>   
      <Footerpage />
    </div>
  );
};

export default MediaPage;
