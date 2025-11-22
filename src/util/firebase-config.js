// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDOsbtMg4lHRZ8X5hWxBRY2HeMkR3572Rs",
  authDomain: "shopcart-c49bf.firebaseapp.com",
  projectId: "shopcart-c49bf",
  storageBucket: "shopcart-c49bf.firebasestorage.app",
  messagingSenderId: "592163983678",
  appId: "1:592163983678:web:be023a7f129553daf65c6f",
  measurementId: "G-Z2QGM9N2B0"
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig