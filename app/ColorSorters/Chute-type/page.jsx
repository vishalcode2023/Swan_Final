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
    name: " Swan 1 chute 64 channel",
    image: "/img3.jpg",
    description:
      "Introducing Falcon Max – maximum performance, maximum precision.",
    features: [
      "AI-enhanced color sorting",
      "Low energy consumption",
      "Built-in IoT diagnostics",
      "Modular conveyor system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_8Chute_512.pdf",
    DrawingsLink: "/pdfDrawings/SS64R-00 AI Reverse cabin drawing.PDF",
  },
  {
    name: " Swan 1 chute 64 channel MM/SS frame",
    image: "/img12.jpeg",
    description:
      "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Swan_RGB_AI_1Chute.pdf",
    DrawingsLink: "/pdfDrawings/SS64R-00 AI Reverse cabin drawing.PDF",
  },
  {
    name: " Swan 1 chute 64 channel",
    image: "/img7.jpeg",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SpectraPro.pdf",
    DrawingsLink: "/pdfDrawings/SS64R-00 AI Reverse cabin drawing.PDF",
  },
  {
    name: " Swan  2 chute 128 channel box type",
    image: "/img5.jpeg",
    description:
      "Compact size with robust sorting capabilities for small-scale operations.",
    features: [
      "Compact design",
      "Touch screen control",
      "Easy maintenance access",
      "Affordable pricing for startups",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SwiftMini_Brochure.pdf",
    DrawingsLink: "/pdfDrawings/SS128R-00 AI Reverse cabin drawing.pdf",
  },
  {
    name: "Swan  2 chute 128 channel box type",
    image: "/img5.png",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Midlevel_Sorting_Powerhouse.pdf",
    DrawingsLink: "/pdfDrawings/SS128R-00 AI Reverse cabin drawing.pdf",
  },
  {
    name: " Swan  3 chute 192 channel",
    image: "/img6.jpeg",
    description:
      "Extended capacity for larger grains and multi-sorting functions.",
    features: [
      "Multi-mode sorting",
      "Grain-type auto detection",
      "Smart data logging",
      "Auto calibration feature",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_3Chute.pdf",
    DrawingsLink: "/pdfDrawings/SS192R-00 AI Reverse cabin drawing.pdf",
  },
  {
    name: "Swan 5 chute 320 channel",
    image: "/img4.jpeg",
    description: "We are well known as the reputed organization...",
    features: [
      "Ultra-fast sorting speed",
      "AI-powered defect detection",
      "Multi-material processing capability",
      "Intuitive touch-screen interface",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_5Chute_320.pdf",
    DrawingsLink: "/pdfDrawings/SS256R-00 AI Reverse cabin drawing.PDF",
  },
  {
    name: "Swan  8 chute 512 channel",
    image: "/img8.jpeg",
    description:
      "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SwanUltra_Brochure.pdf",
    DrawingsLink: "/pdfDrawings/SS320R-00 AI Reverse cabin drawing.PDF",
  },
  {
    name: "Swan 5RGB Ai 10 chute 640 channel",
    image: "/img10.jpeg",
    description:
      "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_10Chute_640.pdf",
    DrawingsLink: "/pdfDrawings/SS448R-00 AI Reverse cabin drawing.PDF",
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
