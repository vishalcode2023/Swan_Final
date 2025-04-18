import React from "react";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaLink,
  FaEdit,
  FaUserSecret,
  FaSitemap,
  FaHome,
  FaUsers,
  FaComments,
  FaCogs,
  FaNewspaper,
  FaBrain,
  FaFileAlt,
  FaBookOpen,
  FaImages,
} from "react-icons/fa";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const TermsPage = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800  rounded-lg ">
        <h1 className="text-4xl font-bold mb-10 text-center text-purple-800">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-lg">
          These Terms and Conditions ("Terms") govern your use of the website
          and services provided by <strong>SwanSorter Systems</strong>. By
          accessing or using our website, you agree to be bound by these Terms.
        </p>

        <div className="space-y-10">
          {/* Sections 1-7 unchanged */}
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaGlobe className="mr-2 text-purple-700" />
              1. Use of Our Services
            </h2>
            <p className="text-md">
              You agree to use our services only for lawful purposes and in a
              way that does not infringe the rights of others or restrict their
              use and enjoyment of the website.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaShieldAlt className="mr-2 text-purple-700" />
              2. Intellectual Property
            </h2>
            <p className="text-md">
              All content on this site, including logos, images, text, graphics,
              and software, is the property of SwanSorter Systems and is
              protected by intellectual property laws. You may not copy,
              reproduce, or distribute any part of this site without written
              permission.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaBalanceScale className="mr-2 text-purple-700" />
              3. Limitation of Liability
            </h2>
            <p className="text-md">
              SwanSorter Systems shall not be liable for any direct, indirect,
              incidental, special, or consequential damages resulting from your
              use or inability to use the services.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaLink className="mr-2 text-purple-700" />
              4. Third-Party Links
            </h2>
            <p className="text-md">
              Our site may contain links to third-party websites. We do not
              control these sites and are not responsible for their content or
              any damages resulting from visiting them.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaEdit className="mr-2 text-purple-700" />
              5. Changes to Terms
            </h2>
            <p className="text-md">
              We may update these Terms from time to time. Your continued use of
              the website after any such changes constitutes your acceptance of
              the new Terms.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaUserSecret className="mr-2 text-purple-700" />
              6. Privacy Policy
            </h2>
            <p className="text-md">
              Your use of our services is also governed by our Privacy Policy.
              Please review it to understand our practices.
            </p>
          </section>
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-3 text-gray-900">
              <FaEnvelope className="mr-2 text-purple-700" />
              7. Contact Us
            </h2>
            <p className="text-md mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" />
              <a
                href="mailto:info@swansorter.com"
                className="text-blue-600 underline"
              >
                info@swansorter.com
              </a>
            </p>
            <p className="text-md flex items-center">
              <FaPhone className="mr-2 text-green-600" />
              +91 99868 99129
            </p>
          </section>

          {/* Sitemap as cards */}
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-6 text-gray-900">
              <FaSitemap className="mr-2 text-purple-700" />
              8. Sitemap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: FaHome, label: "Home", href: "/" },
                { icon: FaBookOpen, label: "Solutions", href: "/Solutions" },
                { icon: FaUsers, label: "About Us", href: "/Company" },
                { icon: FaImages, label: "Gallery", href: "/Gallery" },
                { icon: FaComments, label: "Feedback", href: "/Feedback" },
                { icon: FaCogs, label: "Services", href: "/Services" },
                { icon: FaNewspaper, label: "Blogs", href: "/Blogs" },
                { icon: FaUsers, label: "Our Team", href: "/Team" },
                { icon: FaBrain, label: "R&D", href: "/R&D" },
                {
                  icon: FaShieldAlt,
                  label: "Privacy Policy",
                  href: "/PrivacyPolicy",
                },
                {
                  icon: FaFileAlt,
                  label: "Terms & Conditions",
                  href: "/Terms",
                },
                { icon: FaEnvelope, label: "Contact Us", href: "/Contact" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition"
                  >
                    <Icon className="text-purple-700 text-2xl mr-3" />
                    <span className="text-gray-800 font-medium">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </div>

        <p className="text-sm text-gray-500 mt-12 text-center">
          Last updated: April 18, 2025
        </p>
      </div>
      <Footerpage/>
    </>
  );
};

export default TermsPage;
