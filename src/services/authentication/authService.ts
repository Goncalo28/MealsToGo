import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeHBBm76qhtrzJMQ6GXjoZ2V7BDGnKW0I",
  authDomain: "mealstogo-4d82f.firebaseapp.com",
  projectId: "mealstogo-4d82f",
  storageBucket: "mealstogo-4d82f.appspot.com",
  messagingSenderId: "616271616203",
  appId: "1:616271616203:web:aeffa90832c5920a55e34e",
};

initializeApp(firebaseConfig);

const auth = getAuth();
export const loginRequest = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
