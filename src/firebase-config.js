// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA7sXwYpJvo5zTIlbXuoQPBaua0BVqvwIM",
	authDomain: "get-slacking.firebaseapp.com",
	projectId: "get-slacking",
	storageBucket: "get-slacking.appspot.com",
	messagingSenderId: "744727742366",
	appId: "1:744727742366:web:801ce8c946df89432ab88f",
	measurementId: "G-7S1W51XV49",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const database = getFirestore(firebaseApp);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, database };
