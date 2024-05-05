// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-yavar.firebaseapp.com",
  projectId: "taskmanager-yavar",
  storageBucket: "taskmanager-yavar.appspot.com",
  messagingSenderId: "159581161708",
  appId: "1:159581161708:web:30234ceccc40907d89fdc9",
  measurementId: "G-EFJ3TGB82K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);