// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "zilix-ee81d.firebaseapp.com",
  projectId: "zilix-ee81d",
  storageBucket: "zilix-ee81d.appspot.com",
  messagingSenderId: "772197902872",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-SNWTVEQ0TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
