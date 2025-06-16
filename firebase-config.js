// firebase-config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjGS-wt6dO-tmn_hqC2kyA-nFZwuJPL90",
  authDomain: "king-73e43.firebaseapp.com",
  databaseURL: "https://king-73e43-default-rtdb.firebaseio.com",
  projectId: "king-73e43",
  storageBucket: "king-73e43.firebasestorage.app",
  messagingSenderId: "817043914287",
  appId: "1:817043914287:web:4eddfb4e6071affea010da"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
