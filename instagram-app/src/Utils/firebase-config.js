// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOOoDitbPG9sC0aoIxNaej31s2X_cU5y0",
  authDomain: "instagram-app-b2817.firebaseapp.com",
  projectId: "instagram-app-b2817",
  storageBucket: "instagram-app-b2817.appspot.com",
  messagingSenderId: "135885620321",
  appId: "1:135885620321:web:115a99415ee57f7e891620",
  measurementId: "G-4FWQP0E02B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);