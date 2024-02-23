// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCE0Bn_nCEQfNFFgCDZvszWPuUFJnSZ9U",
  authDomain: "todo-app-f1a8e.firebaseapp.com",
  projectId: "todo-app-f1a8e",
  storageBucket: "todo-app-f1a8e.appspot.com",
  messagingSenderId: "828512645885",
  appId: "1:828512645885:web:80e97f65613a2f5cc64494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)