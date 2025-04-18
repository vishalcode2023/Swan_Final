"use client";

import React from "react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import {
  FaCameraRetro,
  FaMicrochip,
  FaEye,
  FaCogs,
  FaRobot,
  FaCloud,
  FaRocket,
  FaPalette,
  FaCamera,
  FaBrain,
} from "react-icons/fa";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const RDPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Research & Development at SwanSorter Systems
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Pioneering AI-powered innovations for next-generation color sorter
          machines.
        </p>
        {/* <img
          src="/images/hero-innovation.jpg"
          alt="Innovation Banner"
          className="mx-auto mt-8 rounded-lg shadow-lg max-h-80 object-cover"
        /> */}
      </section>

      {/* Ongoing Product Development */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Ongoing Product Development
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          <img
            src="/ai-technology-microchip-background-digital-transformation-concept_53876-124669.webp"
            alt="AI Sorter"
            className="rounded-lg shadow-md"
          />
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Our R&D team is constantly innovating with AI, machine learning,
              and image processing to build the next generation of intelligent
              sorters. From defect detection to adaptive sorting, we focus on
              precision, speed, and industry adaptability.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>RGB & HD camera integration</li>
              <li>FPGA-based real-time processing</li>
              <li>AI-based defect recognition</li>
              <li>Simultaneous multi-variety sorting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline of Product Evolution */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Timeline of Innovation
        </h2>
        {/* <img
    src="/img1.jpeg"
    alt="Timeline"
    className="mx-auto mb-8 rounded-lg shadow-md max-h-72 object-cover"
  /> */}
        <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
          <div className="flex items-start gap-4">
            <FaRocket className="text-3xl text-green-600 mt-1" />
            <div>
              <h3 className="font-bold text-xl">
                2014 – The Beginning of Excellence
              </h3>
              <p>
                Launched Monochrome Camera-Based Sensor Sorter Machine –
                redefining accuracy standards.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPalette className="text-3xl text-pink-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl">
                2016 – RGB Sensor Revolution
              </h3>
              <p>
                Introduced RGB Color Camera Sensor for improved differentiation
                and sorting capabilities.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCamera className="text-3xl text-blue-500 mt-1" />
            <div>
              <h3 className="font-bold text-xl">
                2018 – HD Camera Integration
              </h3>
              <p>
                Integrated HD RGB sensors & FPGA processing for enhanced speed
                and defect detection.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaBrain className="text-3xl text-purple-600 mt-1" />
            <div>
              <h3 className="font-bold text-xl">
                2022 – AI & Image-Based Sorting
              </h3>
              <p>
                Launched image-based sorter with real-time analytics &
                intelligent processing algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Innovations */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Core Features Driving Innovation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              feature: "5400 × 3-Pixel RGB CCD Camera Technology",
              icon: (
                <FaCameraRetro className="text-4xl text-blue-500 mb-4 mx-auto" />
              ),
            },
            {
              feature: "Proprietary FPGA-Based Image Processing",
              icon: (
                <FaMicrochip className="text-4xl text-green-500 mb-4 mx-auto" />
              ),
            },
            {
              feature: "Double-Sided Viewing System",
              icon: <FaEye className="text-4xl text-yellow-500 mb-4 mx-auto" />,
            },
            {
              feature: "Smart Ejector Technology",
              icon: (
                <FaCogs className="text-4xl text-purple-500 mb-4 mx-auto" />
              ),
            },
            {
              feature: "AI-powered Self-Diagnostics",
              icon: <FaRobot className="text-4xl text-red-500 mb-4 mx-auto" />,
            },
            {
              feature: "Cloud-Based Monitoring",
              icon: <FaCloud className="text-4xl text-sky-500 mb-4 mx-auto" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="font-semibold text-lg text-blue-600">
                {item.feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* R&D Functional Teams Description */}
      <section className="py-14 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          How Our R&D Teams Innovate
        </h2>
        <div className="max-w-5xl mx-auto text-gray-700 space-y-6 text-lg leading-relaxed">
          <p>
            At Swan Sorter, our Research and Development (R&D) team is the
            powerhouse behind the innovation driving our food sorting machines.
            Comprising specialized divisions including the software, FPGA, and
            hardware teams, each unit collaborates seamlessly to create
            cutting-edge solutions that redefine food sorting efficiency.
          </p>

          <p>
            <strong>AI Expertise of the Software Team:</strong> Our software
            team pioneers the integration of Artificial Intelligence (AI)
            algorithms into our sorting machines. Leveraging advanced AI
            techniques such as machine learning and computer vision, our
            software engineers develop algorithms capable of discerning between
            good and damaged food materials with remarkable precision. By
            analyzing factors like size, color, and texture, these algorithms
            enable our machines to make split-second decisions, ensuring only
            the highest quality produce makes it through the sorting process.
          </p>

          <p>
            <strong>FPGA Team's Role in RTL Coding:</strong> Central to the
            operation of our sorting machines is the Field-Programmable Gate
            Array (FPGA), serving as the primary processing unit. The FPGA team
            specializes in Register-Transfer Level (RTL) coding, crafting
            intricate logic circuits that dictate the machine's behavior.
            Through meticulous coding and optimization, they ensure that every
            computational task, from image processing to decision-making, is
            executed swiftly and accurately.
          </p>

          <p>
            <strong>Image Processing Synergy:</strong> Image processing lies at
            the heart of our sorting technology, enabling the identification and
            segregation of undesirable materials. Working in harmony, both the
            software and FPGA teams contribute to this critical function. While
            the software team develops algorithms for initial image analysis,
            the FPGA team implements hardware-accelerated processing to enhance
            speed and efficiency.
          </p>

          <p>
            <strong>Hardware Team's Contribution:</strong> Complementing the
            efforts of the software and FPGA teams, the hardware team plays a
            pivotal role in designing and testing the physical components of our
            sorting machines. From circuit board design to component selection,
            they ensure the robustness and reliability of the machine’s
            infrastructure while facilitating collaboration across teams.
          </p>

          <p>
            In essence, the synergy between our software, FPGA, and hardware
            teams forms the backbone of Swan Sorter’s innovation. Through their
            collective expertise and collaborative spirit, we continue to push
            the boundaries of food sorting technology, delivering solutions that
            redefine industry standards.
          </p>
        </div>
      </section>

      {/* R&D Team Section */}
      <section className="py-14 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Meet Our R&D Experts
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
          <img
            src="/event1.jpg"
            alt="R&D Team"
            className="rounded-lg shadow-md object-cover"
          />
          <div className="text-gray-700 space-y-4">
            <p>
              At the heart of our innovation lies a dedicated R&D team led by
              visionary directors
              <strong> Mr. Shijo George</strong> and{" "}
              <strong>Mr. Vinayaka T.</strong>
              Their leadership ensures that Swan Sorter stays ahead in
              intelligent automation and precision engineering.
            </p>
            <p>
              From software engineers to AI researchers, our multidisciplinary
              team is driven by the passion to redefine the future of sorting
              technology with breakthrough solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Empowering Industries Worldwide
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Partner with SwanSorter to experience innovation at its finest.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
        >
          Get in Touch
        </a>
      </section>
        
      <ContactSidebar/>
      <AutoPopupChat/>
      <ChatBot/>
      <Footerpage />
    </div>
  );
};

export default RDPage;
