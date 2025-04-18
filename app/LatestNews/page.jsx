"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Tag, User } from "lucide-react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EventPage = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen bg-gradient-to-r from-gray-100 to-white">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Navbar />
      </motion.div>
      
      <div className="w-full max-w-5xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/img1.jpeg" // Replace with actual image path
              alt="Event Banner"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Global Innovations at PRSE 2025 – Join Us at RAI Amsterdam
            </h2>

            <div className="flex items-center text-gray-600 text-sm mt-3">
              <User className="w-4 h-4 mr-2" />
              <span>Author: Monika Pawlińska</span>
            </div>

            <div className="flex items-center text-gray-600 text-sm mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date: 12/02/2025</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap mt-4 gap-2">
              {["Event", "Recycling"].map((tag) => (
                <span
                  key={tag}
                  className="bg-green-600 text-white font-bold px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-gray-800 p-6 mt-6 rounded-lg"
        >
          <h2 className="text-4xl font-bold "><span className="text-purple-600">Introduction</span></h2>
          <p className="mt-4 text-lg">
            Join us at PRSE 2025 in Amsterdam on April 1st and 2nd to explore cutting-edge innovations in recycling technology. At our booth K42, experience live demonstrations of advanced sorting systems designed to optimize recycling processes. Our experts will be available to discuss the latest sustainability solutions and how they can enhance operational efficiency. Stop by for a coffee, connect with industry professionals, and discover the future of recycling technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-gray-700"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Read also</h2>
          <div className="flex overflow-x-scroll space-x-4 p-4 rounded-lg">
            {[
              {
                img: "/photo-1513757378314-e46255f6ed16.avif",
                title: "What is aflatoxin, and how optical sorting can help to reduce infection?",
              },
              {
                img: "/photo-1513757378314-e46255f6ed16.avif",
                title: "Sorting challenges of the Milling and Grain Processing Industry",
              },
              {
                img: "/photo-1513757378314-e46255f6ed16.avif",
                title: "Understanding Chute vs Belt Optical Color Sorters: Key Differences and Applications",
              },
            ].map((article, index) => (
              <div key={index} className="min-w-[300px] text-gray-900 p-4 rounded-lg shadow-lg">
                <Image
                  src={article.img}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-3">{article.title}</h3>
                <p className="text-sm text-gray-400 mt-2">Article</p>
                <a href="#" className="text-blue-400 text-sm mt-2 inline-block">Read more &gt;</a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <ContactSidebar/>
      <Footerpage/>
    </div>
  );
};

export default EventPage;