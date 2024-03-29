// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBLgXS3yQ22qNeEYue6SOb_uqI5zFgNtA",
  authDomain: "instantchat-99fc9.firebaseapp.com",
  projectId: "instantchat-99fc9",
  storageBucket: "instantchat-99fc9.appspot.com",
  messagingSenderId: "545271307055",
  appId: "1:545271307055:web:27f56e16a2004366fb1fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);