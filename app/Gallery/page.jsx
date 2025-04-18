"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const galleryImages = [
  { src: "/event1.jpg", alt: "Event 1", category: "Events" },
  { src: "/heap-macadamia-nuts-with-shells_493806-12754.webp", alt: "Team 1", category: "Team" },
  { src: "/img5.jpeg", alt: "Office 1", category: "Office" },
  { src: "/img6.jpeg", alt: "Manufacturing 1", category: "Manufacture" },
  { src: "/img7.jpeg", alt: "Team 2", category: "Team" },
  { src: "/img8.jpeg", alt: "Event 2", category: "Events" },
  { src: "/img9.jpeg", alt: "Office 2", category: "Office" },
  { src: "/img10.jpeg", alt: "Manufacturing 2", category: "Manufacture" },
  { src: "/img11.jpeg", alt: "Workshop 1", category: "Workshop" },
  { src: "/img12.jpeg", alt: "Administer 1", category: "Administer" },
  { src: "/photo-1508061253366-f7da158b6d46.avif", alt: "Production 1", category: "Production" },
];

const GalleryPage = () => {
  const groupedImages = galleryImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {});

  const renderSection = (title, description, category) => (
    <div className="mb-16 py-16">
      <h2 className="text-2xl sm:text-3xl  text-center font-bold text-gray-600 ">{title}</h2>
      <p className="text-gray-600 text-lg sm:text-xl mb-10 text-center max-w-3xl mx-auto">
        {description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {groupedImages[category]?.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={350}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <Navbar />

      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-3xl pt-16 font-semibold text-gray-800 leading-tight mb-6">
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-6 py-3 rounded-2xl">
            Explore Our Gallery
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
          Dive into our vibrant world through these moments of creativity, collaboration, and excellence.
        </p>
      </div>

      {renderSection("Our Events", "Explore unforgettable moments from our events, where magic happens!", "Events")}
      {renderSection("Our Team", "Meet the passionate individuals who drive our success. Our team is our greatest asset.", "Team")}
      {renderSection("Our Office", "Take a peek into our creative workspace where innovation thrives.", "Office")}
      {renderSection("Manufacturing", "Discover our manufacturing process—precision, quality, and efficiency in action.", "Manufacture")}
      {renderSection("Workshops", "Hands-on workshops where skill-building meets innovation.", "Workshop")}
      {renderSection("Production Details", "A closer look at how we bring ideas to life with our meticulous production flow.", "Production")}
    </div>
    <ContactSidebar/>
    <ChatBot/>
    <AutoPopupChat/>
    <Footerpage />
    </>
  );
};

export default GalleryPage;
