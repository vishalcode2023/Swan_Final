"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import axios from "axios";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://147.93.29.202:5000/api/blogs");
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div className="w-full overflow-hidden min-h-screen bg-gray-100">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden mb-10"
        >
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/img1.jpeg"
              alt="Event Banner"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Blogs
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Discover stories, ideas, and updates from the Swan community.
            </p>
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date: 12/02/2025</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <Image
                src={
                  blog.featured_image?.startsWith("data:image")
                    ? blog.featured_image
                    : "/img1.jpeg"
                }
                alt={blog.title}
                width={400}
                height={260}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(blog.published_date).toLocaleDateString()}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(blog.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/LatestBlogs/${blog._id}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        {!showAll && blogs.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full shadow-md"
            >
              Show All Blogs
            </button>
          </div>
        )}
      </div>
      <ContactSidebar/>
      <ChatBot />
      <AutoPopupChat/>
      <Footerpage />
    </div>
  );
};

export default Page;
