import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkkWbTxWaOfW6YG4ZPu1i6uRQxaB6X6cQ",
  authDomain: "clone-1b89b.firebaseapp.com",
  projectId: "clone-1b89b",
  storageBucket: "clone-1b89b.appspot.com",
  messagingSenderId: "831824600229",
  appId: "1:831824600229:web:4fec8d9601d80f8596014c",
  measurementId: "G-DEETC4V9NT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth();

export { db, auth };
