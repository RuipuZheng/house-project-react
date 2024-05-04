// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPSKaruGZ_lLOc6mdTk8ihk9pCJalduuY",
  authDomain: "house-project-f7a3b.firebaseapp.com",
  projectId: "house-project-f7a3b",
  storageBucket: "house-project-f7a3b.appspot.com",
  messagingSenderId: "695598573020",
  appId: "1:695598573020:web:4d36eacb3c6b89a49b1b19",
  measurementId: "G-0DZ0QEM5GD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
