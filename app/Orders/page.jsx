"use client";

import React, { useState } from "react";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import toast, { Toaster } from "react-hot-toast";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Submitting your enquiry...");

    try {
      const res = await fetch("http://147.93.29.202:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss(); // Remove loading

      if (!res.ok) throw new Error("Failed to submit enquiry");

      toast.success("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
      console.error("Submit Error:", error);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 text-center mb-4">
            <span className="text-2xl md:text-4xl bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-1 rounded-2xl">
              Place an Order or Enquiry
            </span>
          </h2>
          <p className="text-center text-gray-600 text-base sm:text-lg mb-10">
            Let us know your requirements, and we’ll get back to you as soon as possible.
          </p>

          <form
            className="bg-gray-50 p-6 rounded-3xl shadow-md space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us more about your requirements..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-full shadow hover:shadow-lg transition"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
      <ContactSidebar/>
      <AutoPopupChat/>
      <ChatBot />
      <Footerpage />
    </div>
  );
};

export default Page;
