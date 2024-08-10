// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "inventory-management-5286e.firebaseapp.com",
    projectId: "inventory-management-5286e",
    storageBucket: "inventory-management-5286e.appspot.com",
    messagingSenderId: "471464265120",
    appId: "1:471464265120:web:e257e62a3e9fe3907a90c5",
    measurementId: "G-29JKYHYWG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}