// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {auth, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4m4KxDjNHh8vtoMWjcluvQBHhJ1D6Vuw",
  authDomain: "react-test-f2d98.firebaseapp.com",
  projectId: "react-test-f2d98",
  storageBucket: "react-test-f2d98.appspot.com",
  messagingSenderId: "175835396412",
  appId: "1:175835396412:web:84836b7f6eef2723688639",
  measurementId: "G-VD6KJT4XKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
