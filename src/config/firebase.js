// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6I5Om-tRfEQdHNd4Wvz7GBWwF9crY_4g",
  authDomain: "signup-signin-app-1cc3e.firebaseapp.com",
  projectId: "signup-signin-app-1cc3e",
  storageBucket: "signup-signin-app-1cc3e.appspot.com",
  messagingSenderId: "25442771856",
  appId: "1:25442771856:web:a1f2ee9148981f73094915",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Write Your Own Code For The Service Used
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
