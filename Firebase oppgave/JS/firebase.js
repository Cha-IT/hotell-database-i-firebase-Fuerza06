import { db } from "./firebaseconfig.js"
// "./firebaseconfig.js" angir at firebaseconfig.js ligger i samme mappe som denne scriptfilen.
import { collection, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
//Husk å endre versjonsnummer til den versjonen av Firebase du har angitt i firebaseconfig.js

