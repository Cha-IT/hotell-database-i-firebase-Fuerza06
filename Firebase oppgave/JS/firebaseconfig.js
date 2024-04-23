// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
//NB: Pass på at versjonsnummeret i URL-en (9.6.1) er det samme som versjonsnummeret fra koden du kopierte da du satte opp webappen din (f.eks. 10.0.1).

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc6m8Dyt-uN9FPeSC95Jh2Ij-J5yS364k",
    authDomain: "hotell-ef53e.firebaseapp.com",
    projectId: "hotell-ef53e",
    storageBucket: "hotell-ef53e.appspot.com",
    messagingSenderId: "717970361276",
    appId: "1:717970361276:web:259ad9525aac01e48cf9b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };