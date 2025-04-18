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
import VideoSection from "../Components/LandingPages/VideoSection";

// ✅ Your actual solutions array
const solutions = [
  {
    id: "MultiGrains",
    title: "Agricultural Products Sorting",
    image: "/photo-1501430654243-c934cec2e1c0.avif",
    icon: "🌾",
    items: [

      //Done
      {
        name: "Wheat",
        images: [
          {
            src: "/photo-1574323347407-f5e1ad6d020b.avif",
            title: "High-Quality Wheat",
            details: {
              points: [
                "Sorted for uniform grain size",
                "Free from impurities and foreign materials",
                "High milling quality after sorting",
                "Only premium quality grains selected",
                "Ensures consistency in flour production",
              ],
              description:
                "High-quality wheat is sorted to remove impurities and ensure uniform grain size, resulting in a consistent and high-quality product.",
            },
          },
          {
            src: "/premium_photo-1726862459894-aca62bf8a756.avif",
            title: "Wheat Sorting",
            details: {
              points: [
                "Eliminates broken kernels for better processing",
                "Removes foreign materials such as dust and stones",
                "Improves product purity and consistency",
                "Increases overall market value through quality sorting",
                "Ensures only the best grains are selected for milling",
              ],
              description:
                "Wheat sorting involves removing broken kernels and foreign materials, ensuring high purity and consistency in the product.",
            },
          },
          {
            src: "/photo-1574323347407-f5e1ad6d020b.avif",
            title: "Color Sorting",
            details: {
              points: [
                "Detects and removes discolored grains",
                "Enhances visual appeal of the wheat",
                "Increases uniformity by sorting out damaged grains",
                "Prevents contamination from inferior grains",
                "Ensures quality control by removing substandard grains",
              ],
              description:
                "Color sorting ensures that only wheat grains with consistent color are selected, improving the visual appeal and uniformity of the product.",
            },
          },
          {
            src: "/photo-1646995892749-1bb82ae1679b.avif",
            title: "Defect Sorting",
            details: {
              points: [
                "Removes damaged or broken grains",
                "Eliminates diseased kernels and foreign particles",
                "Prevents contamination in the final product",
                "Increases product safety and quality",
                "Ensures that only healthy, defect-free grains are processed",
              ],
              description:
                "Defect sorting removes any damaged or defective grains, ensuring the final wheat product is safe, high-quality, and free from contaminants.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img2.jpeg",
            title: "Swan 300 mm Belt Type",
          },
          {
            image: "/img3.jpg",
            title: "Swan 1 Chute 64 Channels",
          },
        ],
      },
      

      //Done
     {
  name: "Rice",
  images: [
    {
      src: "/photo-1612708074992-c7936e82c99b.avif",
      title: "Steam Rice",
      details: {
        points: [
          "Short, sticky grains",
          "High amylopectin content for a glutinous texture",
          "Moist texture, ideal for sushi and Asian dishes",
          "Mild flavor that complements various dishes",
          "Premium grade sorted for consistency in texture",
        ],
        description:
          "Steam rice is known for its short, sticky grains, high amylopectin content, and smooth, moist texture. It is often used in sushi and other dishes where a sticky rice texture is required.",
      },
    },
    {
      src: "/photo-1627482265910-5c0ff6bee088.avif",
      title: "Boiled Rice",
      details: {
        points: [
          "Contains impurities and broken grains, lowering quality",
          "Inconsistent quality due to variations in processing",
          "Lower market value due to visible imperfections",
          "Higher risk of defects like discoloration or smell",
          "Variable cooking time due to grain irregularities",
        ],
        description:
          "Boiled rice is processed to remove the husk but often contains impurities and broken grains, leading to inconsistent quality and longer cooking times.",
      },
    },
    {
      src: "/photo-1612708074992-c7936e82c99b.avif",
      title: "Broken Rice",
      details: {
        points: [
          "Whole grain with the bran layer intact, making it nutritious",
          "Rich in fiber and other essential nutrients",
          "Nutty flavor due to its whole grain nature",
          "Longer cooking time due to unprocessed grains",
          "Often used in soups, porridges, and rice dishes",
        ],
        description:
          "Broken rice is a whole grain variety that retains the bran layer, making it a healthier choice. It is typically nutty and requires a longer cooking time.",
      },
    },
    {
      src: "/Poha-Flattened-Rice-Flakes-Piping-Pot-Curry-1.webp",
      title: "Beaten Rice",
      details: {
        points: [
          "Flattened rice made by steaming paddy and then pressing it",
          "Light and easy to digest, suitable for various preparations",
          "Commonly used in snacks, breakfast, and desserts",
          "Also known as poha in India, valued for its versatility",
          "Can be prepared with vegetables, spices, or sweeteners for variety",
        ],
        description:
          "Beaten rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
      },
    },
  ],
  recommended: [
    {
      image: "/img4.jpeg",
      title: "Swan 3 chute 192 channel",
    },
    {
      image: "/img5.jpeg",
      title: "Swan 2 chute 128 channel box type",
    },
    {
      image: "/img6.jpeg",
      title: "Swan 3 chute 192 channel",
    },
  ],
      },

      //Done
      {
        name: "Dal",
        description:
          "Dals are an essential part of Indian cuisine, offering rich protein, fiber, and vital nutrients. From Toor Dal to Masoor Dal, each variety brings a unique flavor and texture to everyday meals. Perfect for soups, curries, and stews, dals are a staple in vegetarian and health-conscious diets.",
        images: [
          {
            src: "/photo-1702041357314-db5826c96f04.avif",
            title: "Toor Dal",
            details: {
              points: [
                "Sorted by size for uniform cooking",
                "Smaller, split varieties cook faster",
                "Quality sorted by color and uniformity",
                "Premium grade sorted for flavor intensity",
                "Size grading ensures even texture in dishes",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },
          {
            src: "/photo-1694679671688-3d9bb5e77f37.avif",
            title: "Moong Dal",
            details: {
              points: [
                "Sorted by color to ensure freshness",
                "Smaller grains cook faster and are softer",
                "Larger grains sorted for stews and soups",
                "Premium moong dal is sorted for uniformity",
                "Grains are graded for smooth texture post-cooking",
              ],
              description:
                "Moong Dal is a highly nutritious lentil known for its versatility and ease of digestion.",
            },
          },
          {
            src: "/photo-1732680086236-45d986974942.avif",
            title: "Masoor Dal",
            details: {
              points: [
                "Color-sorted for consistency and appearance",
                "Grains graded for uniform cooking time",
                "Smaller, split grains cook faster and absorb flavors",
                "Premium grades sorted for smooth texture",
                "Size grading ensures no grain overcooks",
              ],
              description:
                "Masoor Dal has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
          {
            src: "/360_F_423753065_Q6bkjsCwyMAOdY5JEs1UMBIVpoXz6NIM.webp",
            title: "Chana Dal",
            details: {
              points: [
                "Sorted by size for even cooking",
                "Quality sorted for flavor and texture consistency",
                "Smaller grains suitable for quick dishes",
                "Larger grains graded for soups and curries",
                "Pre-cooked sorted varieties for convenience",
              ],
              description:
                "Chana Dal is a protein-rich pulse made from split chickpeas, widely used in Indian dishes and sweets.",
            },
          },
          {
            src: "/photo-1615485500710-aa71300612aa.avif",
            title: "Green Moong",
            details: {
              points: [
                "Size sorted for sprouting and soups",
                "Graded by color to ensure freshness",
                "Smaller, tender grains sorted for ease of digestion",
                "Larger, whole grains sorted for stews",
                "Premium green moong is sorted for vibrant color and texture",
              ],
              description:
                "Whole Green Moong is a healthy legume, often sprouted and used in salads or stews.",
            },
          },
          {
            src: "/black-e1683893256576.webp",
            title: "Urad Dal Whole",
            details: {
              points: [
                "Sorted for consistent size and quality",
                "Premium grades sorted for smooth texture",
                "Smaller grains suitable for quick cooking",
                "Larger grains sorted for richer flavor extraction",
                "Grains graded for even cooking in spicy dishes",
              ],
              description:
                "Urad Dal Whole has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
          {
            src: "/split-urad-dal-black_1.webp",
            title: "Urad Dal",
            details: {
              points: [
                "Split and graded for faster cooking",
                "Sorted for even texture in curries and dals",
                "Premium urad dal sorted for smoother consistency",
                "Grains sorted for uniform cooking time and flavor absorption",
                "Larger grains sorted for traditional dishes like dosa",
              ],
              description:
                "Urad Dal is a versatile ingredient used in various Indian dishes like dosa and vada, known for its health benefits and smooth texture.",
            },
          },
          {
            src: "/WHOLEREDTOOR.webp",
            title: "Toor Whole",
            details: {
              points: [
                "Whole grains sorted by size for uniform cooking",
                "Larger grains retain flavor longer during cooking",
                "Smaller grains sorted for faster cooking",
                "Sorted for premium quality based on color and size",
                "Grains graded for richer taste and texture in stews",
              ],
              description:
                "Toor Whole retains more nutrients compared to split varieties, offering a richer, more flavorful dish.",
            },
          },
        ],
        recommended: [
          {
            image: "/img7.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
          {
            image: "/img9.jpeg",
            title: "Swan 1 Chute 64 Channel",
          },
        ],
      } ,

      //Done
      {
        name: "Fried Gram",
        images: [
          {
            src: "/white-chickpea-500x500.webp",
            title: "Fried Gram",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys"
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },
          {
            src: "/photo-1523312727315-7c6ae09c3d09.avif",
            title: "Guar Gum",
            details: {
              points: [
                "Sorted by quality to ensure proper consistency as a thickening agent",
                "Derived from guar beans",
                "Soluble in cold water, widely used in food processing",
                "Used in food, cosmetics, and various industries",
                "Improves texture and shelf life of products"
              ],
              description:
                "Guar gum is a natural thickening agent extracted from guar beans, widely used in food processing, pharmaceuticals, and cosmetics.",
            },
          },
          {
            src: "/20220202_1057251.webp",
            title: "Horse Gram",
            details: {
              points: [
                "Sorted for size and quality before use",
                "Protein-rich legume",
                "Common in South Indian cuisine",
                "Used in soups, curries, and chutneys",
                "Known for medicinal benefits and weight loss properties"
              ],
              description:
                "Horse gram is a nutrient-dense legume used in traditional Indian dishes, valued for its high protein content and health benefits including digestion and weight management.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      //Done
      {
        name: "Seeds",
        images: [
          {
            src: "/360_F_98824546_XR0OYlogKI0vpfzdTAnQUm0P7Q8vbPRz.webp",
            title: "Poppy Seeds",
            details: {
              points: [
                "Sorted by size and color for uniform texture",
                "Graded for optimal oil extraction",
                "Premium quality sorted for baking and sweets",
                "Smaller seeds selected for enhanced crunch",
                "Grains sorted for even cooking in traditional dishes",
              ],
              description:
                "Poppy seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content.",
            },
          },
          {
            src: "/premium_photo-1674347954785-7604a0220776.avif",
            title: "Watermelon Seeds",
            details: {
              points: [
                "Sorted by size for even roasting",
                "Premium seeds selected for smooth texture",
                "Graded for optimal snack quality",
                "Smaller seeds selected for quick consumption",
                "Larger seeds suitable for extraction of oil",
              ],
              description:
                "Watermelon seeds can be roasted and eaten as a snack.",
            },
          },
          {
            src: "/wp-1630312031523-scaled.webp",
            title: "Tamarind Seeds",
            details: {
              points: [
                "Sorted by size and shape for consistent roasting",
                "Graded for high-quality powder production",
                "Premium seeds selected for flavor and texture",
                "Used in traditional remedies based on seed size",
                "Larger seeds retain more flavor during roasting",
              ],
              description:
                "Tamarind seeds are hard seeds found inside tamarind pods, often roasted or ground into powder for use in traditional remedies and culinary preparations.",
            },
          },
          {
            src: "/sesame-seeds.webp",
            title: "Sesame Seeds",
            details: {
              points: [
                "Sorted by color for premium quality",
                "Smaller seeds selected for finer texture in baking",
                "Graded by size for consistent oil extraction",
                "Black sesame seeds selected for stronger flavor",
                "Graded for smooth consistency in sweets and snacks",
              ],
              description:
                "Sesame seeds are small, nutritious seeds used in cooking, baking, and oil extraction, known for their nutty flavor and health benefits.",
            },
          },
          {
            src: "/360_F_1198176902_njOkg8q4l8pFh8GHih4pqoWpPgEvRJlh.webp",
            title: "Fenugreek Seeds",
            details: {
              points: [
                "Sorted for bitter flavor intensity",
                "Graded by size for even cooking in spice blends",
                "Premium seeds selected for medicinal use",
                "Larger seeds offer more flavor for pickles",
                "Grains sorted for uniformity in flavor extraction",
              ],
              description:
                "Fenugreek seeds are aromatic and bitter seeds commonly used in Indian cooking and traditional medicine for their health benefits.",
            },
          },
          {
            src: "/niger-seed-close-up.webp",
            title: "Niger Seeds",
            details: {
              points: [
                "Sorted by size for consistency in oil extraction",
                "Graded for premium quality in culinary use",
                "Small seeds ideal for bird feed and oil extraction",
                "Larger seeds graded for consistency in cooking",
                "Nutritionally sorted for high linoleic acid content",
              ],
              description:
                "Niger seeds are tiny oil-rich seeds used for bird feed and cooking oil, valued for their nutritional properties and culinary use in select cuisines.",
            },
          },
          {
            src: "/360_F_422437204_ZAa0YLQ6LEPm4dh98Cktnk84BLkfWjvw.webp",
            title: "Sunflower Seeds",
            details: {
              points: [
                "Sorted by size for uniform roasting",
                "Premium seeds selected for high-quality oil",
                "Smaller seeds graded for better snack consistency",
                "Grains sorted for optimal heart health benefits",
                "Larger seeds preferred for oil production",
              ],
              description:
                "Sunflower seeds are nutrient-dense seeds used as a snack or pressed for oil, popular for their health benefits and crunchy texture.",
            },
          },
          {
            src: "/360_F_1224560567_kpVqdkII4hP9FcRsFL25SqXNG58EOhOB.webp",
            title: "Pumpkin Seeds",
            details: {
              points: [
                "Sorted by size for even roasting",
                "Premium seeds selected for smooth texture in snacks",
                "Larger seeds graded for pumpkin seed oil extraction",
                "Smaller seeds ideal for salads and granola",
                "Graded for nutritional content such as zinc and magnesium",
              ],
              description:
                "Pumpkin seeds, or pepitas, are edible seeds packed with nutrients and are often enjoyed roasted or added to a variety of dishes.",
            },
          },
          {
            src: "/fennel-seeds-top-view_271326-7.webp",
            title: "Fennel Seeds",
            details: {
              points: [
                "Sorted for consistency in flavor intensity",
                "Graded for uniform texture in herbal teas",
                "Premium seeds selected for digestive benefits",
                "Smaller seeds ideal for seasoning and flavor",
                "Larger seeds suitable for medicinal preparations",
              ],
              description:
                "Fennel seeds are aromatic seeds used for seasoning, digestion, and freshening breath, commonly found in Indian cuisine and teas.",
            },
          },
          {
            src: "/360_F_69517650_puotOHAWs5rTQ5Nj4LzVkBMPk8r0V4nB.webp",
            title: "Poppy Seeds",
            details: {
              points: [
                "Sorted by size for uniform texture",
                "Graded for optimal oil extraction",
                "Premium quality sorted for baking and sweets",
                "Smaller seeds selected for enhanced crunch",
                "Grains sorted for even cooking in traditional dishes",
              ],
              description:
                "Poppy seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content.",
            },
          },
          {
            src: "/Amaranth_Grain.webp",
            title: "Rajgira Seeds (Ramdana Seeds)",
            details: {
              points: [
                "Sorted for size and purity for fasting foods",
                "Graded for consistency in texture",
                "Gluten-free varieties sorted for health-conscious diets",
                "Premium seeds selected for high nutritional value",
                "Used in a variety of traditional Indian dishes and snacks",
              ],
              description:
                "Rajgira seeds, also called Ramdana or amaranth seeds, are gluten-free grains used in fasting foods and traditional Indian snacks for their high nutritional value.",
            },
          },
          {
            src: "/A2418245416ef4df5b3a985ff14dd9c6bk.png_300x300.webp",
            title: "Almond Seeds",
            details: {
              points: [
                "Sorted by size and flavor intensity",
                "Graded for premium quality in snacks and desserts",
                "Used in milk production from larger seeds",
                "Smaller seeds are ideal for roasting and snacking",
                "Rich in healthy fats and vitamin E, sorted for quality",
              ],
              description:
                "Almond seeds are nutrient-rich edible seeds valued for their flavor and health benefits, commonly used in desserts, snacks, and almond milk.",
            },
          },
          {
            src: "/cotton.webp",
            title: "Cotton Seeds Sorter",
            details: {
              points: [
                "Used for sorting cotton seeds by quality",
                "Helps in seed grading and processing",
                "Essential for cotton seed oil industry",
                "Improves efficiency in seed selection",
                "Used in agricultural and industrial settings",
              ],
              description:
                "A Cotton Seeds Sorter is a machine designed to sort and grade cotton seeds efficiently, playing a key role in seed processing and oil production.",
            },
          },
          {
            src: "/360_F_251903391_dEPKuDRvDF4kwEkzTH6dUfj20SxsXg50.webp",
            title: "Flaxseed",
            details: {
              points: [
                "Sorted for high omega-3 content",
                "Graded for texture consistency in baking",
                "Premium seeds selected for oil extraction",
                "Smaller seeds ideal for smoothies and cereals",
                "Larger seeds chosen for greater nutritional density",
              ],
              description:
                "Flaxseeds are tiny seeds known for their high omega-3 and fiber content, often added to foods for their nutritional and digestive benefits.",
            },
          },
          {
            src: "/yellow-mustard-seed.webp",
            title: "Mustard",
            details: {
              points: [
                "Sorted by size for consistent flavor intensity",
                "Graded for oil extraction based on seed size",
                "Smaller seeds ideal for pickles and tempering",
                "Larger seeds selected for mustard paste production",
                "Rich in omega-3 fatty acids and selenium, sorted for quality",
              ],
              description:
                "Mustard seeds are flavorful seeds used in cooking and oil production, known for their pungent taste and versatility in various cuisines.",
            },
          },
          {
            src: "/360_F_81663460_gpyKbEb3Rwd5eo3U9mNwlZu6Fhr7Wlh3.webp",
            title: "Coriander Seeds",
            details: {
              points: [
                "Sorted for consistency in flavor intensity",
                "Graded for premium quality in spice blends",
                "Used whole or ground in culinary dishes",
                "Selected for medicinal properties based on size",
                "Aids digestion and helps with flavor extraction",
              ],
              description:
                "Coriander seeds are fragrant, dried seeds used as a spice in culinary dishes and spice mixes, known for their flavor and digestive benefits.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 belt type ms frame",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 chute 512 channel",
          },
        ],
      },
      ,

      //Done
      {
        name: "Maize",
        images: [
          {
            src: "/corn.webp", // Add image path if available
            title: "Maize",
            details: {
              points: [
                "Sorted by kernel size, shape, and color for consistency",
                "Also known as corn, a staple food in many countries",
                "Used for flour, cornmeal, and popcorn production",
                "Rich in carbohydrates, fiber, and essential nutrients",
                "Serves multiple purposes, including food, fodder, and biofuel production",
              ],
              description:
                "Maize, commonly known as corn, is a versatile grain crop used globally for food, animal feed, and industrial purposes like biofuel and starch production.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      //Done
      {
        name: "Pepper",
        images: [
          {
            src: "/black-pepper.webp", // Add image path if available
            title: "Pepper",
            details: {
              points: [
                "Sorted by size and color to ensure consistent quality and flavor",
                "Known as the king of spices, used whole or ground",
                "Available in black, white, and green varieties, each with distinct flavor profiles",
                "Adds pungency and depth to dishes, often used as a seasoning",
                "Rich in antioxidants and aids digestion, offering health benefits",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      //Done
      {
        name: "Nuts",
        images: [
          {
            src: "/360_F_69825519_Fku0zeygKxz85qtbHMZzDTBDuPe3kPFp.webp", // Add image path if available
            title: "Pine Nuts",
            details: {
              points: [
                "Sorted from pine cones for uniformity and optimal flavor extraction",
                "Rich in healthy fats, protein, magnesium, and iron",
                "Used in pesto, salads, and baking for a delicate, buttery flavor",
                "High in antioxidants, contributing to health benefits",
                "Carefully harvested to preserve the nutritional profile of each nut",
              ],
              description:
                "Pine nuts are small, buttery seeds harvested from pine cones, commonly used in Mediterranean dishes like pesto and prized for their nutritional value.",
            },
          },
          {
            src: "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp", // Add image path if available
            title: "Cashew Nuts",
            details: {
              points: [
                "Sorted for optimal texture and consistency in every nut",
                "Creamy, rich flavor, commonly used in sweets, curries, and snacks",
                "Rich in healthy fats, minerals, and antioxidants",
                "Used roasted, as snacks, or in products like cashew butter",
                "Grown mainly in tropical climates and sorted for freshness",
              ],
              description:
                "Cashew nuts are kidney-shaped seeds known for their creamy texture and are widely used in cooking, baking, and as a nutritious snack.",
            },
          },
          {
            src: "/360_F_212701427_UKxS3mhFejLaCCv8uSQ4UWw03FTKhzG2.webp", // Add image path if available
            title: "Ground Nut",
            details: {
              points: [
                "Sorted and cleaned for purity and consistency in size",
                "Used in a variety of culinary forms: roasted, boiled, and in peanut butter",
                "High in protein, healthy fats, and essential nutrients",
                "Common in Indian, American, and global cuisine",
                "Versatile in snacks, sauces, and cooking oils",
              ],
              description:
                "Ground nuts, or peanuts, are protein-rich legumes used in various culinary forms like roasted snacks, peanut butter, and cooking oil.",
            },
          },
          {
            src: "/dried-betel-nut-on-the-floor.webp", // Add image path if available
            title: "Betel Nut",
            details: {
              points: [
                "Sorted and processed for uniform size and quality",
                "Chewed with betel leaves in many cultures, especially in Southeast Asia",
                "Has stimulating effects similar to caffeine",
                "Commonly used in traditional ceremonies and rituals",
                "Popular in India and Southeast Asia for its cultural significance",
              ],
              description:
                "Betel nut, also known as areca nut, is traditionally chewed with betel leaves and holds cultural significance in many Asian communities.",
            },
          },
          {
            src: "/heap-macadamia-nuts-with-shells_493806-12754.webp", // Add image path if available
            title: "Macadamia",
            details: {
              points: [
                "Sorted to ensure uniformity and consistent quality",
                "Known for its rich, buttery flavor and high nutritional value",
                "Native to Australia, but now grown in various regions around the world",
                "Commonly roasted or used in baking, desserts, and snacks",
                "High in healthy fats, antioxidants, and dietary fiber",
              ],
              description:
                "Macadamia nuts are prized for their creamy, buttery flavor and high nutritional value, often used in baking, snacks, or enjoyed on their own.",
            },
          },
        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "Swan 3 Chute 192 Channel",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 2 Chute 128 Channel Box Type",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 Chute 192 Channel",
          },
        ],
      },

      //done
      {
        name: "Dehydrated",
        images: [
          {
            src: "/intro-1723846741.webp", // Add image path if available
            title: "Dehydrated Onion",
            details: {
              points: [
                "Sorted and dried from fresh onions to retain maximum flavor and aroma",
                "Available in various forms: flakes, powder, and granules, for versatile use",
                "Ensures uniform size and texture for consistent rehydration and flavor release",
                "Long shelf life with easy storage due to efficient dehydration and sorting",
                "Perfect for use in soups, sauces, and spice mixes, offering a quick flavor boost",
              ],
              description:
                "Dehydrated onion is made by drying fresh onions to preserve their flavor and aroma. It provides an easy-to-use, long-lasting alternative to fresh onions.",
            },
          },
          {
            src: "/Dehydrated-garlic_baking-ingredients-e1593724486708.webp", // Add image path if available
            title: "Dehydrated Garlic",
            details: {
              points: [
                "Processed from high-quality dried garlic cloves for enhanced flavor",
                "Available as flakes, powder, or granules, offering flexibility in usage",
                "Sorted to ensure uniform size and easy rehydration in various dishes",
                "Easy to store and retains its flavor for long periods",
                "Commonly used in spice blends, snacks, and sauces for quick seasoning",
              ],
              description:
                "Dehydrated garlic is a potent, shelf-stable form of garlic that’s easy to store and use, making it an essential ingredient for adding robust flavor to meals.",
            },
          },
          {
            src: "/dehydrated-red-potatoes-with-skin-sq-600x600.webp", // Add image path if available
            title: "Dehydrated Potato Peel",
            details: {
              points: [
                "Dried outer layer of potatoes, sorted for consistency and nutrient retention",
                "Rich in fiber, antioxidants, and nutrients, perfect for a healthy addition",
                "Ideal for soups, broths, or as a crunchy, eco-friendly snack",
                "Sorting helps reduce waste by utilizing the potato peel effectively",
                "Retains most of the nutrients from the fresh potato during the dehydration process",
              ],
              description:
                "Dehydrated potato peel is a nutritious, eco-friendly option for adding fiber and antioxidants to various dishes, reducing food waste in the process.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      //Done3
      {
        name: "Beans",
        images: [
          {
            src: "/coffee-beans-and-ground-coffee.webp", // Add image path if available
            title: "Coffee Beans",
            details: {
              points: [
                "Sorted to remove defective or damaged beans, ensuring only high-quality beans are used",
                "Varieties like Arabica and Robusta are sorted to ensure consistency in size and flavor",
                "Roast levels are carefully chosen based on sorted beans to enhance flavor profile",
                "Efficient sorting ensures uniformity in caffeine and antioxidant levels for brewing",
                "Beans are sorted to ensure optimal flavor and freshness for coffee beverages",
              ],
              description:
                "Coffee beans are roasted seeds of the Coffea plant, widely consumed for their bold flavor and stimulating caffeine content. Sorting ensures that only the best beans are used for production, enhancing the coffee experience.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      {
        name: "Jeera",
        images: [
          {
            src: "/idsjlnllbp10dhznfrhn.webp", // Add image path if available
            title: "Jeera",
            details: {
              points: [
                "Efficient sorting of cumin seeds for uniform size and quality",
                "Maximizes flavor and aroma retention during the sorting process",
                "Prevents contamination by separating damaged or non-viable seeds",
                "Retains high nutritional value and medicinal properties of the seeds",
                "Widely used in culinary dishes, spice blends, and health products",
              ],
              description:
                "Jeera, or cumin seeds, are a staple spice known for their distinct aroma and digestive benefits, widely used in cooking and traditional remedies. Advanced sorting systems ensure consistent quality and flavor, enhancing both culinary and medicinal benefits.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      //Done 2
      {
        name: "Garlic",
        images: [
          {
            src: "/peeled-garlic-471175766-2000-b417da82d8d749b9a6a7171124430d12 (1).webp", // Add image path if available
            title: "Peeled Garlic",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Peeled garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },
          {
            src: "/fresh-garlic-on-vintage-table-garlics-clove-royalty-free-image-1691437626.webp",
            title: "Unpeeled Garlic",
            details: {
              points: [
                "Sorted to remove damaged or non-viable cloves, ensuring only fresh garlic is used",
                "Retains full flavor and nutrients by avoiding excess handling during sorting",
                "Optimal sorting process ensures uniform size and quality for storage and use",
                "Good source of antioxidants and sulfur compounds, sorted to preserve nutritional integrity",
                "Typically used for long-term storage and in roasting or seasoning with consistent quality",
              ],
              description:
                "Unpeeled garlic cloves are fresh, unprocessed bulbs that preserve the full flavor and nutrients, ideal for roasting or using in various dishes. Sorting ensures high-quality garlic for all uses.",
            },
          },
        ],
        recommended: [
          {
            image: "/img5.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img1.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img10.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      // Done 1
      {
        name: "Clove",
        images: [
          {
            src: "/360_F_77814928_uAl4WZvHATAcXG0kf5KvTSAQ6VdMOTk9.webp", // Add image path if available
            title: "Clove",
            details: {
              points: [
                "Efficient sorting of clove buds to ensure uniform size and quality",
                "Maximizes extraction of flavor and medicinal properties",
                "Prevents contamination by separating damaged or non-viable cloves",
                "Retains high levels of antioxidants during sorting process",
                "Widely used in culinary dishes, spice blends, and health products",
              ],
              description:
                "Cloves are aromatic flower buds known for their pungent flavor and medicinal properties. Advanced sorting systems ensure uniformity, maximizing both their culinary and medicinal benefits, while improving efficiency in spice production.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      // Done
      {
        name: "Cardamom",
        images: [
          {
            src: "/360_F_47263334_Ib96bxeudiRvgLnTVK7Za5fGbW9AIi4Q.webp", // Add image path if available
            title: "Cardamom",
            details: {
              points: [
                "Aromatic spice from the seeds of the cardamom plant",
                "Available in green (most common) and black varieties",
                "Used in both sweet and savory dishes",
                "Common in Indian, Middle Eastern, and Scandinavian cuisines",
                "Known for its strong, sweet, and slightly spicy flavor",
              ],
              description:
                "Cardamom is a highly aromatic spice used in cooking, desserts, and beverages, valued for its unique flavor profile and digestive benefits.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "swan 300 belt type ms frame",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 chute 512 channel",
          },
        ],
      },

      {
        name: "Fruit",
        images: [
          {
            src: "/CoffeeFruitHeader.webp", // Add image path if available
            title: "Coffee Fruit",
            details: {
              points: [
                "Optimized sorting of coffee fruit for maximum yield",
                "Efficient removal of non-viable fruit and contaminants",
                "High-precision sorting to enhance coffee bean extraction",
                "Rich in antioxidants, supporting health and wellness product lines",
                "Used in health supplements for its antioxidant and metabolic-boosting properties",
              ],
              description:
                "Coffee fruit, or coffee cherry, is the outer fruit that encases the coffee beans. With advanced sorting technology, it enhances coffee bean extraction while retaining valuable antioxidants that can be used in health supplements, supporting both coffee production and wellness markets.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },
      {
        name: "Corn Flakes",
        images: [
          {
            src: "/13749976-Cornflakes-corn-flakes-picture-filling.webp", // Add image path if available
            title: "Corn Flakes",
            details: {
              points: [
                "Efficient sorting of corn kernels for uniform size and quality",
                "Maximizes the crisp texture and taste during production",
                "Separates damaged or imperfect kernels for higher-quality flakes",
                "Ensures uniform fortification with vitamins and minerals",
                "Widely used as a nutritious breakfast option with milk or yogurt",
              ],
              description:
                "Corn flakes are a popular breakfast cereal made from toasted cornmeal. Advanced sorting technology ensures consistency in texture and flavor while maximizing the nutritional value of each serving.",
            },
          },
        ],
        recommended: [
          {
            image: "/img2.jpeg",
            title: "Swan 300 Belt Type MS Frame",
          },
          {
            image: "/img3.jpg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img7.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      {
        name: "Millets",
        images: [
          {
            src: "/4480e6e2bc8aa8cf85f0dbe5e2684e88.webp",
            title: "Kodo Millet",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description:
                "Kodo millet is a nutritious, gluten-free grain known for its high fiber content and potential health benefits, commonly used in traditional dishes and as a healthy alternative to rice.",
            },
          },
          {
            src: "/foxtail-millet.webp",
            title: "Foxtail Millet",
            details: {
              points: [
                "Precision vision sorting for consistent grain quality",
                "Efficient removal of contaminants and foreign materials",
                "Improves shelf life by eliminating spoilage-prone elements",
                "Compatible with automated cleaning and grading lines",
                "Preferred for health-centric food production and exports",
              ],
              description:
                "Foxtail millet is a highly nutritious, gluten-free grain that’s widely used in cooking, offering significant health benefits, including better digestion and weight management.",
            },
          },
          {
            src: "/24087-2_4a6f027b-7498-4fef-9a14-b5caa94e93bf.webp",
            title: "Barnyard Millet",
            details: {
              points: [
                "High-speed sorting for small-sized, rice-like grains",
                "Removes micro-impurities and husk residues effectively",
                "Optimized for diabetic-friendly product lines",
                "Ensures uniform whiteness and clean grain finish",
                "Trusted in ready-to-cook and instant meal industries",
              ],
              description:
                "Barnyard millet is a small, nutrient-rich grain known for its low calorie content and high fiber, making it a great choice for weight loss and managing health conditions like diabetes.",
            },
          },
          {
            src: "/360_F_999766858_sapQCZ7wE3VoMh80o4PH8PK6APF8nLRa.webp",
            title: "Pearl Millet",
            details: {
              points: [
                "Robust sorting for dense, round grains",
                "Minimizes material loss during cleaning and grading",
                "Enhances value in flour and multi-grain processing",
                "Ideal for bakery, cereal, and fortified product lines",
                "Meets global standards for export-grade millet",
              ],
              description:
                "Pearl millet is a versatile, gluten-free grain known for its high nutritional value, including protein and fiber, and is often used in a variety of culinary dishes.",
            },
          },
        ],
      },
      {
        name: "Grain",
        images: [
          {
            src: "/SizeCopy_8ead0bdc-f782-4589-8c8b-9419c20e7687.webp", // Add image path if available
            title: "Jowar Grain",
            details: {
              points: [
                "Precision sorting technology optimized for grains like sorghum",
                "Removes impurities and defects using AI and vision-based detection",
                "Ensures uniform quality and enhances food-grade processing efficiency",
                "Supports high-capacity throughput for commercial grain processing lines",
                "Ideal for gluten-free product applications in Indian and African markets",
              ],
              description:
                "Jowar, or sorghum, is a highly nutritious gluten-free grain, commonly used in various dishes, including flatbreads, porridges, and as flour in many cuisines.",
            },
          },
        ],
        recommended: [
          {
            image: "/img5.jpeg",
            title: "swan 300 belt type ms frame",
          },
          {
            image: "/img1.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img10.jpeg",
            title: "Swan 8 chute 512 channel",
          },
        ],
      },
    ],
  },
  {
    id: "plastic",
    title: "Plastic Waste Sorting",
    image: "/photo-1571727153934-b9e0059b7ab2.avif",
    icon: "♻️",
    items: [
      {
        name: "Plastic and Minerals",
        images: [
          {
            src: "/plastic-pellets.webp", // Add image path if available
            title: "Plastic Granules",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "/5286846dd11f.webp", // Add image path if available
            title: "Plastic Flakes",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic flakes are small, flat pieces of plastic typically derived from post-consumer waste, commonly used in recycling processes to produce new plastic items and reduce environmental impact.",
            },
          },
          {
            src: "/quartz.webp", // Add image path if available
            title: "Quartz",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Quartz is a highly abundant and versatile mineral used in a variety of industries, including electronics, glass, and ceramics, known for its hardness, stability, and various industrial applications.",
            },
          },
          ,
          {
            src: "/minerals-and-crystals-many-different-kinds.webp", // Add image path if available
            title: "Minerals",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Minerals are naturally occurring substances that are essential in various industries, providing raw materials for everything from construction to high-tech manufacturing.",
            },
          },
          {
            src: "/91ONeWurn2L.webp", // Add image path if available
            title: "Coals",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Coal is a black or brownish-black sedimentary rock that is a major energy source, used primarily in power plants and industrial processes, but also a significant contributor to global carbon emissions.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Plastic Granules Sorting Machine",
          },
          {
            image: "/img11.jpeg",
            title: "Plastic Flakes Washing Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Quartz Crusher Machine",
          },
          {
            image: "/img13.jpeg",
            title: "Conveyor Belt System",
          },
          {
            image: "/img14.jpeg",
            title: "Coal Screening Equipment",
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
        {/* Top Grid - Solution Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
        </div>

        {/* Lower Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Item Selector */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              {selectedSolution.title} Materials
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
          </div>

          {/* Images Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
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

        <VideoSection />

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
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
