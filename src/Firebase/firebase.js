// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6YwM-BGGsG_D7KrfhOYVlC3lSxj55s8w",
  authDomain: "panda-restaurant-a2e5b.firebaseapp.com",
  projectId: "panda-restaurant-a2e5b",
  storageBucket: "panda-restaurant-a2e5b.appspot.com",
  messagingSenderId: "865440120094",
  appId: "1:865440120094:web:92ce1011aaa235df105d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app