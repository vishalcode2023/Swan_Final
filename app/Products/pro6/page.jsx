"use client";
import  Navbar  from "@/app/Components/NavbarLinks/Navbar";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCogs,
  FaSort,
  FaBolt,
  FaCompress,
  FaWeightHanging,
  FaRuler,
} from "react-icons/fa";
import SortingImages from "@/app/Components/Crad/SortingImages";
import AiSorting from "@/app/Components/Crad/AiSorting";
import ServiceSection from "@/app/Components/Crad/ServiceSection";
import ContactForm from "@/app/Components/Crad/ContactForm";
import Footerpage from "@/app/Components/LandingPages/Footerpage";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen text-white overflow-x-hidden">1
      {/* Navbar */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Navbar className="w-full max-w-7xl mx-auto px-6" />
      </motion.div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          className="whitespace-nowrap sm:text-5xl font-extrabold text-gray-800 mb-6 py-2 px-4 rounded-lg text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
        Swan 5 Chute (320 Channels)
        </motion.h1>

        {/* Main Machine Image */}
        <motion.div
          className="w-full flex justify-center mb-8"
          initial="hidden"
          animate="visible"
          variants={scaleUp}
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:w-[500px] lg:w-[600px] xl:w-[700px] transform hover:scale-105 transition duration-300">
            <Image
              src="/img7.jpeg"
              alt="M2 Machine"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Specifications Section */}
        <div className="min-h-screen bg-white text-gray-800 w-full">
          {/* Main Section */}
          <div className="flex flex-col items-center justify-center ">
            {/* Specifications Section */}
            <motion.div
              ref={ref}
              className="px-4 sm:px-6 lg:px-20 w-full"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 text-gray-700">
                Swan <span className="text-purple-500"> Technology </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: Specifications */}
                <motion.div
                  className="p-4 rounded-lg"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: FaCogs, label: "Model", value: "MSXC-120M" },
                      { icon: FaSort, label: "Chutes", value: "2" },
                      { icon: FaBolt, label: "Throughput", value: "0.4 - 2.4 t/h" },
                      { icon: FaCompress, label: "Sorting Accuracy", value: "≥99.9%" },

                      { icon: FaBolt, label: "Power Voltage", value: "180~240V / 50Hz" },
                      { icon: FaCompress, label: "Air Source Pressure", value: "0.6 ~ 0.8 MPa" },
                      { icon: FaWeightHanging, label: "Weight", value: "300 kg" },
                      { icon: FaRuler, label: "Dimensions", value: "940 × 1480 × 1500 mm" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-gray-800 text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="text-green-400 mr-2 text-lg sm:text-xl" />
                        <strong className="text-gray-900">{item.label}:</strong>
                        <span className="ml-2 font-bold">{item.value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Right: Company Info & CTA */}
                <motion.div
                  className="text-center lg:text-left"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                >
                  {/* Logo */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <Image
                      src="/img7.jpeg"
                      alt="Product Logo"
                      width={250}
                      height={40}
                    />
                  </div>
                  {/* Description */}
                  <p className="text-gray-700 font-semibold mb-4 text-sm sm:text-base">
                    Ideal for small-scale processing of agricultural products by
                    farmers, cooperatives, and similar entities. This system
                    effectively rejects moldy, discolored, broken, and other
                    impurities. Precision and output can be adjusted to meet
                    evolving needs.
                  </p>

                  
                </motion.div>
              </div>
            </motion.div>
            <SortingImages/>
            <AiSorting/>
            <ServiceSection/>
            <ContactForm/>
            <Footerpage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
