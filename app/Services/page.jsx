"use client";

import React from "react";
import { motion } from "framer-motion";
import Footerpage from "../Components/LandingPages/Footerpage";
import Navbar from "../Components/NavbarLinks/Navbar";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const ServicePage = () => {
  const services = [
    {
      title: "Contact Number",
      description: "Reach out to us anytime for direct support and queries.",
      value: "+91 9986899129, +91 9483445471",
      icon: "📞",
      additionalInfo: {
        contacts: [
          { name: "Varsha", number: "9538388146"},
        ],
      },
    },
    {
      title: "Help Desk",
      description: "Available 24/7 to assist with any concerns or troubleshooting.",
      value: "info@swansorter.com",
      icon: "🛠️",
      additionalInfo: {
        contacts: [
          { name: "Sujatha.A", number: "9844015015" },
        ],
      },
    },
    {
      title: "Pre-Sales Consultation",
      description: "Talk to our experts before your purchase for better decisions.",
      value: "info@swansorter.com",
      icon: "💼",
      additionalInfo: {
        contacts: [
          { name: "Alka", number: "9742428946" },
        ],
      },
    },
    {
      title: "Installation Support",
      description: "On-site and remote installation services to get you started quickly.",
      value: "info@swansorter.com",
      icon: "⚙️",
      additionalInfo: {
        contacts: [
          { name: "G. Nagaraj", number: "7829184646" },
        ],
      },
    },
    {
      title: "Repair Services",
      description: "Get quick and efficient repair services for all your machines.",
      value: "info@swansorter.com",
      icon: "🔧",
      additionalInfo: {
        contacts: [
          { name: "Veerabhadra", number: "9986589456" },
        ],
      },
    },
    {
      title: "Online Services",
      description: "Access our services online, anytime and from anywhere for your convenience.",
      value: "info@swansorter.com",
      icon: "🌐",
      additionalInfo: {
        contacts: [
          { name: "Harish", number: "9844071071" },
        ],
      },
    },
    {
      title: "Progress Query",
      description: "Check the progress of your order or service request at any time.",
      value: "info@swansorter.com",
      icon: "📊",
    },
    {
      title: "24/7 Support",
      description: "We offer round-the-clock support, available anytime you need us.",
      value: "+91 9986899129",
      icon: "⏰",
    },
    {
      title: "Complete Machine Warranty (1 Year)",
      description: "Enjoy peace of mind with a one-year warranty on your machine.",
      value: "info@swansorter.com",
      icon: "🛡️",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We will help you in every step
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team ensures a seamless experience from your first inquiry to ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <p className="text-gray-800 font-medium whitespace-nowrap">{service.value}</p>

              {service.additionalInfo && (
                <div className="mt-4 text-left">
                  <p className="text-gray-600"> {service.additionalInfo.team}</p>
                  <ul className="text-sm text-gray-600">
                    {service.additionalInfo.contacts.map((contact, idx) => (
                      <li key={idx}>
                        <span className="font-bold">{contact.name}: </span>
                        <span>{contact.number}</span>
                        {contact.email && (
                          <span>
                            {/* (<a href={`mailto:${contact.email}`}>{contact.email}</a>) */}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <ContactSidebar />
      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
};

export default ServicePage;
