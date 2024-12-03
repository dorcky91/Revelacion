// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importar Firestore
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-iAP5X1zrPeEwgLPGR-oZglf5hFJH0Vs",
  authDomain: "reveal-9d19e.firebaseapp.com",
  projectId: "reveal-9d19e",
  storageBucket: "reveal-9d19e.firebasestorage.app",
  messagingSenderId: "120773416650",
  appId: "1:120773416650:web:54e8b771758e3a68538633",
  measurementId: "G-EKYXZV2TWL",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Inicializar Analytics (si lo necesitas)
const analytics = getAnalytics(app);

// Exportar la instancia de Firestore
export { db };
