// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3E1llJM9BWg-8oSJO1TIGlBEH6JNHwwQ",
  authDomain: "project-vuln.firebaseapp.com",
  projectId: "project-vuln",
  storageBucket: "project-vuln.appspot.com",
  messagingSenderId: "770357974960",
  appId: "1:770357974960:web:00aa972808ce0ee6c0e875",
  measurementId: "G-55NCCGCG6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);