"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import MaterialPanel from "../Components/LandingPages/Categories";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

// ✅ Your actual solutions array
// const solutions = [
//   {
//     "id": "Agricultural Products Sorting",
//     "title": "Agricultural Products Sorting",
//     "image": "/photo-1501430654243-c934cec2e1c0.avif",
//     "icon": "🌾",
//     "items": [
//       {
//         "name": "Multigrains",
//         "images": [
//           {
//             "src": "/photo-1585536301151-2afb2fb1c960.avif",
//             "title": "Premium Groundnuts",
//             "details": {
//               "points": [
//                 "Rich in protein and healthy fats",
//                 "High in antioxidants and vitamins",
//                 "Commonly used in snacks, oils, and cooking",
//                 "Boosts brain health",
//                 "Used in many cuisines worldwide"
//               ],
//               "description": "Groundnuts are a high-protein legume used in various cuisines and products such as oils, snacks, and butters."
//             }
//           },
//           {
//             "src": "/photo-1610073474647-7b0b80a2f31f.avif",
//             "title": "Premium Cashew Nuts",
//             "details": {
//               "points": [
//                 "Rich in healthy fats, protein, and minerals",
//                 "Used in sweets, snacks, and cooking",
//                 "Rich in antioxidants",
//                 "Supports heart health",
//                 "Popular worldwide"
//               ],
//               "description": "Cashew nuts are nutrient-dense, providing healthy fats, protein, and antioxidants, and are used in a variety of dishes and snacks."
//             }
//           },
//           {
//             "src": "/fg6.webp",
//             "title": "Roasted Fried Gram",
//             "details": {
//               "points": [
//                 "Rich in protein and fiber",
//                 "High in vitamins and minerals",
//                 "Good for digestion",
//                 "Common in Indian dishes",
//                 "Ideal for snacks and cooking"
//               ],
//               "description": "Fried gram, also known as roasted chickpeas, is a healthy snack with high fiber and protein content, commonly used in Indian recipes."
//             }
//           },
//           {
//             "src": "/white-urad-dal.webp",
//             "title": "High-Quality Urad Dal",
//             "details": {
//               "points": [
//                 "Rich in protein, iron, and fiber",
//                 "Common in Indian dals and curries",
//                 "Helps improve digestion",
//                 "Supports heart health",
//                 "Versatile in recipes"
//               ],
//               "description": "Urad dal is a popular legume used in Indian cooking, rich in protein and fiber, often included in dals and curries."
//             }
//           },
//           {
//             "src": "/green-bean-mung-bean-white_147493-76.webp",
//             "title": "High-Quality Green Gram",
//             "details": {
//               "points": [
//                 "High in protein, fiber, and antioxidants",
//                 "Aids in weight management",
//                 "Good for blood sugar control",
//                 "Commonly used in soups and salads",
//                 "Popular in Asian and Indian cuisines"
//               ],
//               "description": "Green gram is a nutritious legume, high in protein and fiber, commonly used in soups, salads, and snacks."
//             }
//           },
//           {
//             "src": "/360_F_288614217_ebFduJmzbCDkgcmA5DL7pO2GDOSZdcU7.webp",
//             "title": "Premium Channa",
//             "details": {
//               "points": [
//                 "Rich in protein and fiber",
//                 "Good for heart health",
//                 "Used in soups, stews, and salads",
//                 "Helps with digestion",
//                 "Common in Indian and Mediterranean dishes"
//               ],
//               "description": "Channa, or chickpeas, are a great source of plant-based protein and are widely used in cooking around the world."
//             }
//           },
//           {
//             "src": "/360_F_61227944_i9jxGjPzeHfCmhjVR7XYrr8NJves68Kf.webp",
//             "title": "Healthy Raisins",
//             "details": {
//               "points": [
//                 "Rich in fiber, antioxidants, and vitamins",
//                 "Used in baking, desserts, and cooking",
//                 "Good for heart health",
//                 "Promotes digestive health",
//                 "Commonly consumed as a snack"
//               ],
//               "description": "Raisins are dried grapes, packed with nutrients and antioxidants, commonly used in cooking, baking, or as a snack."
//             }
//           },
//           {
//             "src": "/360_F_215106928_FuYl9HSXh8rxdVib4SdcigMKLiNJDn5I.webp",
//             "title": "Premium Toor Dal",
//             "details": {
//               "points": [
//                 "Rich in protein and fiber",
//                 "Good for heart health",
//                 "Used in soups and curries",
//                 "Popular in Indian cuisine",
//                 "Helps with digestion"
//               ],
//               "description": "Toor dal is a popular legume used in Indian cooking, packed with protein and fiber, ideal for dals and curries."
//             }
//           },
//           {
//             "src": "/images/remium Rice.jpeg",
//             "title": "Premium Rice",
//             "details": {
//               "points": [
//                 "Rich in carbohydrates and energy",
//                 "Easy to digest",
//                 "Common in many global cuisines",
//                 "Used in a variety of dishes",
//                 "Low in fat"
//               ],
//               "description": "Rice is a staple food worldwide, rich in carbohydrates and energy, widely used in both savory and sweet dishes."
//             }
//           },
//           {
//             "src": "/coffee-beans-and-ground-coffee.webp",
//             "title": "Premium Coffee Beans",
//             "details": {
//               "points": [
//                 "Rich in caffeine and antioxidants",
//                 "Grown in tropical regions",
//                 "Used in brewing coffee",
//                 "Popular worldwide",
//                 "Supports mental alertness"
//               ],
//               "description": "Coffee beans are the foundation for coffee, providing caffeine and antioxidants, grown mainly in tropical regions."
//             }
//           },
//           {
//             "src": "/467a7de616d369770cb23e30022eaff8603f7ee6.webp",
//             "title": "Fresh Peeled Garlic",
//             "details": {
//               "points": [
//                 "Known for its strong flavor and medicinal properties",
//                 "Contains antioxidants and sulfur compounds",
//                 "Used in cooking and as a seasoning",
//                 "Promotes heart health",
//                 "Commonly used in many cuisines"
//               ],
//               "description": "Peeled garlic is widely used in cooking for its flavor and health benefits, containing antioxidants and sulfur compounds."
//             }
//           },
//           {
//             "src": "/black-pepper (1).webp",
//             "title": "Premium Black Pepper",
//             "details": {
//               "points": [
//                 "Rich in antioxidants and anti-inflammatory properties",
//                 "Commonly used as a seasoning",
//                 "Boosts metabolism",
//                 "Used in various cuisines worldwide",
//                 "Contains piperine, which promotes nutrient absorption"
//               ],
//               "description": "Black pepper is a versatile spice, rich in antioxidants and used in cooking to enhance flavor and promote health."
//             }
//           }
//         ],
//         "recommended": [
//           {
//             "image": "/img1.jpeg",
//             "title": "swan 300 belt type ms frame"
//           },
//           {
//             "image": "/img2.jpeg",
//             "title": "swan 300 mm belt type"
//           },
//           {
//             "image": "/img3.jpg",
//             "title": "swan 1 chute 64 channels"
//           },
//           {
//             "image": "/img4.jpeg",
//             "title": "swan 3 Chute 192 Channel"
//           },
//           {
//             "image": "/img5.jpeg",
//             "title": "swan 2 chute 128 channel box type"
//           },
//           {
//             "image": "/img6.jpeg",
//             "title": "Swan 3 chute 192 channel"
//           }
//         ]
//       }
//     ]
//   }
// ];

