// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs8Wd-KEgkhiSZY8sxiM7TtwakldZOdbk",
  authDomain: "assignment-10-427ea.firebaseapp.com",
  projectId: "assignment-10-427ea",
  storageBucket: "assignment-10-427ea.firebasestorage.app",
  messagingSenderId: "674625623116",
  appId: "1:674625623116:web:d3c27a5d574f89d6d910e9",
  measurementId: "G-DLM58HRDSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

export default auth;