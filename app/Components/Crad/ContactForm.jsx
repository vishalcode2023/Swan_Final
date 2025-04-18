"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(""); // 🆕 product field
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      subject, // 🆕 include product
      message,
    };

    try {
      const response = await axios.post(
        "http://147.93.29.202:5000/api/enquiries",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully!");
        console.log("Response:", response.data);
        setName("");
        setEmail("");
        setPhone("");
        setSubject(""); // 🆕 reset
        setMessage("");
      } else {
        console.error("Unexpected response:", response);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      toast.error(
        error.response?.data?.message || "Failed to send. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl w-full bg-white border border-gray-300 rounded-xl p-8">
        <h2 className="text-center text-4xl font-bold">Enquire Now</h2>
        <p className="text-center text-lg text-gray-600 mt-2">
          Are you interested in this product? Let us know!
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                required
              />
            </div>

            {/* 🆕 Product Field */}
            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-semibold">Product</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the product you're interested in"
                className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 focus:border-blue-500 focus:outline-none py-3 px-4 text-gray-800 rounded-md"
              required
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold px-8 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}