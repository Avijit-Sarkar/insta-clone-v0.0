// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { grtFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBotgx_O5d4yqJL-o2vJA4TyMauU3-F294",
  authDomain: "fb-clone-53d84.firebaseapp.com",
  projectId: "fb-clone-53d84",
  storageBucket: "fb-clone-53d84.appspot.com",
  messagingSenderId: "104214578389",
  appId: "1:104214578389:web:53f98351da8abe2fc18e5c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = grtFirestore();

const storage = getStorage();

export { app, db, storage };
