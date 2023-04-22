// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwGDc3gO55AomtivU8SGv2-yu2zAkZ50g",
  authDomain: "buildzhee.firebaseapp.com",
  projectId: "buildzhee",
  storageBucket: "buildzhee.appspot.com",
  messagingSenderId: "450452249746",
  appId: "1:450452249746:web:8c2b66d35f0770843eda4b",
  measurementId: "G-VT9B73LZMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
