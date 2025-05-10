// Import Next.js configuration type
import type { NextConfig } from "next";

// Define Next.js configuration object
const nextConfig: NextConfig = {
  // Enable React Strict Mode for additional development checks
  reactStrictMode: true,
  
  // Disable development mode indicators
  devIndicators: false,
  
  // Environment variables configuration
  env: {
    // Google Maps API key for map functionality
    GOOGLEMAP_API_KEY: process.env.GOOGLEMAP_API_KEY,
    
    // Firebase configuration variables
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
<<<<<<< HEAD
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_DB_REFERENCE: process.env.FIREBASE_DB_REFERENCE,
    
    LOGIN_USER_EMAIL_ADDRESS: process.env.LOGIN_USER_EMAIL_ADDRESS,
    LOGIN_USER_PASSWORD: process.env.LOGIN_USER_PASSWORD
=======
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
>>>>>>> parent of e551fd9 (seting up for my firebase real time dastabase for trading journal)
  },
};

// Export the configuration
export default nextConfig;
