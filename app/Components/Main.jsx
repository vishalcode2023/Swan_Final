"use client";
import React, { useState, useEffect } from "react";

import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";
import ChatBot from "./ChatBot/ChatBot";
import OurAims from "./LandingPages/OurAims";
import TeamSection from "./LandingPages/TeamSection";
import BusinessGrowthBanner from "./LandingPages/BusinessGrowthBanner";
import Latestnews from "./LandingPages/Latestnews";
import FAQSection from "./LandingPages/FAQsection";
import VisitorPopup from "../Components/VisitorPages/Visitor";
import AutoPopupChat from "./LandingPages/AutoComponentspop";
import OurClients from "./LandingPages/OurClients";
import ContactSidebar from "./LandingPages/ContactSidebar";

const Main = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    // Show landing page immediately
    setShowLanding(true);

    // Show popup immediately without checking localStorage
    // This ensures it always appears for testing
    const timer = setTimeout(() => {
      setPopupOpen(true);
      // We can keep this line for production, or remove it for testing
      // localStorage.setItem("popupShown", "true");
    }, 1000); // Reduced to 1 second delay for faster testing

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      {showLanding && (
        <>
          <Hero />
          <TechnologyPage />
          <ProductsPage />
          <OurAims />
          <BusinessGrowthBanner />
          <AboutUsPage />
          {/* <TeamSection /> */}
          <Gallery />
          <Latestnews />
          <FAQSection />
          <OurClients/>
          <Footerpage />
          <ContactSidebar />
          <ChatBot />
          <AutoPopupChat />
        </>
      )}

      {/* Show popup only after landing is shown */}
      {popupOpen && <VisitorPopup open={popupOpen} onClose={handleClosePopup} />}
    </div>
  );
};

export default Main;
