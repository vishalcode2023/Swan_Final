"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const faqs = [
  {
    question: "Do you offer remote monitoring or IoT features?",
    answer:
      "Yes, our latest models come with IoT-enabled remote monitoring for real-time performance tracking.",
  },
  {
    question: "Can your machines be integrated with existing production lines?",
    answer:
      "Yes, our machines can be seamlessly integrated into existing conveyor systems and production setups.",
  },
  {
    question: "What types of sorting machines do you offer?",
    answer: `We offer AI-powered sorting machines that use next-generation technology to ensure superior accuracy. Our range includes:
    • Optical Sorters
    • Color Sorters
    • Multi-Spectral Sorters
    • Quality Inspection Systems`,
  },
  {
    question: "How do your AI-based sorting machines work?",
    answer:
      "Our machines use Artificial Intelligence (AI), Machine Learning (ML), and advanced imaging technology to detect and separate materials based on color, shape, size, and defects.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-700">
          Frequently Asked <span className="text-[#9253FF]">Questions</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-10 space-y-4 font-bold">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border font-bold border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              <FaChevronDown
                className={`text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 bg-white text-gray-600 border-t border-gray-300"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* View More Button */}
        <div className="flex justify-center pt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-medium px-8 py-4 rounded-full transition duration-300 cursor-pointer"
          >
            <Link href="/FAQsection">View More</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
