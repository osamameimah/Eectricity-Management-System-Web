 // 1. استيراد الدوال اللازمة من Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // هذا السطر كان مفقوداً

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyAXMHQeIT8guw8p7NdLaAjKVNh1pXLNbY4", 
  authDomain: "smart-reader-eaab3.firebaseapp.com",
  projectId: "smart-reader-eaab3",
  storageBucket: "smart-reader-eaab3.firebasestorage.app",
  messagingSenderId: "687425613286",
  appId: "1:687425613286:web:3e5bf7dca6ffe40cfdfa27"
};

// 2. تهيئة تطبيق Firebase
const app = initializeApp(firebaseConfig);

// 3. تهيئة Firestore وتصديرها لاستخدامها في ملفات أخرى
export const db = getFirestore(app);