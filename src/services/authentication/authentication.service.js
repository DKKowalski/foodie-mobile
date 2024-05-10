// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvfzLdjNOejT0fy1hYvZoALFGWlOEX6Zc",
  authDomain: "foodie-app-2cd33.firebaseapp.com",
  projectId: "foodie-app-2cd33",
  storageBucket: "foodie-app-2cd33.appspot.com",
  messagingSenderId: "996606568851",
  appId: "1:996606568851:web:5e10427cb287eef19c6066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const loginRequest = (email, password) => {
  setTimeout(() => {
    signInWithEmailAndPassword(auth, email, password);
  }, 2000);
};
