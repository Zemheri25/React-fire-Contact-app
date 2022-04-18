// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8H5Qq6-aERZsAzWZYFugd69uclT7DOsk",
  authDomain: "fire-contact-app25.firebaseapp.com",
  databaseURL: "https://fire-contact-app25-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app25",
  storageBucket: "fire-contact-app25.appspot.com",
  messagingSenderId: "1001062976404",
  appId: "1:1001062976404:web:c362bbc7da5d083cb65d81"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;