"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "@/app/Components/NavbarLinks/Navbar";
import Footerpage from "@/app/Components/LandingPages/Footerpage";
import ChatBot from "@/app/Components/ChatBot/ChatBot";
import AutoPopupChat from "@/app/Components/LandingPages/AutoComponentspop";
import ContactSidebar from "@/app/Components/LandingPages/ContactSidebar";

const products = [
  {
    name: "Swan 300 belt type MS frame",
    image: "/img1.Jpeg",
    description:
      "Experience next-level precision with the Swan RGB Tri Chromatic CCD Camera...",
    features: [
      "5400* 3 pixels RGB CCD Camera Technology",
      "High power LED illumination",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Stable sorter accuracy by improved collection efficiency",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting.pdf",
  },
  {
    name: " Swan 300 MM belt type",
    image: "/img2.jpeg",
    description: "We are well known as the reputed organization...",
    features: [
      "pixels RGB CCD Camera Technology",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Smart Ejector Technology",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting.pdf",
  },
  {
    name: " Swan 600 MM belt type machine ",
    image: "/img11.jpeg",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting",
  },
];

const Page = () => {
  return (
    <div>
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Navbar className="w-full max-w-7xl mx-auto px-6" />

        <div className="space-y-16 max-w-6xl mx-auto mt-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              {/* TEXT SECTION */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.a
                    href={product.brochureLink}
                    download
                    className="w-full sm:w-54 text-center mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-purple-700 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload className="text-xl" />
                    Brochure
                  </motion.a>

                  <motion.a
                    href={product.DrawingsLink}
                    download
                    className="w-full sm:w-54 text-center mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-purple-700 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload className="text-xl" />
                    Drawings
                  </motion.a>
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div className="flex-1 h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="">
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
