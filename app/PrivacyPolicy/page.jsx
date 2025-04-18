"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  BookOpen,
  FileText,
  Users,
  Settings,
  Mail,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Gavel } from "lucide-react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const Section = ({ title, children, whiteBg = false }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-8">
      <motion.button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between text-left text-xl font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300
                           ${
                             whiteBg
                               ? "text-gray-900 bg-white/90 hover:bg-white/95 border border-white/10"
                               : "text-white bg-gray-800/90 hover:bg-gray-700/90 border border-gray-700/50"
                           }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center gap-2">
          {title === "1. Data Controller" && <Users className="w-6 h-6" />}
          {title === "2. What Data Do We Collect?" && (
            <FileText className="w-6 h-6" />
          )}
          {title === "3. Purposes of Data Processing" && (
            <CheckCircle className="w-6 h-6" />
          )}
          {title === "4. Legal Basis for Data Processing" && (
            <Gavel className="w-6 h-6" />
          )}
          {title === "5. Data Sharing" && <Users className="w-6 h-6" />}
          {title === "6. Data Retention Period" && (
            <BookOpen className="w-6 h-6" />
          )}
          {title === "7. User Rights" && <ShieldCheck className="w-6 h-6" />}
          {title === "8. Data Security" && <ShieldCheck className="w-6 h-6" />}
          {title === "9. Cookies" && <Settings className="w-6 h-6" />}
          {title === "10. Contact Information" && <Mail className="w-6 h-6" />}

          {title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`mt-4 p-6 rounded-xl ${
              whiteBg
                ? "bg-white/90 text-gray-900 border border-white/10"
                : "bg-white/90 text-gray-700/50"
            }`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 sm:p-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold mb-8 text-center text-gray-700"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-12 text-gray-700 text-sm sm:text-base text-center max-w-3xl mx-auto"
          >
            This Privacy Policy outlines how SwanSorter Systems uses and
            protects your personal data through the website. We comply with GDPR
            and respect your privacy rights.
          </motion.p>

          <AnimatePresence>
            <Section title="1. Data Controller" whiteBg>
              <p className="text-gray-700">
                The data controller is SwanSorter Systems. For any inquiries,
                contact us at{" "}
                <a
                  href="mailto:privacy@novatech.io"
                  className="text-blue-600 hover:text-blue-500 transition-colors underline"
                >
                  info@swansorter.com
                </a>
                .
              </p>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="2. What Data Do We Collect?" whiteBg>
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  a) Automatically Collected Data
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li className="text-gray-700">
                    <span className="font-medium">Google Analytics</span> – for
                    website traffic analysis
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Google Tag Manager</span> – to
                    manage and monitor user behavior
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  b) Data Collected via Forms
                </h3>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li className="text-gray-700">
                    <span className="font-medium">First Name</span>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Email Address</span>
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Location</span>
                  </li>
                </ul>
              </div>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="3. Purposes of Data Processing" whiteBg>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li className="text-gray-700">
                  <span className="font-medium">
                    Traffic Analysis & Website Optimization
                  </span>
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">
                    Responding to Contact Form Inquiries
                  </span>
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Marketing Communications</span>{" "}
                  (if consented)
                </li>
              </ul>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="4. Legal Basis for Data Processing" whiteBg>
              <p className="text-gray-700">
                We will only process your data based on the legal grounds of
                consent, performance of a contract, legal obligation, or other
                applicable legal basis as outlined in the GDPR. In cases where
                consent is required, we will ensure that it is explicitly obtained
                before any data is collected or processed.
              </p>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="5. Data Sharing" whiteBg>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li className="text-gray-700">
                  <span className="font-medium">Partner Entities</span> – such as
                  analytics providers
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Authorized Entities</span> – when
                  legally required
                </li>
              </ul>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="6. Data Retention Period" whiteBg>
              <p className="text-gray-700">
                Data is retained only as long as necessary to fulfill the stated
                purposes or as required by law.
              </p>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="8. Data Security" whiteBg>
              <p className="text-gray-700">
                We implement industry-standard security measures including
                encryption, firewalls, and regular audits.
              </p>
            </Section>
          </AnimatePresence>

          <AnimatePresence>
            <Section title="9. Contact Information" whiteBg>
              <p className="text-gray-700">
                For privacy-related questions, please contact us at{" "}
                <a
                  href="mailto:info@swansorter.com"
                  className="text-blue-600 hover:text-blue-500 transition-colors underline"
                >
                  info@swansorter.com
                </a>
                .
              </p>
            </Section>
          </AnimatePresence>
        </div>
      </div>
      <Footerpage />
    </>
  );
};

export default page;
