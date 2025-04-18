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
//         "name": "Spices",
//         "images": [
//           {
//             "src": "/SpicesImages/Dry Ginger.jpeg",
//             "title": "Dry Ginger",
//             "details": {
//               "points": [
//                 "Boosts digestion and relieves nausea",
//                 "Common in Indian and Asian cooking",
//                 "Used in teas, curries, and traditional medicine"
//               ],
//               "description": "Dry ginger is a pungent spice derived from fresh ginger that's been dried. It's known for its warming effect and use in herbal remedies."
//             }
//           },
//           {
//             "src": "/SpicesImages/Black Pepper.jpeg",
//             "title": "Black Pepper",
//             "details": {
//               "points": [
//                 "Called the 'King of Spices'",
//                 "Enhances flavor and promotes metabolism",
//                 "Used globally in savory dishes"
//               ],
//               "description": "Black pepper adds heat and depth to dishes and is also rich in antioxidants and has digestive properties."
//             }
//           },
//           {
//             "src": "/SpicesImages/Cumin Seeds.jpeg",
//             "title": "Cumin Seeds",
//             "details": {
//               "points": [
//                 "Earthy and warm flavor",
//                 "Common in Indian, Mexican, and Middle Eastern cuisines",
//                 "Aids digestion and boosts immunity"
//               ],
//               "description": "Cumin seeds are an essential spice known for their unique aroma and health benefits."
//             }
//           },
//           {
//             "src": "/SpicesImages/Green Cardamom.jpeg",
//             "title": "Green Cardamom",
//             "details": {
//               "points": [
//                 "Aromatic pods used in desserts and teas",
//                 "Improves digestion and freshens breath",
//                 "Known for its intense sweet and spicy flavor"
//               ],
//               "description": "Green cardamom is a fragrant spice used in both sweet and savory dishes across South Asia and the Middle East."
//             }
//           },
//           {
//             "src": "/SpicesImages/ellow Mustard Seeds.jpeg",
//             "title": "Yellow Mustard Seeds",
//             "details": {
//               "points": [
//                 "Pungent and slightly bitter taste",
//                 "Used in pickles, curries, and mustard sauces",
//                 "Rich in antioxidants and minerals"
//               ],
//               "description": "Mustard seeds are widely used in Indian tadkas and Western mustard condiments."
//             }
//           },
//           {
//             "src": "/SpicesImages/Red Chili Flakes.jpeg",
//             "title": "Red Chili Flakes",
//             "details": {
//               "points": [
//                 "Adds spicy heat to dishes",
//                 "Common in Italian and Indian cooking",
//                 "Rich in vitamin C and capsaicin"
//               ],
//               "description": "Chili flakes are dried and crushed red chilies used to spice up pizzas, pastas, and curries."
//             }
//           },
//           {
//             "src": "/SpicesImages/Bay Leaves.jpeg",
//             "title": "Bay Leaves",
//             "details": {
//               "points": [
//                 "Adds a subtle aroma to soups and stews",
//                 "Removed before serving",
//                 "Used in Indian, French, and Mediterranean cuisine"
//               ],
//               "description": "Bay leaves provide a herbal flavor and are commonly used in slow-cooked recipes."
//             }
//           },
//           {
//             "src": "/SpicesImages/Cloves.jpeg",
//             "title": "Cloves",
//             "details": {
//               "points": [
//                 "Strong and sweet aroma",
//                 "Used in desserts, biryanis, and spice mixes",
//                 "Has antibacterial and pain-relieving properties"
//               ],
//               "description": "Cloves are dried flower buds with a strong aroma and are popular in both savory and sweet dishes."
//             }
//           },
//           {
//             "src": "/SpicesImages/White Pepper.jpeg",
//             "title": "White Pepper",
//             "details": {
//               "points": [
//                 "Milder than black pepper",
//                 "Used in light-colored sauces and soups",
//                 "Good for digestion and inflammation"
//               ],
//               "description": "White pepper is made from ripe pepper berries with the skin removed, commonly used in continental dishes."
//             }
//           },
//           {
//             "src": "/SpicesImages/Nutmeg.jpeg",
//             "title": "Nutmeg",
//             "details": {
//               "points": [
//                 "Sweet, warm, and nutty flavor",
//                 "Used in baking, beverages, and savory dishes",
//                 "Promotes sleep and relieves pain"
//               ],
//               "description": "Nutmeg is a seed spice grated into dishes for its unique flavor and aroma."
//             }
//           },
//           {
//             "src": "/SpicesImages/Black Mustard Seeds.jpeg",
//             "title": "Black Mustard Seeds",
//             "details": {
//               "points": [
//                 "Strong pungent taste when crushed",
//                 "Common in Indian tempering (tadka)",
//                 "Rich in selenium and magnesium"
//               ],
//               "description": "Black mustard seeds are a staple in South Indian cooking, often popped in hot oil."
//             }
//           },
//           {
//             "src": "/SpicesImages/Star Anise.jpeg",
//             "title": "Star Anise",
//             "details": {
//               "points": [
//                 "Star-shaped spice with a licorice flavor",
//                 "Used in Chinese and Indian dishes",
//                 "Has antimicrobial and antifungal properties"
//               ],
//               "description": "Star anise is used in biryanis, chai masalas, and Chinese five spice powder."
//             }
//           },
//           {
//             "src": "/SpicesImages/Rock Salt.jpeg",
//             "title": "Rock Salt",
//             "details": {
//               "points": [
//                 "Unrefined and mineral-rich salt",
//                 "Used in fasting foods in India",
//                 "Aids digestion and boosts hydration"
//               ],
//               "description": "Rock salt or 'Sendha Namak' is used especially during Indian fasts and in Ayurvedic practices."
//             }
//           },
//           {
//             "src": "/SpicesImages/Dried Red Chilies.jpeg",
//             "title": "Dried Red Chilies",
//             "details": {
//               "points": [
//                 "Intense heat and color",
//                 "Used in tempering, sauces, and chutneys",
//                 "Rich in capsaicin and antioxidants"
//               ],
//               "description": "Whole dried red chilies are roasted or fried in oil to add depth to Indian dishes."
//             }
//           },
//           {
//             "src": "/SpicesImages/Fennel Seeds.jpeg",
//             "title": "Fennel Seeds",
//             "details": {
//               "points": [
//                 "Sweet and refreshing flavor",
//                 "Used after meals as a mouth freshener",
//                 "Supports digestion and reduces bloating"
//               ],
//               "description": "Fennel seeds are often roasted and eaten after meals in India for their digestive benefits."
//             }
//           },
//           {
//             "src": "/SpicesImages/Ajwain (Carom Seeds).jpeg",
//             "title": "Ajwain (Carom Seeds)",
//             "details": {
//               "points": [
//                 "Pungent and bitter taste",
//                 "Used in parathas, fritters, and masalas",
//                 "Relieves indigestion and flatulence"
//               ],
//               "description": "Ajwain is a strong spice that enhances flavor and supports gut health."
//             }
//           },
//           {
//             "src": "/SpicesImages/ried Ginger Slices.jpeg",
//             "title": "Dried Ginger Slices",
//             "details": {
//               "points": [
//                 "Sliced form of dry ginger",
//                 "Used in teas and Ayurvedic decoctions",
//                 "Stimulates appetite and improves metabolism"
//               ],
//               "description": "These slices are easier to steep in teas or grind into powder for spice blends."
//             }
//           },
//           {
//             "src": "/SpicesImages/Oregano.jpeg",
//             "title": "Oregano",
//             "details": {
//               "points": [
//                 "Popular in Italian and Mediterranean cuisine",
//                 "Antibacterial and anti-inflammatory",
//                 "Enhances tomato-based dishes"
//               ],
//               "description": "Oregano is a fragrant herb often sprinkled over pizzas, pastas, and stews."
//             }
//           },
//           {
//             "src": "/SpicesImages/Dried Garlic Cloves.jpeg",
//             "title": "Dried Garlic Cloves",
//             "details": {
//               "points": [
//                 "Used in spice blends and chutneys",
//                 "Enhances flavor in Indian dishes",
//                 "Antibacterial and heart-healthy"
//               ],
//               "description": "Dried garlic cloves are a shelf-stable alternative to fresh garlic."
//             }
//           },
//           {
//             "src": "/SpicesImages/Black Cardamom.jpeg",
//             "title": "Black Cardamom",
//             "details": {
//               "points": [
//                 "Smoky and bold flavor",
//                 "Used in curries and biryanis",
//                 "Improves respiratory health"
//               ],
//               "description": "Black cardamom is larger and bolder than green, often added whole in hearty dishes."
//             }
//           },
//           {
//             "src": "/SpicesImages/Kasuri Methi (Dried Fenugreek Leaves).jpeg",
//             "title": "Kasuri Methi (Dried Fenugreek Leaves)",
//             "details": {
//               "points": [
//                 "Adds a slightly bitter, nutty flavor",
//                 "Used in North Indian gravies",
//                 "Controls blood sugar and cholesterol"
//               ],
//               "description": "Kasuri methi is dried fenugreek used to give depth to creamy curries and dals."
//             }
//           },
//           {
//             "src": "/SpicesImages/Pink Peppercorns.jpeg",
//             "title": "Pink Peppercorns",
//             "details": {
//               "points": [
//                 "Mild and fruity flavor",
//                 "Used in gourmet dishes and blends",
//                 "Anti-inflammatory and decorative"
//               ],
//               "description": "Pink peppercorns are not true peppers but offer a delicate, sweet bite."
//             }
//           },
//           {
//             "src": "/SpicesImages/Dried Cubeb.jpeg",
//             "title": "Dried Cubeb",
//             "details": {
//               "points": [
//                 "Peppery with hints of allspice",
//                 "Rare in modern cooking",
//                 "Used in ancient medicine and spice blends"
//               ],
//               "description": "Cubebs are dried berries with a unique flavor once popular in medieval cuisine."
//             }
//           },
//           {
//             "src": "/SpicesImages/Turmeric Powder.jpeg",
//             "title": "Turmeric Powder",
//             "details": {
//               "points": [
//                 "Bright yellow color",
//                 "Used for color, flavor, and health benefits",
//                 "Anti-inflammatory and antiseptic"
//               ],
//               "description": "Turmeric is a superfood known for its healing power and is a must in Indian curries."
//             }
//           },
//           {
//             "src": "/SpicesImages/Brown Mustard Seeds.jpeg",
//             "title": "Brown Mustard Seeds",
//             "details": {
//               "points": [
//                 "Stronger flavor than yellow mustard",
//                 "Used in pickles, curries, and spice mixes",
//                 "Stimulates appetite and digestion"
//               ],
//               "description": "Brown mustard seeds have a sharp, pungent taste and are popular in Indian regional cuisines."
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
    "id": "Agricultural Products Sorting",
    "title": "Agricultural Products Sorting",
    "image": "/photo-1501430654243-c934cec2e1c0.avif", 
    "icon": "🌾",
    "items": [
      {
        "name": "Spices",
        "images": [
          {
            "src": "/SpicesImages/Dry Ginger.jpeg",
            "title": "Dry Ginger",
            "details": {
              "points": [
                "Boosts digestion and relieves nausea",
                "Common in Indian and Asian cooking",
                "Used in teas, curries, and traditional medicine",
                "Sorting ensures uniform slices and consistent flavor",
                "Proper sorting enhances drying efficiency"
              ],
              "description": "Dry ginger is a pungent spice derived from fresh ginger that's been dried. It's known for its warming effect and use in herbal remedies."
            }
          },
          {
            "src": "/SpicesImages/Black Pepper.jpeg",
            "title": "Black Pepper",
            "details": {
              "points": [
                "Called the 'King of Spices'",
                "Enhances flavor and promotes metabolism",
                "Used globally in savory dishes",
                "Sorting ensures size uniformity and reduces impurities",
                "Properly sorted pepper improves packaging and value"
              ],
              "description": "Black pepper adds heat and depth to dishes and is also rich in antioxidants and has digestive properties."
            }
          },
          {
            "src": "/SpicesImages/Cumin Seeds.jpeg",
            "title": "Cumin Seeds",
            "details": {
              "points": [
                "Earthy and warm flavor",
                "Common in Indian, Mexican, and Middle Eastern cuisines",
                "Aids digestion and boosts immunity",
                "Sorting eliminates dust and broken seeds",
                "High precision sorting leads to premium grade cumin"
              ],
              "description": "Cumin seeds are an essential spice known for their unique aroma and health benefits."
            }
          },
          {
            "src": "/SpicesImages/Green Cardamom.jpeg",
            "title": "Green Cardamom",
            "details": {
              "points": [
                "Aromatic pods used in desserts and teas",
                "Improves digestion and freshens breath",
                "Known for its intense sweet and spicy flavor",
                "Sorting enhances visual appeal and consistency",
                "Removes immature or broken pods"
              ],
              "description": "Green cardamom is a fragrant spice used in both sweet and savory dishes across South Asia and the Middle East."
            }
          },
          {
            "src": "/SpicesImages/ellow Mustard Seeds.jpeg",
            "title": "Yellow Mustard Seeds",
            "details": {
              "points": [
                "Pungent and slightly bitter taste",
                "Used in pickles, curries, and mustard sauces",
                "Rich in antioxidants and minerals",
                "Sorting eliminates stones and husk impurities",
                "Ensures food-grade quality for commercial use"
              ],
              "description": "Mustard seeds are widely used in Indian tadkas and Western mustard condiments."
            }
          },
          {
            "src": "/SpicesImages/Red Chili Flakes.jpeg",
            "title": "Red Chili Flakes",
            "details": {
              "points": [
                "Adds spicy heat to dishes",
                "Common in Italian and Indian cooking",
                "Rich in vitamin C and capsaicin",
                "Sorting ensures uniform flake size",
                "Prevents contamination and foreign particles"
              ],
              "description": "Chili flakes are dried and crushed red chilies used to spice up pizzas, pastas, and curries."
            }
          },
          {
            "src": "/SpicesImages/Bay Leaves.jpeg",
            "title": "Bay Leaves",
            "details": {
              "points": [
                "Adds a subtle aroma to soups and stews",
                "Removed before serving",
                "Used in Indian, French, and Mediterranean cuisine",
                "Sorting removes discolored or torn leaves",
                "Improves packaging and shelf presentation"
              ],
              "description": "Bay leaves provide a herbal flavor and are commonly used in slow-cooked recipes."
            }
          },
          {
            "src": "/SpicesImages/Cloves.jpeg",
            "title": "Cloves",
            "details": {
              "points": [
                "Strong and sweet aroma",
                "Used in desserts, biryanis, and spice mixes",
                "Has antibacterial and pain-relieving properties",
                "Sorting helps remove stems and dust",
                "Uniform grading boosts export quality"
              ],
              "description": "Cloves are dried flower buds with a strong aroma and are popular in both savory and sweet dishes."
            }
          },
          {
            "src": "/SpicesImages/White Pepper.jpeg",
            "title": "White Pepper",
            "details": {
              "points": [
                "Milder than black pepper",
                "Used in light-colored sauces and soups",
                "Good for digestion and inflammation",
                "Sorted for size consistency and smooth texture",
                "Free from hulls and unwanted matter"
              ],
              "description": "White pepper is made from ripe pepper berries with the skin removed, commonly used in continental dishes."
            }
          },
          {
            "src": "/SpicesImages/Nutmeg.jpeg",
            "title": "Nutmeg",
            "details": {
              "points": [
                "Sweet, warm, and nutty flavor",
                "Used in baking, beverages, and savory dishes",
                "Promotes sleep and relieves pain",
                "Sorting removes moldy or cracked nuts",
                "Ensures purity in spice blends"
              ],
              "description": "Nutmeg is a seed spice grated into dishes for its unique flavor and aroma."
            }
          },
          {
            "src": "/SpicesImages/Black Mustard Seeds.jpeg",
            "title": "Black Mustard Seeds",
            "details": {
              "points": [
                "Strong pungent taste when crushed",
                "Common in Indian tempering (tadka)",
                "Rich in selenium and magnesium",
                "Sorting improves visual and taste quality",
                "Reduces waste in bulk packaging"
              ],
              "description": "Black mustard seeds are a staple in South Indian cooking, often popped in hot oil."
            }
          },
          {
            "src": "/SpicesImages/Star Anise.jpeg",
            "title": "Star Anise",
            "details": {
              "points": [
                "Star-shaped spice with a licorice flavor",
                "Used in Chinese and Indian dishes",
                "Has antimicrobial and antifungal properties",
                "Sorting removes broken stars and stems",
                "Visual uniformity enhances product value"
              ],
              "description": "Star anise is used in biryanis, chai masalas, and Chinese five spice powder."
            }
          },
          {
            "src": "/SpicesImages/Rock Salt.jpeg",
            "title": "Rock Salt",
            "details": {
              "points": [
                "Unrefined and mineral-rich salt",
                "Used in fasting foods in India",
                "Aids digestion and boosts hydration",
                "Sorting removes debris and lumps",
                "Leads to fine quality in powdered form"
              ],
              "description": "Rock salt or 'Sendha Namak' is used especially during Indian fasts and in Ayurvedic practices."
            }
          },
          {
            "src": "/SpicesImages/Dried Red Chilies.jpeg",
            "title": "Dried Red Chilies",
            "details": {
              "points": [
                "Intense heat and color",
                "Used in tempering, sauces, and chutneys",
                "Rich in capsaicin and antioxidants",
                "Sorting removes damaged and pale pods",
                "Consistent color enhances marketability"
              ],
              "description": "Whole dried red chilies are roasted or fried in oil to add depth to Indian dishes."
            }
          },
          {
            "src": "/SpicesImages/Fennel Seeds.jpeg",
            "title": "Fennel Seeds",
            "details": {
              "points": [
                "Sweet and refreshing flavor",
                "Used after meals as a mouth freshener",
                "Supports digestion and reduces bloating",
                "Sorting ensures flavor-rich seeds only",
                "Essential for herbal blends and health teas"
              ],
              "description": "Fennel seeds are often roasted and eaten after meals in India for their digestive benefits."
            }
          },
          {
            "src": "/SpicesImages/Ajwain (Carom Seeds).jpeg",
            "title": "Ajwain (Carom Seeds)",
            "details": {
              "points": [
                "Pungent and bitter taste",
                "Used in parathas, fritters, and masalas",
                "Relieves indigestion and flatulence",
                "Sorting maintains seed purity and hygiene",
                "Improves consistency in spice mixes"
              ],
              "description": "Ajwain is a strong spice that enhances flavor and supports gut health."
            }
          },
          {
            "src": "/SpicesImages/ried Ginger Slices.jpeg",
            "title": "Dried Ginger Slices",
            "details": {
              "points": [
                "Sliced form of dry ginger",
                "Used in teas and Ayurvedic decoctions",
                "Stimulates appetite and improves metabolism",
                "Sorting ensures equal thickness for faster infusion",
                "Eliminates spoiled slices"
              ],
              "description": "These slices are easier to steep in teas or grind into powder for spice blends."
            }
          },
          {
            "src": "/SpicesImages/Oregano.jpeg",
            "title": "Oregano",
            "details": {
              "points": [
                "Popular in Italian and Mediterranean cuisine",
                "Antibacterial and anti-inflammatory",
                "Enhances tomato-based dishes",
                "Sorting improves flavor uniformity",
                "Reduces stems and foreign material"
              ],
              "description": "Oregano is a fragrant herb often sprinkled over pizzas, pastas, and stews."
            }
          },
          {
            "src": "/SpicesImages/Dried Garlic Cloves.jpeg",
            "title": "Dried Garlic Cloves",
            "details": {
              "points": [
                "Used in spice blends and chutneys",
                "Enhances flavor in Indian dishes",
                "Antibacterial and heart-healthy",
                "Sorting eliminates moldy or shriveled cloves",
                "Improves overall aroma and shelf life"
              ],
              "description": "Dried garlic cloves are a shelf-stable alternative to fresh garlic."
            }
          },
          {
            "src": "/SpicesImages/Black Cardamom.jpeg",
            "title": "Black Cardamom",
            "details": {
              "points": [
                "Smoky and bold flavor",
                "Used in curries and biryanis",
                "Improves respiratory health",
                "Sorting removes excess husk and dirt",
                "Enhances aroma consistency"
              ],
              "description": "Black cardamom is larger and bolder than green, often added whole in hearty dishes."
            }
          },
          {
            "src": "/SpicesImages/Kasuri Methi (Dried Fenugreek Leaves).jpeg",
            "title": "Kasuri Methi (Dried Fenugreek Leaves)",
            "details": {
              "points": [
                "Adds a slightly bitter, nutty flavor",
                "Used in North Indian gravies",
                "Controls blood sugar and cholesterol",
                "Sorting separates stem from leaf parts",
                "Improves texture and aroma retention"
              ],
              "description": "Kasuri methi is dried fenugreek used to give depth to creamy curries and dals."
            }
          },
          {
            "src": "/SpicesImages/Pink Peppercorns.jpeg",
            "title": "Pink Peppercorns",
            "details": {
              "points": [
                "Mild and fruity flavor",
                "Used in gourmet dishes and blends",
                "Anti-inflammatory and decorative",
                "Sorting ensures vibrant color and freshness",
                "Reduces off-flavors from spoiled berries"
              ],
              "description": "Pink peppercorns are not true peppers but offer a delicate, sweet bite."
            }
          },
          {
            "src": "/SpicesImages/Dried Cubeb.jpeg",
            "title": "Dried Cubeb",
            "details": {
              "points": [
                "Peppery with hints of allspice",
                "Rare in modern cooking",
                "Used in ancient medicine and spice blends",
                "Sorting preserves seed shape and quality",
                "Prevents unwanted debris in packaging"
              ],
              "description": "Cubebs are dried berries with a unique flavor once popular in medieval cuisine."
            }
          },
          {
            "src": "/SpicesImages/Turmeric Powder.jpeg",
            "title": "Turmeric Powder",
            "details": {
              "points": [
                "Bright yellow color",
                "Used for color, flavor, and health benefits",
                "Anti-inflammatory and antiseptic",
                "Sorting ensures smooth grinding and purity",
                "Removes lumps and foreign particles"
              ],
              "description": "Turmeric is a superfood known for its healing power and is a must in Indian curries."
            }
          },
          {
            "src": "/SpicesImages/Brown Mustard Seeds.jpeg",
            "title": "Brown Mustard Seeds",
            "details": {
              "points": [
                "Stronger flavor than yellow mustard",
                "Used in pickles, curries, and spice mixes",
                "Stimulates appetite and digestion",
                "Sorting eliminates shriveled and dust particles",
                "Improves consistency in commercial blends"
              ],
              "description": "Brown mustard seeds have a sharp, pungent taste and are popular in Indian regional cuisines."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img1.jpeg",
            "title": "swan 300 belt type ms frame"
          },
          {
            "image": "/img2.jpeg",
            "title": "swan 300 mm belt type"
          },
          {
            "image": "/img3.jpg",
            "title": "swan 1 chute 64 channels"
          },
          {
            "image": "/img4.jpeg",
            "title": "swan 3 Chute 192 Channel"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 3 chute 192 channel"
          }
        ]
      }
    ]
  }
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
        {/* Top Grid - Solution Selection */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedSolution.id === sol.id ? "border-2 border-teal-500" : ""
              }`}
              onClick={() => {
                setSelectedSolution(sol);
                setSelectedItem(sol.items[0]);
                setSelectedImage(null); // Clear selected image when switching solutions
              }}
            >
              <Image
                src={sol.image}
                alt={sol.title}
                width={220}
                height={130}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{sol.title}</h3>
              <div className="text-3xl mt-2">{sol.icon}</div>
            </motion.div>
          ))}
        </div> */}

        {/* Lower Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Item Selector */}
          {/* <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
            Spices Materials
            </h2>
            <div className="space-y-2">
              {selectedSolution.items.map((item) => (
                <button
                  key={item.name}
                  className={`block w-full p-3 text-left shadow rounded-md transition ${
                    selectedItem.name === item.name
                      ? "bg-teal-500 text-white font-bold"
                      : "bg-white text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedImage(null); // Clear selected image when switching items
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div> */}

          {/* Images Section */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedItem.name} Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                    }`} // Make clickable
                    onClick={
                      isClickable ? () => handleImageClick(img) : undefined
                    } // Handle click
                  >
                    <Image
                      src={img.src}
                      alt={selectedItem.name}
                      width={250}
                      height={180}
                      className="rounded-lg object-cover shadow-md h-34"
                    />
                    <p className="text-sm mt-2 font-medium">{img.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Recommended Machines Section */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Sorting Machines
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Advanced technology built for precision and productivity — tailored
            for {selectedItem.name}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(selectedItem.recommended || []).map((rec, idx) => (
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Details Modal */}
        <AnimatePresence>
          {selectedImage && selectedImage.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md" // Full screen, centered, blurred
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto" // Full width and height, scrollable
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
                      width={800} // Increased size
                      height={600}
                      className="rounded-lg object-contain w-full h-auto" // Make sure image scales within container
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
                        {(selectedItem.recommended || []).map((rec, idx) => (
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
                            <p className="text-sm font-medium">{rec.title}</p>
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
        <ContactSidebar/>
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
