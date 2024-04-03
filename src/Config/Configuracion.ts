// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOrKDhR3Rk9qWunVHM_YobOsAyH9ESBpk",
    authDomain: "proyectobasededatos-35b2c.firebaseapp.com",
    projectId: "proyectobasededatos-35b2c",
    storageBucket: "proyectobasededatos-35b2c.appspot.com",
    messagingSenderId: "988250884515",
    appId: "1:988250884515:web:9036fb2a6d158e8802f216"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
export const storage = getStorage(app);


