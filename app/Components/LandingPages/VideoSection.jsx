import React from "react";

const VideoSection = () => {
  return (
    <div className="px-6 py-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Video </h2>
        <p className="text-lg text-gray-600">
          Check out these insightful videos to learn more about our services and
          products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Video 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/TclxgUBZiN0"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/LHFwkxbFzig"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/hWz0s3iwPXg"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
