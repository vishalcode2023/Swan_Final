import React, { useState } from 'react';

const categories = ['Coffee'];

const imageData = {
  Coffee: {
    input: '/sorting-material-Beans-input.webp',
    accept: '/sorting-material-Beans-accept.webp',
    reject: '/sorting-material-Beans-reject.webp',
  },
  HDPE: {
    input: '/images/hdpe-input.jpg',
    accept: '/images/hdpe-accept.jpg',
    reject: '/images/hdpe-reject.jpg',
  },
  // Add more categories...
};

const Panel = ({ label, image, bgColor }) => (
  <div
    className={`p-4 rounded-lg flex-1 text-white transition-all duration-300 ${bgColor}`}
  >
    <div className="flex justify-center items-center mb-3 text-lg font-semibold uppercase tracking-wide">
      {label}
    </div>
    <img src={image} alt={label} className="w-full h-48 object-cover rounded-md" />
  </div>
);

export default function MaterialPanel() {
  const [selectedCategory, setSelectedCategory] = useState('Coffee');

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-6">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-700">Material Sorting Dashboard</h1>
        <p className="text-lg mt-1">View, categorize, and verify input materials</p>
      </div>

      {/* Category Tabs */}
      {/* <div className="flex flex-wrap gap-3 justify-center mt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-medium shadow ${
              selectedCategory === cat
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* Section Subheading */}
      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Sorting Results</h2>
        <p className="text-gray-800">Choose a material to view input, accepted, and rejected samples.</p>
      </div>

      {/* 3 Column Panel Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <Panel
          label="INPUT"
          image={imageData[selectedCategory].input}
          bgColor="bg-gray-800"
        />
        <Panel
          label="ACCEPT"
          image={imageData[selectedCategory].accept}
          bgColor="bg-green-700"
        />
        <Panel
          label="REJECT"
          image={imageData[selectedCategory].reject}
          bgColor="bg-red-700"
        />
      </div>
    </div>
  );
}
