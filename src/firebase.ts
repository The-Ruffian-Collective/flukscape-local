import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEERD14Z-BrORP837Ii3qF_L26mK7B4CM",
  authDomain: "flukscape-local.firebaseapp.com",
  projectId: "flukscape-local",
  storageBucket: "flukscape-local.firebasestorage.app",
  messagingSenderId: "242136897315",
  appId: "1:242136897315:web:c1924a44e27319ef9ede96",
  measurementId: "G-V7XMJR7GFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
