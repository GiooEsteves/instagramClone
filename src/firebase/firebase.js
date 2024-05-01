import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCYDGEI8DBB1lH5-_cKqUr1b992sDhco2A",
  authDomain: "insta-97e6c.firebaseapp.com",
  projectId: "insta-97e6c",
  storageBucket: "insta-97e6c.appspot.com",
  messagingSenderId: "554417812419",
  appId: "1:554417812419:web:7af36c2a352dde2267c376",
  measurementId: "G-QNGXXPDKLJ"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}