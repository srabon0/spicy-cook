// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyzXHuu1u1yHTOL-gQLYSvqxfGoGMugOA",
  authDomain: "spicy-cook.firebaseapp.com",
  projectId: "spicy-cook",
  storageBucket: "spicy-cook.appspot.com",
  messagingSenderId: "1023062369461",
  appId: "1:1023062369461:web:116a28ac0b96d178258afc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;