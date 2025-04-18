"use client"

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Phone,
  Download,
  MessageCircle,
  Maximize2,
  Minimize2,
  Loader2,
  Globe,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ChatBot_UI/Button";
import { Card } from "./ChatBot_UI/card";
import { Input } from "./ChatBot_UI/input";
import { Textarea } from "./ChatBot_UI/textarea";
import { Label } from "./ChatBot_UI/label";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  getTranslation,
  getTranslations,
  supportedLanguages,
  baseTranslations,
} from "./ChatBot_Utils/translate";

// Define message types
const MessageType = {
  USER: "user",
  BOT: "bot",
  PRODUCT: "product",
  CONTACT: "contact",
  ENQUIRY: "enquiry",
  CATALOG: "catalog",
  SUPPORT: "support",
};

// API endpoint for products
const API_ENDPOINT = "https://crud-backend-a70z.onrender.com/api/products";

// Form validation function
const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeMode, setIsLargeMode] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [translations, setTranslations] = useState({});
  const [availableLanguages, setAvailableLanguages] =
    useState(supportedLanguages);
  const [translatedTexts, setTranslatedTexts] = useState({});
  const [forceUpdate, setForceUpdate] = useState(0);
  const [sheking, setsheking] = useState(true);

  // Initialize language from localStorage or default to English
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    // Load translations for the current language
    const loadTranslations = async () => {
      try {
        console.log("Loading initial translations for:", savedLanguage);
        const trans = await getTranslations(savedLanguage);
        setTranslations((prev) => ({ ...prev, [savedLanguage]: trans }));
      } catch (error) {
        console.error("Error loading initial translations:", error);
      }
    };

    loadTranslations();
  }, []);

  // Force UI update when language changes
  useEffect(() => {
    console.log("Language changed to:", language);
    // Force a re-render when language changes
    setForceUpdate((prev) => prev + 1);

    // Update all UI elements with new language
    if (translations[language]) {
      // Refresh all translated texts when language changes
      const keys = Object.keys(baseTranslations || {});
      keys.forEach((key) => {
        updateTranslation(key);
      });
    }
  }, [language]);

  // Change language function
  const changeLanguage = async (lang) => {
    if (lang === language) return; // Don't do anything if language hasn't changed

    console.log(`Changing language from ${language} to ${lang}`);

    try {
      // Show loading state
      setIsTyping(true);

      // Set language immediately to update UI
      setLanguage(lang);
      localStorage.setItem("language", lang);

      // Force update UI elements
      setForceUpdate((prev) => prev + 1);

      // Get translations for the language (should be available immediately since we're using hardcoded translations)
      const trans = await getTranslations(lang);
      setTranslations((prev) => ({ ...prev, [lang]: trans }));

      // Update all translated text elements
      const keys = Object.keys(baseTranslations || {});
      keys.forEach((key) => {
        updateTranslation(key);
      });

      // Refresh welcome message if it's the only message
      if (messages.length === 1 && messages[0].type === MessageType.BOT) {
        const welcomeMessage = trans?.welcome || baseTranslations.welcome;
        setMessages([
          {
            id: Date.now().toString(),
            type: MessageType.BOT,
            content: welcomeMessage,
            timestamp: new Date(),
          },
        ]);
      } else {
        // Add a language change notification message
        const langName =
          supportedLanguages.find((l) => l.code === lang)?.name || lang;
        addMessage(MessageType.BOT, `Language changed to ${langName}.`);
      }

      // Clear the translated texts cache when changing language
      setTranslatedTexts({});

      // Hide loading state
      setIsTyping(false);
    } catch (error) {
      console.error(`Error changing language to ${lang}:`, error);
      setIsTyping(false);

      // Revert to previous language on error
      setLanguage(language);
      localStorage.setItem("language", language);

      // Add error message
      addMessage(
        MessageType.BOT,
        `Sorry, there was an error changing the language. Please try again.`
      );
    }
  };

  // Initialize chatbot with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);

      const showWelcomeMessage = async () => {
        const welcomeMessage = await getTranslation("welcome", language);
        setMessages([
          {
            id: Date.now().toString(),
            type: MessageType.BOT,
            content: welcomeMessage,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      };

      setTimeout(() => {
        showWelcomeMessage();
      }, 1000);
    }
  }, [isOpen, messages.length, language]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleEnquirySubmit = async () => {
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // Add user message
      addMessage(MessageType.USER, `I'd like to submit an enquiry.`);

      // Add bot response
      setIsTyping(true);
      setTimeout(async () => {
        const thankYouMessage = await getTranslation(
          "enquirySubmitted",
          language,
          {
            name: formData.name,
            email: formData.email,
          }
        );

        addMessage(MessageType.BOT, thankYouMessage);
        setIsTyping(false);
      }, 1000);

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowEnquiryForm(false);

      // In a real application, you would send this data to your backend
      console.log("Enquiry submitted:", formData);
    } else {
      setFormErrors(errors);
    }
  };

  const addMessage = (type, content) => {
    const newMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  // Fetch products from API
  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched products:", data);
      setProducts(data);
      setIsLoadingProducts(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoadingProducts(false);
      addMessage(
        MessageType.BOT,
        `Sorry, I couldn't fetch the products. Please try again later. (Error: ${error.message})`
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isProcessing) return;

    // Add user message
    addMessage(MessageType.USER, inputValue);

    // Process user input
    const userInput = inputValue.toLowerCase();
    setInputValue("");

    // Prevent multiple requests from overlapping
    setIsProcessing(true);
    setIsTyping(true);

    // Handle different commands
    setTimeout(async () => {
      setIsTyping(false);
      setIsProcessing(false);

      if (userInput.includes("product")) {
        const productIntro = await getTranslation("productIntro", language);
        addMessage(MessageType.PRODUCT, productIntro);
        fetchProducts();
      } else if (userInput.includes("contact")) {
        const contactInfo = await getTranslation("contactInfo", language);
        addMessage(MessageType.CONTACT, contactInfo);
      } else if (userInput.includes("enquiry")) {
        setShowEnquiryForm(true);
      } else if (userInput.includes("catalog")) {
        const catalogInfo = await getTranslation("downloadCatalog", language);
        addMessage(MessageType.CATALOG, catalogInfo);
      } else if (userInput.includes("support")) {
        const supportInfo = await getTranslation("supportTeam", language);
        addMessage(MessageType.SUPPORT, supportInfo);
      } else if (userInput.includes("language")) {
        const langOptions = availableLanguages
          .map((lang) => `${lang.name} (${lang.code})`)
          .join(", ");
        addMessage(
          MessageType.BOT,
          `You can change the language to: ${langOptions}. Type the language code to change.`
        );
      } else if (availableLanguages.some((lang) => lang.code === userInput)) {
        await changeLanguage(userInput);
        const langName =
          availableLanguages.find((lang) => lang.code === userInput)?.name ||
          userInput;
        addMessage(MessageType.BOT, `Language changed to ${langName}.`);
      } else {
        const notUnderstood = await getTranslation("notUnderstood", language);
        addMessage(MessageType.BOT, notUnderstood);
      }
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Get translation helper function (synchronous version for JSX)
  const getTranslatedText = (key, params = {}) => {
    // If we already have this translation in our cache, return it
    if (translatedTexts[key]) {
      return translatedTexts[key];
    }

    // Otherwise return a placeholder and trigger an async update
    setTimeout(() => updateTranslation(key, params), 0);

    // Return from translations object if available, or the key itself as fallback
    if (translations[language]?.[key]) {
      let text = translations[language][key];
      // Replace parameters in the text
      if (params) {
        Object.entries(params).forEach(([param, value]) => {
          text = text.replace(`{${param}}`, value);
        });
      }
      return text;
    }

    return key; // Fallback to the key itself
  };

  // Async function to update translations
  const updateTranslation = async (key, params = {}) => {
    try {
      if (!key) return;

      // Get translation from cache or fetch new one
      let translatedText = translatedTexts[key];

      if (!translatedText) {
        translatedText = await getTranslation(key, language);
        setTranslatedTexts((prev) => ({
          ...prev,
          [key]: translatedText,
        }));
      }

      return translatedText;
    } catch (error) {
      console.error(`Error updating translation for ${key}:`, error);
      return baseTranslations[key] || key; // Fallback to English or key itself
    }
  };

  return (
    <motion.div
      className="fixed  -mx-5 bottom-10 md:right-20 right-10 z-50 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
      animate={sheking ? { y: [0, 10, -10, 10, 0] } : { x: 0 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      onClick={() => setsheking(false)}
    >
      {/* Chat toggle button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full  w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground neon-glow shadow-lg"
          aria-label="Toggle chat"
        >
          <FontAwesomeIcon
            icon={faRobot}
            className="h-10 w-10 text-4xl text-white"
          />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-18 right-2 rounded-2xl overflow-hidden"
            style={{
              width: isLargeMode
                ? "clamp(500px, 50vw, 800px)"
                : "clamp(320px, 90vw, 400px)",
              height: isLargeMode
                ? "clamp(500px, 80vh, 800px)"
                : "clamp(400px, 70vh, 500px)",
              maxHeight: "calc(100vh - 120px)",
              maxWidth: "800px", // Prevents it from becoming too wide
            }}
          >
            <Card className="flex flex-col w-96 h-full border-primary/30 neon-border bg-card/90 backdrop-blur-sm shadow-xl bg-gradient-to-r from-gray-100 to-white border ">
              {/* Chat header */}
              <div className="flex items-center justify-between py-4 px-3 border-b  ">
                <div className="flex items-center">
                  <div className="relative w-14 mx-2 h-10 ">
                    <img
                      src="/SwanSorter_Logo-02.png"
                      alt="SwanSorter"
                      className="h-10 w-20 animate-float rounded-full "
                    />
                  </div>
                  <div className="w-28 h-16">
                    {" "}
                    <div className="my-2">
                      <h2 className="font-bold text-gray-800 text-lg">
                        SwanSorter
                      </h2>
                      <h2 className="font-bold text-gray-800 text-lg -my-2">
                        Assistant
                      </h2>
                      <p className="text-xs text-primary/70 font-semibold my-2">
                        Online
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Language selector */}
                  <div className="relative group right-16">
                    <div className="flex items-center cursor-pointer">
                      <select
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="bg-gradient-to-r from-green-400 to-blue-400 text-white border border-primary/30 rounded-md py-1.5 px-2 text-sm hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 cursor-pointer font-semibold]"
                        disabled={isTyping}
                      >
                        {supportedLanguages.map((lang) => (
                          <option
                            key={lang.code}
                            value={lang.code}
                            className="text-black font-semibold"
                          >
                            {lang.name}
                          </option>
                        ))}
                      </select>
                      {isTyping && (
                        <Loader2 className="h-4 w-4 animate-spin text-primary/70 absolute right-2 top-2" />
                      )}
                    </div>
                  </div>
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLargeMode(!isLargeMode)}
                    className="text-foreground hover:text-primary hover:bg-secondary"
                    aria-label={isLargeMode ? "Minimize chat" : "Maximize chat"}
                  >
                    {isLargeMode ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </Button> */}
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary hover:bg-secondary"
                    aria-label="Close chat"
                  >
                    <X className="h-4 w-4" />
                  </Button> */}
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.type === MessageType.USER
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.type === MessageType.PRODUCT ? (
                      <div className=" backdrop-blur-sm rounded-lg p-4 max-w-[95%] space-y-4 border border-primary/20  hover:shadow-primary/20 transition-all duration-300 ">
                        <p className="text-foreground">{message.content}</p>
                        {isLoadingProducts ? (
                          <div className="flex justify-center items-center py-4">
                            <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            <span className="ml-2 text-foreground">
                              {getTranslatedText("loadingProducts")}
                            </span>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {products && products.length > 0 ? (
                              products.map((product) => (
                                <div
                                  key={product._id}
                                  className=" backdrop-blur-sm p-3 rounded-md border border-primary/20  hover:shadow-primary/20 transition-all duration-300 ]"
                                >
                                  {product.image_url && (
                                    <img
                                      src={product.image_url}
                                      alt={product.name}
                                      className="w-full h-32 object-cover rounded-md mb-2"
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                          "/placeholder.svg?height=100&width=100";
                                      }}
                                    />
                                  )}
                                  <h3 className="font-semibold text-primary">
                                    {product.name}
                                  </h3>
                                  <p className="text-sm text-foreground/80 mt-1 line-clamp-2">
                                    {product.description}
                                  </p>
                                  <p className="text-sm text-primary mt-1">
                                    ₹{product.price?.toLocaleString() || "N/A"}
                                  </p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 text-primary"
                                    onClick={() => {
                                      addMessage(
                                        MessageType.BOT,
                                        `You selected ${product.name}. Our team will contact you with more details about this product.`
                                      );
                                    }}
                                  >
                                    {getTranslatedText("learnMore")}
                                  </Button>
                                </div>
                              ))
                            ) : (
                              <div className="col-span-2 text-center p-4">
                                <p className="text-foreground">
                                  {getTranslatedText("noProductsFound")}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : message.type === MessageType.CONTACT ? (
                      <div className=" rounded-lg p-4 max-w-[85%] border border-primary/20 hover:shadow-primary/20 transition-all duration-300 s">
                        <h3 className="font-semibold text-primary mb-2">
                          {message.content}
                        </h3>
                        <div className="space-y-2">
                          <p className="text-foreground flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-primary" />
                            +1 (555) 123-4567
                          </p>
                          <p className="text-foreground flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                            support@swansorter.com
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-1 text-primary  hover:bg-primary/10"
                            onClick={() => {
                              window.open("tel:+15551234567", "_blank");
                            }}
                          >
                            {getTranslatedText("callNow")}
                          </Button>
                        </div>
                      </div>
                    ) : message.type === MessageType.CATALOG ? (
                      <div className=" backdrop-blur-sm rounded-lg p-4 max-w-[85%] border border-primary/20  transition-all duration-300 ">
                        <h3 className="font-semibold text-primary mb-2">
                          {message.content}
                        </h3>
                        <p className="text-foreground mb-3">
                          {getTranslatedText("catalogDesc")}
                        </p>
                        <Button
                          variant="outline"
                          className="text-primary border-primary/50 hover:bg-primary/10"
                          onClick={() => {
                            addMessage(
                              MessageType.BOT,
                              "Your catalog download has started. You'll receive it shortly."
                            );
                            setTimeout(() => {
                              window.open("catalog.pdf", "_blank");
                            }, 1500);
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {getTranslatedText("downloadPDF")}
                        </Button>
                      </div>
                    ) : message.type === MessageType.SUPPORT ? (
                      <div className=" backdrop-blur-sm rounded-lg p-4 max-w-[85%] border border-primary/20 hover:shadow-primary/20 transition-all duration-300 ">
                        <h3 className="font-semibold text-primary mb-2">
                          {message.content}
                        </h3>
                        <p className="text-foreground mb-3">
                          {getTranslatedText("supportDesc")}
                        </p>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            className="text-primary border-primary/50 hover:bg-primary/10"
                            onClick={() => {
                              window.open("tel:+15551234567", "_blank");
                            }}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            {getTranslatedText("callNow")}
                          </Button>
                          <Button
                            variant="outline"
                            className="text-primary border-primary/50 hover:bg-primary/10"
                            onClick={() => {
                              addMessage(
                                MessageType.BOT,
                                "Connecting you to live chat. A support agent will be with you shortly."
                              );
                            }}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {getTranslatedText("liveChat")}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`rounded-lg p-3 max-w-[85%] backdrop-blur-sm  transition-all duration-300 font-semibold mx-2 ${
                          message.type === MessageType.USER
                            ? " text-primary-foreground ml-auto border border-primary/20 ]"
                            : " text-foreground border border-primary/10]"
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className=" backdrop-blur-sm rounded-lg p-3 max-w-[85%] border ">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enquiry form */}
                {showEnquiryForm && (
                  <div className=" rounded-lg p-4 max-w-[85%] border border-primary/20 ">
                    <h3 className="text-primary font-bold mb-3">
                      {getTranslatedText("submitEnquiry")}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          {getTranslatedText("name")}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          className="bg-card/50 border-primary/30 text-foreground"
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          {getTranslatedText("email")}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className="bg-card/50 border-primary/30 text-foreground"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          {getTranslatedText("phone")}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="bg-card/50 border-primary/30 text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-foreground">
                          {getTranslatedText("message")}{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          className="bg-card/50 border-primary/30 text-foreground"
                          rows={3}
                        />
                        {formErrors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.message}
                          </p>
                        )}
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setShowEnquiryForm(false)}
                          className="bg-primary text-primary-foreground border"
                        >
                          {getTranslatedText("cancel")}
                        </Button>
                        <Button
                          onClick={handleEnquirySubmit}
                          className="bg-primary text-primary-foreground border "
                        >
                          {getTranslatedText("submit")}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Invisible element for auto-scrolling */}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <div className="p-5 relative -left-2  text-black">
                <form onSubmit={handleSubmit} className="flex">
                  <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={getTranslatedText("typeMessage")}
                    className=" bg-gray-200 border border-green-400 mx-2 w-[70%] md:w-[90%]  text-black placeholder-gray-400 ]"
                    disabled={isProcessing}
                  />
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || isProcessing}
                    className=" bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold text-2xl "
                  >
                    {isProcessing ? (
                      <Loader2 className="h-4 w-4 animate-spin text-2xl" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChatBot;
