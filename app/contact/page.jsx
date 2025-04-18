"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ChatBot from "../Components/ChatBot/ChatBot";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Page = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Navbar />
      </motion.div>

      <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center p-6 sm:p-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-bold text-blue-900 text-center"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-gray-700 mt-2 text-center max-w-xl"
        >
          Do you have any questions? Feel free to contact us.
        </motion.p>

        <motion.div
          className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="bg-white shadow-xl rounded-lg p-6 text-gray-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-800">
              Manufacturing Unit
            </h2>
            <div className="flex items-center mt-2">
              <MapPin className="w-6 h-6 text-blue-500" />
              <p className="ml-2 text-sm sm:text-base">
                #74/2, Opposite to Orchids International School,
                Hommadevanahalli, Begur Hobli, Bengaluru, Karnataka-560083
              </p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 text-gray-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-800">
              Contact Number
            </h2>
            <div className="flex items-center mt-2">
              <Phone className="w-6 h-6 text-blue-500" />
              <p className="ml-2 text-sm sm:text-base">
                <strong>Shijo George - Director</strong>
                <br />
                +91 8951 385 814, +91 9483 445 471
              </p>
            </div>
            <div className="flex items-center mt-2">
              <Phone className="w-6 h-6 text-blue-500" />
              <p className="ml-2 text-sm sm:text-base">
                <strong>Vinayaka T - Director</strong>
                <br />
                +91 9986 899 129, +91 9148 681 328
              </p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 text-gray-700 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-800">
              Email Address
            </h2>
            <div className="flex items-center mt-2">
              <Mail className="w-6 h-6 text-blue-500" />
              <p className="ml-2 text-sm sm:text-base">
                <strong>info@swansorter.com</strong>
              </p>
            </div>
            {/* <div className="flex items-center mt-2">
              <Mail className="w-6 h-6 text-blue-500" />
              <p className="ml-2 text-sm sm:text-base">
                <strong>info@swansorter.com</strong>
              </p>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-3xl mt-10"
        >
          <ContactForm />
        </motion.div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <ContactSidebar/>
        <AutoPopupChat />
        <ChatBot />
        <Footerpage />
      </motion.div>
    </div>
  );
};

export default Page;