import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3qBi2L-3H8ibW995Vzqre_Gi2m-MxYyM",
  authDomain: "contact-form-87594.firebaseapp.com",
  projectId: "contact-form-87594",
  storageBucket: "contact-form-87594.firebasestorage.app",
  messagingSenderId: "654025540415",
  appId: "1:654025540415:web:3e3698ef9c7ada8211098a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Read all documents
async function getAllUsers() {
  const usersCol = collection(db, "users"); // must pass db
  const snapshot = await getDocs(usersCol);
  snapshot.forEach(doc => console.log(doc.id, doc.data()));
}



getAllUsers();