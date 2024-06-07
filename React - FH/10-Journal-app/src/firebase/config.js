// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pocGaMOLh4VjyZzwOMb-uxb6iM3T4mA",
  authDomain: "journalapp-c1166.firebaseapp.com",
  projectId: "journalapp-c1166",
  storageBucket: "journalapp-c1166.appspot.com",
  messagingSenderId: "125154707333",
  appId: "1:125154707333:web:20e806463b1ae23e3da6ec"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)