"use client";

import React, { useState, useEffect } from "react";
import { HiPhone, HiMail, HiPencil, HiChevronUp } from "react-icons/hi";

const ContactSidebar = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed right-0 z-30 space-y-4 transform -translate-y-1/2 top-1/2 lg:top-[60%] md:top-[50%] sm:top-[55%]">
      {/* Toggle More Icons (Visible on Mobile) */}
      <div
        onClick={() => setShowMore((prev) => !prev)}
        className="bg-white shadow-lg rounded-l-full p-3 hover:bg-gray-700 hover:text-white transition-all cursor-pointer block lg:hidden"
      >
        <HiChevronUp className="w-6 h-6 transition-transform duration-300" />
      </div>

      {/* Icons Section */}
      {showMore && (
        <div className="space-y-3 transition-all duration-300 animate-fadeIn">
          {/* Phone */}
          <div className="group relative flex items-center">
            <a
              href="tel:+919986899129"
              className="bg-white shadow-lg rounded-l-full p-3 hover:bg-green-500 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            >
              <HiPhone className="w-6 h-6 transition-transform duration-300 group-hover:animate-pulse" />
            </a>
            <div className="absolute right-20 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-4 transition-all duration-300 bg-green-500 text-white text-sm rounded-full shadow-xl px-6 py-2 font-semibold whitespace-nowrap min-w-[170px] text-center">
              Contact us: +91 99868 99129
            </div>
          </div>

          {/* Email */}
          <div className="group relative flex items-center">
            <a
              href="mailto:info@swansorter.com"
              className="bg-white shadow-lg rounded-l-full p-3 hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            >
              <HiMail className="w-6 h-6 transition-transform duration-300 group-hover:animate-pulse" />
            </a>
            <div className="absolute right-20 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-4 transition-all duration-300 bg-blue-500 text-white text-sm rounded-full shadow-xl px-6 py-2 font-semibold whitespace-nowrap min-w-[180px] text-center">
              info@swansorter.com
            </div>
          </div>

          {/* Leave a Message */}
          <div className="group relative flex items-center">
            <a
              href="/Orders"
              className="bg-white shadow-lg rounded-l-full p-3 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110 cursor-pointer"
            >
              <HiPencil className="w-6 h-6 transition-transform duration-300 group-hover:animate-pulse" />
            </a>
            <div className="absolute right-20 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-4 transition-all duration-300 bg-purple-500 text-white text-sm rounded-full shadow-xl px-6 py-2 font-semibold whitespace-nowrap min-w-[150px] text-center">
              Leave a message
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSidebar;
