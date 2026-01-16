import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCp1qmx5Goz90016MfH4qH_O2PKWpvdXbY",
  authDomain: "jobprepgenie.firebaseapp.com",
  projectId: "jobprepgenie",
  storageBucket: "jobprepgenie.firebasestorage.app",
  messagingSenderId: "511425222242",
  appId: "1:511425222242:web:315e667312ed64b390233b",
  measurementId: "G-PFHYHKK2CV"
};

const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);