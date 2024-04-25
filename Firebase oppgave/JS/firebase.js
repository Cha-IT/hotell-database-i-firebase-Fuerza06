import { db } from "./firebaseconfig.js"
// "./firebaseconfig.js" angir at firebaseconfig.js ligger i samme mappe som denne scriptfilen.
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
//Husk å endre versjonsnummer til den versjonen av Firebase du har angitt i firebaseconfig.js


async function addRoom (roomNo, floor, roomType, noOfBeds, isAvailable){
    await setDoc(
        doc(db, "Hotell-rom", roomNo), {
            floor: floor,
            roomType: roomType,
            noOfBeds: noOfBeds,
            isAvailable: isAvailable,
        }
    ) 
}

addRoom("101", 1, "single", 1, true);
addRoom("102", 1, "double", 2, false);
addRoom("103", 1, "suite", 5, true);
addRoom("201", 2, "double", 2, false);
addRoom("202", 2, "suite", 3, true);
addRoom("203", 2, "single", 1, false);
addRoom("301", 3, "suite", 4, true);
addRoom("302", 3, "double", 2, false);
addRoom("303", 3, "double", 2, true);
addRoom("104", 1, "single", 1, false);
addRoom("204", 2, "single", 1, true);
addRoom("304", 3, "suite", 5, false);
addRoom("105", 1, "suite", 5, false);
addRoom("205", 2, "double", 2, true);
addRoom("305", 3, "singe", 1, true);
