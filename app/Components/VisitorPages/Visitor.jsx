"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

// Debug flag to help troubleshoot
const DEBUG = true;

const VisitorPopup = ({ open, onClose, visitor = null, isEdit = false }) => {
  const [loading, setLoading] = useState(false);
  const [collected, setCollected] = useState(false);
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [locationError, setLocationError] = useState(null);
  
  const [formData, setFormData] = useState({
    ip_address: "",
    device_info: "",
    browser: "",
    os: "",
    location: {
      country: "",
      city: "",
      latitude: null,
      longitude: null,
      coordinates: []
    },
    referrer: "",
    visit_count: 1,
  });

  // Helper function for debugging
  const debugLog = (message) => {
    if (DEBUG) {
      console.log(`VisitorPopup: ${message}`);
    }
  };
  
  // This effect runs when the component mounts to capture page refreshes and first visits
  useEffect(() => {
    debugLog("Component mounted - checking if data collection is needed");
    
    const checkAndCollectData = () => {
      // Detect page refresh (different methods for compatibility)
      const isPageRefresh = 
        (window.performance && window.performance.navigation && window.performance.navigation.type === 1) ||
        (performance.getEntriesByType && 
         performance.getEntriesByType('navigation').length > 0 && 
         performance.getEntriesByType('navigation')[0].type === 'reload');
    
      // Get timestamps and check flags
      const lastCollectionTime = localStorage.getItem('visitorLastCollectionTime');
      const currentTime = new Date().getTime();
      const isFirstVisitEver = !localStorage.getItem('visitorFirstVisitComplete');
      
      debugLog(`Page refresh detected: ${isPageRefresh}`);
      debugLog(`First visit status: ${isFirstVisitEver ? 'First visit' : 'Returning visit'}`);
      debugLog(`Last collection time: ${lastCollectionTime ? new Date(parseInt(lastCollectionTime)).toLocaleString() : 'Never'}`);
      
      // Check if we need to collect data:
      // 1. It's a first visit ever (always collect), OR
      // 2. We haven't collected data yet this session, OR
      // 3. It's been >15 minutes since last collection
      const timeSinceLastCollection = lastCollectionTime ? (currentTime - parseInt(lastCollectionTime)) : Infinity;
      const needsCollection = isFirstVisitEver || !lastCollectionTime || timeSinceLastCollection > 900000;
      
      debugLog(`Needs collection: ${needsCollection}, Time since last: ${Math.floor(timeSinceLastCollection/1000/60)} minutes`);
      
      // ALWAYS collect on first visit (regardless of refresh or not)
      if (isFirstVisitEver) {
        debugLog("First visit ever - collecting data and showing popup");
        // Show popup on first visit (false = not silent)
        getVisitorInfo(false);
        // Mark first visit as complete 
        localStorage.setItem('visitorFirstVisitComplete', 'true');
        localStorage.setItem('visitorLastCollectionTime', currentTime.toString());
      }
      // For returning visitors, only collect on page refresh with 15-min interval
      else if (isPageRefresh && (needsCollection)) {
        debugLog("Returning visit with refresh - collecting data silently (15-min interval)");
        // Collect silently
        getVisitorInfo(true);
        // Update timestamp 
        localStorage.setItem('visitorLastCollectionTime', currentTime.toString());
      }
      
      // Mark data as collected for this session to prevent duplicates
      sessionStorage.setItem('visitorDataCollected', 'true');
    };
    
    // Force data collection to run after a slight delay to ensure browser is ready
    setTimeout(() => {
      checkAndCollectData();
    }, 500);
    
  }, []); // Empty dependency array means it runs once on mount

  useEffect(() => {
    if (visitor && isEdit) {
      debugLog("Edit mode - loading visitor data into form");
      // Only set form data if in edit mode
      setFormData({
        ip_address: visitor.ip_address || "",
        device_info: visitor.device_info || "",
        browser: visitor.browser || "",
        os: visitor.os || "",
        location: {
          country: visitor.location?.country || "",
          city: visitor.location?.city || "",
          latitude: visitor.location?.latitude || null,
          longitude: visitor.location?.longitude || null,
          coordinates: visitor.location?.coordinates || []
        },
        referrer: visitor.referrer || "",
        visit_count: visitor.visit_count || 1,
      });
    } else if (open && !collected && !isEdit) {
      // Handle the case when the popup attempts to open in non-edit mode
      const isFirstVisitEver = !localStorage.getItem('visitorFirstVisitComplete');
      
      debugLog(`Popup opened: isFirstVisitEver=${isFirstVisitEver}`);
      
      // Allow the popup to be shown on first visit, close it otherwise
      if (!isFirstVisitEver) {
        debugLog("Not first visit - closing popup");
        if (typeof onClose === 'function') {
          onClose();
        }
      } else {
        debugLog("First visit - allowing popup to show");
      }
    }
  }, [visitor, isEdit, open]);

  const detectBrowser = (userAgent) => {
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edg')) return 'Edge';
    if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) return 'Internet Explorer';
    return 'Unknown';
  };

  const detectOS = (userAgent) => {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'MacOS';
    if (userAgent.includes('Linux') && !userAgent.includes('Android')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown';
  };

  const detectDevice = (userAgent) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent)
    ) {
      if (
        /iPad|tablet|Tablet/i.test(userAgent) || 
        (
          /Android/i.test(userAgent) && 
          !/Mobile/i.test(userAgent)
        )
      ) {
        return 'Tablet';
      }
      return 'Mobile';
    }
    return 'Desktop';
  };

  const getVisitorInfo = async (isBackground = false) => {
    debugLog(`getVisitorInfo called - silent mode: ${isBackground}`);
    setLoading(true);
    try {
      let ip = "";
      let country = "";
      let city = "";
      let latitude = null;
      let longitude = null;
      let coordinates = [];
      
      const userAgent = navigator.userAgent;
      const browser = detectBrowser(userAgent);
      const os = detectOS(userAgent);
      const deviceInfo = detectDevice(userAgent);
      const referrer = document.referrer || '';

      debugLog(`Browser detected: ${browser}, OS: ${os}, Device: ${deviceInfo}`);

      // Try to get IP address
      try {
        debugLog("Fetching IP address");
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ip = ipData.ip;
        debugLog(`IP address: ${ip}`);
      } catch (error) {
        console.error("Error getting IP:", error);
        ip = "127.0.0.1";
      }
      
      // Try to get location
      if (locationEnabled && navigator.geolocation) {
        debugLog("Attempting to get geolocation");
        setFetchingLocation(true);
        
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              resolve,
              reject,
              { timeout: 10000, enableHighAccuracy: true }
            );
          });
          
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          coordinates = [longitude, latitude]; // GeoJSON format
          debugLog(`Geolocation: lat=${latitude}, long=${longitude}`);
          
          // Try to get location names from coordinates
          try {
            const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const geoData = await geoResponse.json();
            
            country = geoData.address?.country || "";
            city = geoData.address?.city || geoData.address?.town || geoData.address?.village || "";
            debugLog(`Location: ${city}, ${country}`);
          } catch (geoError) {
            // If that fails, try ipapi.co
            try {
              const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
              const locationData = await locationResponse.json();
              
              if (!locationData.error) {
                country = locationData.country_name || "";
                city = locationData.city || "";
                debugLog(`IP-based location: ${city}, ${country}`);
              }
            } catch (ipLocationError) {
              console.error("Location services failed:", ipLocationError);
            }
          }
        } catch (geoError) {
          console.error("Geolocation error:", geoError);
          setLocationError("Location detection failed. Please enable location services in your browser.");
          
          // Try IP-based location as fallback
          try {
            debugLog("Falling back to IP-based geolocation");
            const geoResponse = await fetch('https://ipwho.is/');
            const geoData = await geoResponse.json();
            
            if (geoData.success !== false) {
              country = geoData.country || "";
              city = geoData.city || "";
              debugLog(`IP fallback location: ${city}, ${country}`);
            }
          } catch (ipGeoError) {
            console.error("IP geolocation failed:", ipGeoError);
          }
        } finally {
          setFetchingLocation(false);
        }
      }
      
      const payload = {
        ip_address: ip,
        device_info: deviceInfo,
        browser,
        os,
        location: {
          country,
          city,
          latitude,
          longitude,
          coordinates,
        },
        referrer,
        visit_count: 1,
        page_url: window.location.pathname, // Add current page URL
        timestamp: new Date().toISOString(), // Add timestamp
      };
      
      debugLog("Setting form data with collected information");
      setFormData(payload);

      try {
        debugLog("Sending data to backend API");
        const res = await axios.post("https://swanbackend.onrender.com/api/visitors", payload);
        
        if (res.status === 201 || res.status === 200) {
          debugLog(`Data successfully sent! Response status: ${res.status}`);
          setCollected(true);
          
          // Close the popup after success in all cases where it's visible
          // (both first visit and edit mode)
          if (!isBackground && open && typeof onClose === 'function') {
            debugLog("Closing popup after successful data collection");
            setTimeout(() => onClose(), 1500);
          }
        }
      } catch (error) {
        console.error("Failed to submit visitor data:", error);
        debugLog(`API error: ${error.message}`);
        // Still mark as collected to avoid multiple attempts
        setCollected(true);
      }
    } catch (err) {
      console.error("❌ Error collecting visitor info:", err);
      debugLog(`Fatal error in data collection: ${err.message}`);
      setLocationError("Error collecting visitor information. Please try again later.");
      setCollected(true);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isEdit && visitor?._id) {
        const res = await axios.put(`https://swanbackend.onrender.com/api/visitors/${visitor._id}`, formData);
        if (res.status === 200) {
          console.log("✅ Visitor info updated:", formData);
          setCollected(true);
          setTimeout(() => onClose(true), 1500);
        }
      } else {
        const res = await axios.post("https://swanbackend.onrender.com/api/visitors", formData);
        if (res.status === 201 || res.status === 200) {
          console.log("✅ Visitor info submitted:", formData);
          setCollected(true);
          setTimeout(() => onClose(true), 1500);
        }
      }
    } catch (err) {
      console.error("❌ Error saving visitor info:", err);
      setLocationError(`Error: ${err.response?.data?.message || err.message || "Unknown error occurred"}`);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      
      if (parent === "location" && (child === "latitude" || child === "longitude")) {
        // Convert to number and handle the coordinates array update
        const numValue = value === '' ? null : parseFloat(value);
        
        setFormData((prev) => {
          // Get current lat/long values
          let latitude = prev.location.latitude;
          let longitude = prev.location.longitude;
          
          // Update the specific one that changed
          if (child === "latitude") {
            latitude = numValue;
          } else {
            longitude = numValue;
          }
          
          // Update coordinates array only if both lat and long are valid numbers
          const coordinates = 
            (latitude !== null && longitude !== null) 
            ? [longitude, latitude] // GeoJSON format is [longitude, latitude]
            : [];
            
          return {
            ...prev,
            location: {
              ...prev.location,
              [child]: numValue,
              coordinates
            },
          };
        });
      } else {
        // Regular nested field update
        setFormData((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value,
          },
        }));
      }
    } else {
      // Top-level field update
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleLocationToggle = (e) => {
    const enabled = e.target.checked;
    setLocationEnabled(enabled);
    
    if (enabled && !isEdit) {
      getVisitorInfo();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-[90%] max-w-md animate-slideUp">
        {isEdit ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-2">Edit Visitor Information</h2>
            <hr className="mb-4 border-gray-200" />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">IP Address</label>
                <input
                  type="text"
                  name="ip_address"
                  value={formData.ip_address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Browser</label>
                <input
                  type="text"
                  name="browser"
                  value={formData.browser}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Operating System</label>
                <input
                  type="text"
                  name="os"
                  value={formData.os}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Device Type</label>
                <input
                  type="text"
                  name="device_info"
                  value={formData.device_info}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    name="location.country"
                    value={formData.location.country}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Latitude</label>
                  <input
                    type="number"
                    name="location.latitude"
                    value={formData.location.latitude || ""}
                    onChange={handleChange}
                    step="0.000001"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Longitude</label>
                  <input
                    type="number"
                    name="location.longitude"
                    value={formData.location.longitude || ""}
                    onChange={handleChange}
                    step="0.000001"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Referrer</label>
                <input
                  type="text"
                  name="referrer"
                  value={formData.referrer}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Visit Count</label>
                <input
                  type="number"
                  name="visit_count"
                  value={formData.visit_count}
                  onChange={handleChange}
                  min="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="location-toggle"
                  checked={locationEnabled}
                  onChange={handleLocationToggle}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="location-toggle" className="text-sm text-gray-700">
                  Enable location detection
                </label>
              </div>
              
              {locationError && (
                <div className="text-red-500 text-sm mt-2">{locationError}</div>
              )}
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => onClose(false)}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-2">🔍 Improve Your Experience</h2>
            <hr className="mb-4 border-gray-200" />
            <p className="text-sm text-gray-600 text-center mb-6">
              We're capturing basic insights to improve your experience.
            </p>

            <div className="text-center mt-4">
              {loading && (
                <div className="mx-auto w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin" />
              )}
              {collected && (
                <span className="text-green-600 font-semibold text-lg">✔ Done</span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorPopup;