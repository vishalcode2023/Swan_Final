import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BusinessGrowthBanner = () => {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center bg-gradient-to-r from-gray-100 to-white text-white px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl px-4 text-gray-800"
      >
        <h2 className="text-4xl  sm:text-2xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          Elevate Your{" "}
          <span className="text-[#8E54FF] relative inline-block">
            Success Story
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
          </span>
        </h2>

        <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6">
          Get the best solutions to accelerate your growth and scale up your
          business.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md transition duration-300"
        >
          <Link href="/contact">Contact Us</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BusinessGrowthBanner;
