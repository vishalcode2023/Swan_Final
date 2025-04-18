"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 9,
    name: "Swan RGB AI 1 Chute ",
    description: "We manufacture high-quality Dal Color Sorter Machines.",
    image: "/img9.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro8",
    orderLink: "/Orders"
  },
  {
    id: 12,
    name: "Swan RGB AI 1 channel ms/ss frame",
    description:
      "We are well known as the reputed organization in this field of operation,",
    image: "/img12.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro11",
    orderLink: "/Orders"
  },
  {
    id: 1,
    name: "Swan RGB AI 2 Chute  box type",
    description: "We manufacture high-quality Dal Color Sorter Machines.",
    image: "/img3.Jpg",
    video: "/Video1.mp4",
    link: "/Products/pro2",
    orderLink: "/Orders"
  },
  {
    id: 3,
    name: "Swan RGB AI 3 Chute",
    description: "Enhance sorting efficiency with AI-powered technology.",
    image: "/img6.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro3",
    orderLink: "/Orders"
  },
  {
    id: 5,
    name: "Swan RGB AI 5 Chute",
    description: "We manufacture high-quality Dal Color Sorter Machines.",
    image: "/img4.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro5",
    orderLink: "/Orders"
  },
  {
    id: 7,
    name: "Swan RGB AI 5 Chute ",
    description: "Enhance sorting efficiency with AI-powered technology.",
    image: "/img7.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro6",
    orderLink: "/Orders"
  },
  {
    id: 14,
    name: "Swan RGB AI 5 Chute  ",
    description: "We manufacture high-quality Dal Color Sorter Machines.",
    image: "/img4.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro5",
    orderLink: "/Orders"
  },
  {
    id: 8,
    name: "Swan RGB AI 8 Chute ",
    description:
      "We are well known as the reputed organization ",
    image: "/img8.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro7",
    orderLink: "/Orders"
  },
  {
    id: 10,
    name: "Swan RGB AI 10 chute",
    description: "Premium sorting technology for precision sorting.",
    image: "/img10.jpeg",
    video: "/Video1.mp4",
    link: "/Products/pro9",
    orderLink: "/Orders"
  }
];


const ProductsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-100 to-white px-4 sm:px-5 md:px-10 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8 relative 
          before:absolute before:content-[''] before:w-12 sm:before:w-16 before:h-1 before:bg-green-500 
          before:bottom-0 before:left-1/2 before:-translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Trending Products
      </motion.h2>

      <div className="relative lg:max-w-[95%] max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="text-center p-1 sm:p-4">
              <motion.div
                className="bg-white shadow-lg rounded-xl p-4 sm:p-6 transition-transform duration-500 ease-in-out relative"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-full h-48 sm:h-64 mx-auto">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500"
                    style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                  />
                  <motion.video
                    src={product.video}
                    className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-500"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>

                <div className="flex flex-col gap-2 mt-4">
                  <Link href={product.orderLink}>
                    <motion.button
                      className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-4 text-xs sm:text-sm rounded-lg w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Enquiry Now
                    </motion.button>
                  </Link>

                  {product.orderLink && (
                    <Link href={product.orderLink}>
                      <motion.button
                        className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-4 text-xs sm:text-sm rounded-lg w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        Order Now
                      </motion.button>
                    </Link>
                  )}

                  <Link href={product.link}>
                    <motion.button
                      className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-4 text-xs sm:text-sm rounded-lg w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Specifications
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
