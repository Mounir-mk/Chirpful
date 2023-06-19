// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAQVCpl2J-bshO3eM5GEbteVdFEa18ViU",
  authDomain: "chirpful-5906c.firebaseapp.com",
  projectId: "chirpful-5906c",
  storageBucket: "chirpful-5906c.appspot.com",
  messagingSenderId: "970340508241",
  appId: "1:970340508241:web:23194fa6e5fe9f4c44ce70",
  measurementId: "G-5HSBNC35WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);