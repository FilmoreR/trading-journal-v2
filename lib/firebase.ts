// Import Firebase initialization and app management functions
import { initializeApp, getApps, getApp } from 'firebase/app';
// Import Firebase Realtime Database function
import { getDatabase } from 'firebase/database';

// Firebase configuration object using environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,           // API key for Firebase services
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,    // Auth domain for Firebase Auth
  databaseURL: process.env.FIREBASE_DATABASE_URL,  // URL of the Realtime Database
  projectId: process.env.FIREBASE_PROJECT_ID,      // Firebase project identifier
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,  // Storage bucket for Firebase Storage
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,  // Sender ID for Firebase Cloud Messaging
  appId: process.env.FIREBASE_APP_ID,             // Unique identifier for the Firebase app
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,             // Unique identifier for the Firebase app
};

// Initialize Firebase app if it doesn't exist, otherwise get the existing app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Export initialized Firebase Realtime Database instance
export const database = getDatabase(app);
