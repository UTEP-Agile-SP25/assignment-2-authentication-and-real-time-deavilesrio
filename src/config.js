// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHq15ll-PtiMoGDuEF-Md_C5fsBGEiswQ",
  authDomain: "aviles-sandbox.firebaseapp.com",
  projectId: "aviles-sandbox",
  storageBucket: "aviles-sandbox.firebasestorage.app",
  messagingSenderId: "701603218057",
  appId: "1:701603218057:web:688b6f95bd90253f697c58",
  measurementId: "G-8MLEDWYMVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app