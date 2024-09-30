// firebaseConfig1.js for web
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const webAuth = getAuth(app);

export { app, webAuth };
