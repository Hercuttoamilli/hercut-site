// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKGGT-7GTu4PuNsCBKNDa4NynytwNhEXo",
  authDomain: "hercut-4adf3.firebaseapp.com",
  projectId: "hercut-4adf3",
  storageBucket: "hercut-4adf3.firebasestorage.app",
  messagingSenderId: "977802999718",
  appId: "1:977802999718:web:d692c541c996c84ecf0167"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
