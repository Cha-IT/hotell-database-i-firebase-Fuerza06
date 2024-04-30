import { db } from "./firebaseconfig.js"
// "./firebaseconfig.js" angir at firebaseconfig.js ligger i samme mappe som denne scriptfilen.
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, query, where, orderBy} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
//Husk å endre versjonsnummer til den versjonen av Firebase du har angitt i firebaseconfig.js

/*
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
*/

// Definerer egen valgt text for hver filter
const filterText = {
    all: 'Alle rom',
    available: 'Ledige rom',
    firstFloor: '1. Etasje',
    secondFloor: '2. Etasje',
    oneBed: 'Rom med 1 seng',
    moreThanOneBed: 'Rom med flere senger',
    empty: ''
};

// Function for å tømme skjermen for rom
function clearRooms() {
    const roomContainer = document.getElementById('roomContainer');
    roomContainer.innerHTML = ''; // fjerner room div elementer
    const filteredRoomsInfo = document.getElementById('info');
    filteredRoomsInfo.textContent = ''; // fjerner info om hvilke rom som vises
}

// leger til event listener for tøm skjerm
const clearRoomsButton = document.getElementById('clearRoomsButton');
clearRoomsButton.addEventListener('click', clearRooms);

// Function for å hente rom bassret på filter
function getRooms(filter) {
    const roomContainer = document.getElementById('roomContainer');
    roomContainer.innerHTML = ''; // fjerner rom som muligens ligger i room container

    let queryRef = collection(db, 'Hotell-rom');

    // Viser aktivt filter i info elementet
    const filteredRoomsInfo = document.getElementById('info');
    filteredRoomsInfo.textContent = filterText[filter] || ''; // Bruker egen definert text for filtre dersom mulig, hvis det ikke er et filter som har egen definert tekst, så brukes ''

    switch (filter) {
        case 'all':
            // Tregner ingen filter fordi alle rom skal vises
            break;
        case 'available':
            queryRef = query(queryRef, where('isAvailable', '==', true));
            break;
        case 'firstFloor':
            queryRef = query(queryRef, where('floor', '==', 1));
            break;
        case 'secondFloor':
            queryRef = query(queryRef, where('floor', '==', 2));
            break;
        case 'oneBed':
            queryRef = query(queryRef, where('noOfBeds', '==', 1));
            break;
        case 'moreThanOneBed':
            queryRef = query(queryRef, where('noOfBeds', '>', 1));
            break;
        default:
            break;
    }

    // Hetner documneter basert på filtrert collection
    getDocs(queryRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const room = doc.data();
            const roomDiv = document.createElement('div');
            roomDiv.classList.add('room');
            roomDiv.innerHTML = `
                <h3>${doc.id}</h3>
                <p>Floor: ${room.floor}</p>
                <p>Room Type: ${room.roomType}</p>
                <p>No. of Beds: ${room.noOfBeds}</p>
                <p>Availability: ${room.isAvailable ? 'Available' : 'Not Available'}</p>
            `;
            roomContainer.appendChild(roomDiv);
        });
    }).catch((error) => {
        console.error("Error getting rooms: ", error);
    });
}

// Henter alle filter knapper
const filterButtons = document.querySelectorAll('.filter-button');

// Legger til click eventlistneres til alle filter knapper
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        getRooms(filter); // Fremkaller getRooms function med riktig valgt filter
    });
});