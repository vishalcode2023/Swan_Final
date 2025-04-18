import React from "react";
import Image from "next/image";
import Navbar from "@/app/Components/NavbarLinks/Navbar";
import Footerpage from "@/app/Components/LandingPages/Footerpage";
import ContactSidebar from "@/app/Components/LandingPages/ContactSidebar";
import ChatBot from "@/app/Components/ChatBot/ChatBot";
import AutoPopupChat from "@/app/Components/LandingPages/AutoComponentspop";

const BlogDetailPage = async (props) => {
  const params = await props.params; // ✅ await the params
  const { id } = params;

  let blog;
  try {
    const response = await fetch(
      `http://147.93.29.202:5000/api/blogs/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    blog = data.blog;
  } catch (error) {
    return (
      <div className="text-center text-red-600 py-20 px-4">
        Failed to fetch blog. Please try again later.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col">
        <main className="flex-grow bg-white py-8 px-4 md:px-8">
          {/* Enhanced Heading Section */}
          <div className="w-full text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Discover Our Blogs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 tracking-wide">
              Insights, ideas, and innovations from the heart of our team
            </p>
            <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-[#8E54FF] to-[#4A00E0] rounded-full" />
          </div>

          {/* Shared Container for Image and Content */}
          <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Blog Image */}
            <div className="relative w-full aspect-video">
              <Image
                src={
                  blog.featured_image?.startsWith("data:image")
                    ? blog.featured_image
                    : "/img1.jpeg"
                }
                alt={blog.title}
                fill
                priority
                className="object-contain transition-transform duration-300 hover:scale-105 rounded-t-2xl"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
                {blog.title}
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mb-6 italic border-l-4 border-blue-500 pl-3">
                Published on{" "}
                {new Date(blog.published_date).toLocaleDateString()}
              </p>

              <div
                className="prose prose-sm sm:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: blog.content || "<p>No content provided.</p>",
                }}
              />
            </div>
          </div>
        </main>

        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
      </div>
      <Footerpage /> {/* Ensure Footerpage component is rendered here */}
    </>
  );
};

export default BlogDetailPage;