const solutions = [
  {
    id: "Agricultural Products Sorting",
    title: "Agricultural Products Sorting",
    image: "/photo-1501430654243-c934cec2e1c0.avif",
    icon: "🌾",
    items: [
      {
        name: "Multigrains",
        images: [
          {
            src: "/photo-1585536301151-2afb2fb1c960.avif",
            title: "Premium Groundnuts",
            details: {
              points: [
                "Sorted for size and quality",
                "Removes impurities and broken nuts",
                "Ensures uniform texture and taste",
                "Enhances product consistency",
                "Prepares for high-quality packaging",
              ],
              description:
                "Groundnuts are sorted to remove broken or low-quality nuts, ensuring a high-quality and consistent product.",
            },
          },
          {
            src: "/photo-1610073474647-7b0b80a2f31f.avif",
            title: "Premium Cashew Nuts",
            details: {
              points: [
                "Color sorted for uniform appearance",
                "Removes broken or damaged cashews",
                "Prevents contamination from foreign particles",
                "Sorts for even size and shape",
                "Ensures optimal flavor and texture",
              ],
              description:
                "Cashew nuts are sorted by color and size, ensuring only the best nuts are selected for packaging.",
            },
          },
          {
            src: "/fg6.webp",
            title: "Roasted Fried Gram",
            details: {
              points: [
                "Sorted to remove impurities and broken pieces",
                "Ensures consistent roasting quality",
                "Optimizes flavor and texture",
                "Prepares for uniform packaging",
                "Enhances shelf-life and freshness",
              ],
              description:
                "Fried gram is sorted to ensure uniformity in roasting, improving its flavor and texture.",
            },
          },
          {
            src: "/white-urad-dal.webp",
            title: "High-Quality Urad Dal",
            details: {
              points: [
                "Sorted for size and quality consistency",
                "Removes any foreign materials",
                "Eliminates damaged or broken dal",
                "Enhances cooking quality and texture",
                "Optimizes packaging for market presentation",
              ],
              description:
                "Urad dal is sorted to remove damaged pieces and ensure uniform quality for cooking.",
            },
          },
          {
            src: "/green-bean-mung-bean-white_147493-76.webp",
            title: "High-Quality Green Gram",
            details: {
              points: [
                "Sorted by size for consistency",
                "Removes foreign particles and impurities",
                "Enhances flavor and texture",
                "Ensures high-quality product for packaging",
                "Optimizes for easy cooking and digestion",
              ],
              description:
                "Green gram is sorted to ensure uniformity and quality, improving flavor and digestion.",
            },
          },
          {
            src: "/360_F_288614217_ebFduJmzbCDkgcmA5DL7pO2GDOSZdcU7.webp",
            title: "Premium Channa",
            details: {
              points: [
                "Sorted for uniform size and quality",
                "Removes broken or damaged pieces",
                "Prepares for optimal cooking texture",
                "Ensures uniform flavor and texture",
                "Helps in quality packaging",
              ],
              description:
                "Channa is sorted to remove damaged pieces, ensuring a consistent and high-quality product.",
            },
          },
          {
            src: "/360_F_61227944_i9jxGjPzeHfCmhjVR7XYrr8NJves68Kf.webp",
            title: "Healthy Raisins",
            details: {
              points: [
                "Sorted for uniform size and quality",
                "Removes any damaged or dried-out raisins",
                "Ensures optimal flavor and texture",
                "Enhances visual appeal and packaging",
                "Prepares for high-quality culinary use",
              ],
              description:
                "Raisins are sorted to ensure quality consistency, enhancing their visual appeal and flavor.",
            },
          },
          {
            src: "/360_F_215106928_FuYl9HSXh8rxdVib4SdcigMKLiNJDn5I.webp",
            title: "Premium Toor Dal",
            details: {
              points: [
                "Sorted for size and quality consistency",
                "Removes broken or damaged dal",
                "Optimizes flavor and texture",
                "Enhances quality for cooking",
                "Prepares for uniform packaging",
              ],
              description:
                "Toor dal is sorted to ensure consistent size and quality for optimal cooking and packaging.",
            },
          },
          {
            src: "/images/remium Rice.jpeg",
            title: "Premium Rice",
            details: {
              points: [
                "Sorted for size consistency",
                "Removes damaged or broken grains",
                "Enhances texture and cooking quality",
                "Prepares for high-quality packaging",
                "Ensures uniform appearance in final product",
              ],
              description:
                "Rice is sorted to remove damaged grains, ensuring a uniform, high-quality product for cooking.",
            },
          },
          {
            src: "/coffee-beans-and-ground-coffee.webp",
            title: "Premium Coffee Beans",
            details: {
              points: [
                "Sorted by size and quality for consistency",
                "Removes broken or damaged beans",
                "Optimizes flavor for brewing",
                "Ensures uniform appearance and texture",
                "Prepares for premium packaging",
              ],
              description:
                "Coffee beans are sorted by size and quality, ensuring only the best beans are selected for brewing.",
            },
          },
          {
            src: "/467a7de616d369770cb23e30022eaff8603f7ee6.webp",
            title: "Fresh Peeled Garlic",
            details: {
              points: [
                "Sorted to remove damaged or broken cloves",
                "Ensures uniform size and texture",
                "Enhances flavor consistency",
                "Prepares for easy culinary use",
                "Improves packaging for freshness",
              ],
              description:
                "Garlic is sorted to remove damaged cloves, ensuring consistent quality and flavor.",
            },
          },
          {
            src: "/black-pepper (1).webp",
            title: "Premium Black Pepper",
            details: {
              points: [
                "Sorted for size and quality consistency",
                "Removes damaged or inferior peppercorns",
                "Ensures uniform appearance and flavor",
                "Optimizes for culinary use",
                "Prepares for high-quality packaging",
              ],
              description:
                "Black pepper is sorted to ensure uniform size and quality, optimizing its flavor and appearance.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "swan 300 belt type ms frame",
            link: "/Products/pro1",
          },
          {
            image: "/img2.jpeg",
            title: "swan 300 mm belt type",
            link: "/Products/pro12",
          },
          {
            image: "/img3.jpg",
            title: "swan 1 chute 64 channels",
            link: "/Products/pro2",
          },
          {
            image: "/img4.jpeg",
            title: "swan 3 Chute 192 Channel",
            link: "/Products/pro5",
          },
          {
            image: "/img5.jpeg",
            title: "swan 2 chute 128 channel box type",
            link: "/Products/pro4",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 chute 192 channel",
            link: "/Products/pro3",
          },
        ],
      },
    ],
  },
];

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  // New function to get relevant items for the "MultiGrains, Spices..." section
  const getCategoryItems = (categoryName) => {
    if (selectedSolution.id !== "agriculture") return [];

    const categoryMappings = {
      MultiGrains: ["Wheat", "Rice", "Grain"], // Corrected to include 'Grain'
      Spices: [
        "Pepper",
        "Clove",
        "Cardamom",
        "Chilli",
        "Coriander seeds",
        "Jeera",
        "Fennel Seeds",
      ],
      "All Types Of Pulses": [
        "Toor Dal",
        "Moong Dal",
        "Masoor Dal",
        "Chana Dal",
        "Green Moong",
        "Toor Whole",
        "Urad Dal",
        "Urad Dal Whole",
        "Fried Gram",
        "Chick Peas",
        "Mung Bean",
        "Peas",
        "SoyBean",
      ], //Added Peas and Soyabean
      Seeds: [
        "Poppy Seeds",
        "Mustard",
        "Tamarind Seeds",
        "Watermelon Seeds",
        "Sesame Seeds",
        "Coffee Beans",
        "Rajgira Seeds (Ramdana seeds)",
        "Rice Seeds",
        "Wheat Seeds",
        "Other Seeds",
        "Flaxseed",
        "Niger seeds",
        "Sunflower Seeds",
        "Pumpkin seeds",
        "Jowar grain",
        "Ragi",
        "Barley",
        "Betel Nut",
      ], //Added Barley and Betel Nut
    };

    const itemNames = categoryMappings[categoryName] || [];
    return selectedSolution.items.filter((item) =>
      itemNames.includes(item.name)
    );
  };

  // Define categories for the new section
  const categories = ["MultiGrains", "Spices", "All Types Of Pulses", "Seeds"];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        {/* Main Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Multigrains Materials
          </h2>

          {/* Images Section - Grid of all multigrains */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {selectedItem.images.map((img, index) => {
              const isClickable =
                img.details &&
                img.details.points &&
                img.details.points.length > 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`text-center ${
                    isClickable ? "cursor-pointer" : ""
                  }`}
                  onClick={
                    isClickable ? () => handleImageClick(img) : undefined
                  }
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={250}
                    height={180}
                    className="rounded-lg object-cover shadow-md h-34"
                  />
                  <p className="text-sm mt-2 font-medium">{img.title}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommended Products */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Products
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Explore the best products recommended for you, built with precision
            and quality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(selectedItem.recommended || []).slice(0, 6).map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <Image
                  src={rec.image}
                  alt={rec.title}
                  width={250}
                  height={150}
                  className="rounded-md h-72 object-contain m-auto"
                />
                <h3 className="mt-3 font-semibold text-lg">{rec.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                {/* Add Link to View Details
                <a
                  href={rec.link} // Link to the product page
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xs mt-2 block hover:underline"
                >
                  View Details
                </a> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Details Modal */}
        {/* Image Details Modal */}
        <AnimatePresence>
          {selectedImage && selectedImage.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedImage.title} Details
                  </h2>
                  <button
                    onClick={clearImage}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-contain w-full h-auto"
                    />
                    <p className="text-gray-700 mt-4">
                      {selectedImage.details.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedImage.details.points.map((point, index) => (
                        <li key={index} className="text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* Recommended Products */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Recommended Products
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(selectedItem.recommended || [])
                          .slice(0, 4)
                          .map((rec, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-100 rounded-md p-2 flex items-center gap-2"
                            >
                              <Image
                                src={rec.image}
                                alt={rec.title}
                                width={80}
                                height={60}
                                className="rounded-md object-cover h-16 w-20"
                              />
                              <div>
                                <p className="text-sm font-medium">
                                  {rec.title}
                                </p>
                                <a
                                  href={rec.link} // Add link to product page
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 text-xs mt-1 block hover:underline"
                                >
                                  View Details
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <MaterialPanel />
      </div>
      {/* Contact Form & Footer */}
      <div>
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
