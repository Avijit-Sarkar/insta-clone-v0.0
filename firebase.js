// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_rTsez7wBvw4jNf_S6X5D2MQ32o6qwoA",
  authDomain: "instaclone-v0.firebaseapp.com",
  projectId: "instaclone-v0",
  storageBucket: "instaclone-v0.appspot.com",
  messagingSenderId: "837599203768",
  appId: "1:837599203768:web:a68de7068335253300bf4d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
