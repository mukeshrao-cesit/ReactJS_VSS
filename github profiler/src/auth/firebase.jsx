// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjqhkfbjAE7uR2ONselUNudUFQ75lmamk",
  authDomain: "github-profiler-ba33f.firebaseapp.com",
  projectId: "github-profiler-ba33f",
  storageBucket: "github-profiler-ba33f.appspot.com",
  messagingSenderId: "485778021941",
  appId: "1:485778021941:web:7cd75c1b17b916618ddb7c",
  measurementId: "G-H5K0WW4767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
