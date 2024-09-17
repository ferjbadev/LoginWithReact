// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgo_adpul5Ysj0oExH6IC-NRStvXqg4no",
    authDomain: "react-login-64288.firebaseapp.com",
    projectId: "react-login-64288",
    storageBucket: "react-login-64288.appspot.com",
    messagingSenderId: "389173857809",
    appId: "1:389173857809:web:b9e25f1652e409790d2bb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
