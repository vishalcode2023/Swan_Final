"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

import { FaHandshake } from "react-icons/fa";

const OurClients = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Farmer, Punjab",
      comment:
        "Swan sorting machines are incredibly accurate and reliable. They've made our grain selection process efficient!",
    },
    {
      name: "Anjali Mehta",
      position: "Rice Mill Owner, Karnataka",
      comment:
        "The after-sales support and performance of the Swan sorter is unmatched. It's truly transformed our operations.",
    },
    {
      name: "Vikram Desai",
      position: "Business Owner, Gujarat",
      comment:
        "We saved a lot of time and labor using Swan’s AI-based sorting system. The ROI is unbelievable!",
    },
    {
      name: "Sakshi Patel",
      position: "Exporter, Maharashtra",
      comment:
        "Truly impressed with the technology and the team behind Swan. Highly recommended!",
    },
  ];

  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#364153] mb-6">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto mb-20">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />
                <p className="text-gray-600 italic mb-3">"{item.comment}"</p>
                <p className="font-semibold text-gray-900 text-lg">— {item.name}</p>
                <p className="text-sm text-indigo-600">{item.position}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
