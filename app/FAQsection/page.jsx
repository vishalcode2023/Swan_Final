"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const faqs = [
  {
    question: "Do you offer remote monitoring or IoT features?",
    answer:
      "Yes, our latest models come with IoT-enabled remote monitoring for real-time performance tracking.",
  },
  // ... your existing FAQs

  // New FAQs from document:
  {
    question: "What is Swan Sorter System Pvt Ltd?",
    answer:
      "Swan Sorter System Pvt Ltd is a leading manufacturer of AI-powered sorting machines designed to improve efficiency and accuracy in material sorting across various industries.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our head office is in Bangalore, India, and we operate in multiple locations, (Pan India)",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve industries such as agriculture, food processing, recycling, plastics, mining, and more.",
  },
  {
    question: "How long has Swan Sorter been in business?",
    answer:
      "We have been in the industry for several years, continuously innovating to provide next-generation sorting technology.",
  },
  {
    question: "What materials can your machines sort?",
    answer:
      "Our sorters can handle a wide range of materials, including:\n• Grains & Pulses (Rice, Wheat, Lentils, etc.)\n• Nuts & Dry Fruits\n• Plastics & Polymers\n• Recyclables & Waste Management\n• Metals & Minerals",
  },
  {
    question: "What is the accuracy level of your sorting machines?",
    answer:
      "Our machines offer high-precision sorting with up to 99.9% accuracy, reducing waste and improving productivity.",
  },
  {
    question: "How do your machines compare to traditional sorting methods?",
    answer:
      "Unlike traditional sorting, our AI-based sorters provide faster, more precise, and automated solutions, reducing human effort and errors.",
  },
  {
    question: "How can I purchase a sorting machine from Swan Sorter?",
    answer:
      "You can contact our sales team through our website or call us at 8792073059 for product inquiries and quotations.",
  },
  {
    question: "Do you offer demonstrations before purchase?",
    answer:
      "Yes, we provide live demonstrations and testing to ensure our machines meet your requirements.",
  },
  {
    question: "What is the price range of your sorting machines?",
    answer:
      "The price depends on the machine type, features, and customization. Contact us for a detailed quote.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "We can discuss financing options based on your needs. Get in touch with our sales team for more details.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, our experts provide on-site installation and setup for all sorting machines.",
  },
  {
    question: "Do you offer after-sales support?",
    answer:
      "Yes, we provide 24/7 customer support, maintenance, and troubleshooting to ensure smooth operation.",
  },
  {
    question: "What kind of maintenance do your machines require?",
    answer:
      "Regular cleaning, software updates, and routine check-ups help maintain machine performance.",
  },
  {
    question: "Can I get spare parts for my sorting machine?",
    answer:
      "Yes, we offer genuine spare parts and accessories for all our machines.",
  },
  {
    question: "Do you provide operator training?",
    answer:
      "Yes, we provide training programs to help your team operate and maintain the machines efficiently.",
  },
  {
    question: "What software do your sorting machines use?",
    answer:
      "Our machines run on AI-driven software with self-learning capabilities to improve sorting accuracy over time.",
  },
  {
    question: "What happens if the machine malfunctions?",
    answer:
      "Our support team can diagnose issues remotely or send an engineer for on-site repairs if needed.",
  },
  {
    question: "How can I apply for a job at Swan Sorter System Pvt Ltd?",
    answer:
      "You can check our Careers page or contact our HR team for job openings.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via phone, email, or our website’s contact form. Visit our Contact Us page for more details.",
  },
];



const page = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar/>
      <section className="bg-white py-16 px-4 sm:px-8 md:px-16 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 font-medium text-base sm:text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-white text-gray-600 font-bold border-t border-gray-200 whitespace-pre-line"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      <ContactSidebar/>
      <ChatBot/>
      <AutoPopupChat/>
      <Footerpage/>
    </div>
  );
};

export default page;
