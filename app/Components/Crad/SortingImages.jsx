import { useState } from "react";
import { motion } from "framer-motion";

const categories = {
  "Beans & Pulses": {
    input: "/sorting-material-Beans-input.webp",
    accept: "/sorting-material-Beans-accept.webp",
    reject: "/sorting-material-Beans-reject.webp",
  },
  Coffee: {
    input: "/Coffee-Accept.webp",
    accept: "/Coffee-Accept.webp",
    reject: "/Coffee-Reject.webp",
  },
  Nuts: {
    input: "/sorting-material-Almonds-Input.webp",
    accept: "/sorting-material-Almonds-Accept.webp",
    reject: "/sorting-material-Almonds-Reject.webp",
  },
  Rice: {
    input: "/sorting-material-Rice-Input.webp",
    accept: "/sorting-material-Rice-Accept.webp",
    reject: "/sorting-material-Rice-reject.webp",
  },
  "Seed & Grains": {
    input: "/sorting-material-Mustard-seeds-Imput.webp",
    accept: "/sorting-material-Mustard-seeds-Accept.webp",
    reject: "/sorting-material-Mustard-seeds-Reject.webp",
  },
};

export default function SortingImages() {
  const [selectedCategory, setSelectedCategory] = useState("Beans & Pulses");

  return (
    <motion.div
      className="w-full max-w-5xl mt-12 bg-white rounded-xl px-4 md:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.h2
        className="text-2xl md:text-4xl my-5 font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="whitespace-nowrap bg-gradient-to-r from-green-400 to-blue-400 text-white py-1 px-2 rounded-xl">
          Sorting Process Visualization
        </span>
      </motion.h2>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-col md:flex-row md:flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {Object.keys(categories).map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full md:w-auto px-3 md:px-4 py-2 rounded-lg text-gray-800 md:text-sm font-semibold transition-all text-center ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Images Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {["input", "accept", "reject"].map((type) => (
          <motion.div
            key={type}
            className="flex flex-col items-center bg-gray-100 p-3 md:p-4 rounded-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className={`text-sm md:text-lg font-bold mb-2 ${
                type === "input"
                  ? "text-blue-600"
                  : type === "accept"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {type.toUpperCase()}
            </p>
            <img
              src={categories[selectedCategory][type]}
              alt={`${type} image`}
              className="w-full h-48 md:h-56 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
