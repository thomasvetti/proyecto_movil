// Importa solo los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importa Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA4NYWUvnMqNxe_6AF7zHde8fLKhI3U7ak",
  authDomain: "proyecto-50166.firebaseapp.com",
  databaseURL: "https://proyecto-50166-default-rtdb.firebaseio.com",
  projectId: "proyecto-50166",
  storageBucket: "proyecto-50166.appspot.com",
  messagingSenderId: "136563150356",
  appId: "1:136563150356:web:468cec1cf71da967cea101",
  measurementId: "G-CJHMFK08NW"
};

// Inicializa Firebase y los servicios de autenticación y Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Exporta Firestore
