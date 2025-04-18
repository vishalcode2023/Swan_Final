import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022",
    text: "New innovation in color sorter technology.",
    highlight: true,
  },
  {
    year: "2018",
    text: "Upgraded to HD RGB Colour sensor-based sorter machine and FPGA-based processor systems.",
  },
  {
    year: "2016",
    text: "RGB Colour camera sensor-based sorter machine introduced.",
    highlight: true,
  },
  {
    year: "2014",
    text: "Swan Sorter Systems Pvt Ltd established.\nMonochrome camera-based sorter machine released.",
  },
];

const OurAims = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white min-h-screen px-4 sm:px-6 py-5">
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-xl inline-block">
            Scalability & Efficiency
          </span>{" "}
          Ensuring our solutions grow with evolving needs and impact
        </h1>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:gap-12 md:grid-cols-2">
        {/* Our Mission */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-purple-600">
            Quality Standards
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Swan Sorter is committed to providing high-quality products and
            services that meet customer requirements with relevant industry
            standards, ensuring long-term commitments and customer satisfaction.
          </p>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="mt-4 text-white text-opacity-90 text-lg">
            To become the leader in manufacturing of color sorters as per
            international standards and generate global demand for color sorter
            machines.
          </p>
        </motion.div>
      </div>

      {/* Growth Timeline Section */}
      <section className="py-20 px-6">
        <div className="text-center">
          <motion.h2
            className="text-[#1c4366] text-4xl font-bold uppercase bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg inline-block"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Growth
          </motion.h2>
        </div>

        <div className="relative mt-12 mx-auto max-w-5xl">
          {/* Timeline Connector (for large screens) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-r from-green-500 to-blue-500 h-full hidden md:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`md:flex items-center md:justify-between ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Item */}
                <div
                  className={`md:w-5/12 p-6 rounded-lg shadow-lg text-lg ${
                    item.highlight
                      ? "bg-white text-gray-800"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-green-400">
                    {item.year}
                  </h3>
                  <p className="font-semibold">{item.text}</p>
                </div>

                {/* Animated Circle marker (for large screens) */}
                <motion.div
                  className="hidden md:block w-4 h-4 bg-[#1c4366] rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>

                {/* Empty div for spacing in large screens */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Statistics Section */}
      <a href="/Solutions" className="block">
        <div className="w-full bg-gradient-to-r from-green-100 to-blue-100 py-3 my-3 shadow-lg rounded-lg">
          {/* Text Marquee */}
          <Marquee speed={50} pauseOnHover={true} gradient={false}>
            <div className="text-center mx-10 text-green-700 font-extrabold text-3xl flex items-center gap-2">
              🚀 1500+
              <span className="text-gray-700 font-medium text-xl">
                Sorter Machines Installed
              </span>
            </div>
            <div className="text-center mx-10 text-blue-700 font-extrabold text-3xl flex items-center gap-2">
              ⏳ 16+ Years
              <span className="text-gray-700 font-medium text-xl">
                Of Combined Experience
              </span>
            </div>
            <div className="text-center mx-10 text-purple-700 font-extrabold text-3xl flex items-center gap-2">
              👨‍💻 45+ Highly
              <span className="text-gray-700 font-medium text-xl">
                Qualified Team of Engineers
              </span>
            </div>
          </Marquee>
        </div>
      </a>
    </div>
  );
};

export default OurAims;
