// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA03TCIPLnaqNoqDBcb9Ty_DNbLzoZ7UvQ",
  authDomain: "portfolio-web-8cd9b.firebaseapp.com",
  projectId: "portfolio-web-8cd9b",
  storageBucket: "portfolio-web-8cd9b.appspot.com",
  messagingSenderId: "227763880066",
  appId: "1:227763880066:web:aa4c48b9cff8b6e863349b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const workCollection = collection(db, "works");

export { db, workCollection, getDocs, doc, getDoc, setDoc };
