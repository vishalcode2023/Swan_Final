import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
  "/img8.jpeg",
  "/img9.jpeg",
  "/img10.jpeg",
  "/img11.jpeg",
  "/img12.jpeg",
  "/img13.jpeg",
];

const AboutUsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* ✅ Heading - Responsive Centered */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
        Our Approach to <span className="text-green-500">Sorting</span> is Built
        for <span className="text-blue-500">Precision, Speed,</span> and{" "}
        <span className="text-purple-500">Reliability.</span>
      </h1>

      {/* ✅ Layout Grid (Mobile -> Column, Desktop -> Row) */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl space-y-10 lg:space-y-0 lg:space-x-16">
        {/* 🔹 Left Section (Text) */}
        <motion.div
          className="flex flex-col space-y-8 w-full lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300">
            <h2 className="text-5xl font-bold text-green-400 absolute -top-6 left-4 opacity-30">
              01
            </h2>
            <h2 className="text-xl font-bold text-gray-800">
              Material Feeding
            </h2>
            <p className="text-gray-600">
              Raw materials like grains, pulses, and plastics are fed into the
              machine through a hopper.
            </p>
          </div>

          <div className="relative p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300">
            <h2 className="text-5xl font-bold text-green-400 absolute -top-6 left-4 opacity-30">
              02
            </h2>
            <h2 className="text-xl font-bold text-gray-800">
              Camera and Sensor Detection
            </h2>
            <p className="text-gray-600">
              High-speed cameras and AI-powered sensors analyze each material
              particle.
            </p>
          </div>
        </motion.div>

        {/* 🔹 Center Image (Looping) */}
        <motion.div
          className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl border border-gray-300"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="AI Sorting Process"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* 🔹 Right Section (Text) */}
        <motion.div
          className="flex flex-col space-y-8 w-full lg:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300">
            <h2 className="text-5xl font-bold text-green-400 absolute -top-6 left-4 opacity-30">
              03
            </h2>
            <h2 className="text-xl font-bold text-gray-800">
              Collection and Sorting Output
            </h2>
            <p className="text-gray-600">
              The sorted materials are collected into different bins based on
              quality and type.
            </p>
          </div>

          <div className="relative p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300">
            <h2 className="text-5xl font-bold text-green-400 absolute -top-6 left-4 opacity-30">
              04
            </h2>
            <h2 className="text-xl font-bold text-gray-800">
              Quality Control & Adjustment
            </h2>
            <p className="text-gray-600">
              Operators can adjust sensitivity settings based on material
              requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
