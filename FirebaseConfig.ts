// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrFjd-xLs_kjNi3RLpI4rTL5Wv6M8ibXI",
  authDomain: "memento-804a8.firebaseapp.com",
  projectId: "memento-804a8",
  storageBucket: "memento-804a8.appspot.com",
  messagingSenderId: "273926185446",
  appId: "1:273926185446:web:69b6331cfb112de8073627",
  measurementId: "G-M92YTBTL07"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);