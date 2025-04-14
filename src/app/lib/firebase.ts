import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
    apiKey: "AIzaSyCteIviMQK-nLySUFMzeRVHZn50yLGjyDI",
    authDomain: "todolist-f7a4f.firebaseapp.com",
    projectId: "todolist-f7a4f",
    storageBucket: "todolist-f7a4f.firebasestorage.app",
    messagingSenderId: "119020983616",
    appId: "1:119020983616:web:4f5440bdc967feb8fe56a5",
    measurementId: "G-NJQJ2MWCXW"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

