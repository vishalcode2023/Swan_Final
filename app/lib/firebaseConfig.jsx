
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBb4kINferntnAMoSf9lGtZvLAmp_IPog",
  authDomain: "swanlogin.firebaseapp.com",
  projectId: "swanlogin",
  storageBucket: "swanlogin.firebasestorage.app",
  messagingSenderId: "765235097263",
  appId: "1:765235097263:web:b33614ae31df7ec004ae5a",
  measurementId: "G-Y0W69NR7KZ"
};

const app = initializeApp(firebaseConfig);

let analytics = null;

const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized successfully');
    }
  } catch (err) {
    console.log('Firebase Analytics initialization failed:', err.message);
  }
};

initAnalytics();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const trackUserActivity = (userId, userName) => {
  if (analytics) {
    try {
      logEvent(analytics, 'user_active', {
        user_id: userId,
        user_name: userName,
        timestamp: new Date().toISOString()
      });
      console.log('User activity tracked successfully');
      return true;
    } catch (error) {
      console.error('Error tracking user activity:', error);
      return false;
    }
  }
  return false;
};

const trackPageView = (pageName, pageLocation) => {
  if (analytics) {
    try {
      logEvent(analytics, 'page_view', {
        page_name: pageName,
        page_location: pageLocation,
        timestamp: new Date().toISOString()
      });
      console.log(`Page view tracked: ${pageName}`);
      return true;
    } catch (error) {
      console.error('Error tracking page view:', error);
      return false;
    }
  }
  return false;
};

export { 
  app, 
  analytics, 
  auth, 
  googleProvider, 
  trackUserActivity,
  trackPageView
};
