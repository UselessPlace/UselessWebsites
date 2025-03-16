






function ButtonUp(){





}







function ButtonDown(){




     
}








// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your Firebase configuration (make sure this is correct)
const firebaseConfig = {
    apiKey: "AIzaSyBDIaLnHIznVtYEenpTFHnRJdlrOZ6dh_M",
    authDomain: "globalcounter-87fa1.firebaseapp.com",
    databaseURL: "https://globalcounter-87fa1-default-rtdb.firebaseio.com",
    projectId: "globalcounter-87fa1",
    storageBucket: "globalcounter-87fa1.appspot.com",
    messagingSenderId: "435003357940",
    appId: "1:435003357940:web:d7db49531bc535c47d7ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, "counter"); // Reference to the counter in Firebase

// Function to update the counter value in Firebase
function updateCounter(newValue) {
    set(counterRef, newValue);
}

// Function to increment the counter
window.increment = function () {
    get(counterRef).then(snapshot => {
        let value = snapshot.val() || 0; // Get the current value or default to 0
        updateCounter(value + 1); // Increase by 1
    });
};

// Function to decrement the counter
window.decrement = function () {
    get(counterRef).then(snapshot => {
        let value = snapshot.val() || 0; // Get the current value or default to 0
        updateCounter(value - 1); // Decrease by 1
    });
};

// Listen for real-time updates from Firebase and update the page instantly
onValue(counterRef, snapshot => {
    document.getElementById("counter").innerText = snapshot.val();
});
