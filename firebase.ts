// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpe1anN7dWKp1Gutjqgw2DzmVOAqfZe2w",
    authDomain: "netflix-ebb29.firebaseapp.com",
    projectId: "netflix-ebb29",
    storageBucket: "netflix-ebb29.appspot.com",
    messagingSenderId: "248863094502",
    appId: "1:248863094502:web:42c0adaf4602fb0d8eed27",
    measurementId: "G-3H3PZC6BJF"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }