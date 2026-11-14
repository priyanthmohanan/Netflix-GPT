// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Ev0vgI0KM7kV8OSEE2bM1VzpG0nYStU",
    authDomain: "netflixgpt-5c0ce.firebaseapp.com",
    projectId: "netflixgpt-5c0ce",
    storageBucket: "netflixgpt-5c0ce.firebasestorage.app",
    messagingSenderId: "762789225760",
    appId: "1:762789225760:web:59def5d26fa7114e306345",
    measurementId: "G-8BWK9QCPEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();