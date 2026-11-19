import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhx0xyO6r-FDMOXrD4yvLFmPXCu8eXeH0",
  authDomain: "shop-web-33494.firebaseapp.com",
  projectId: "shop-web-33494",
  storageBucket: "shop-web-33494.firebasestorage.app",
  messagingSenderId: "441374464502",
  appId: "1:441374464502:web:22961839b2b15db2decfd7",
  measurementId: "G-4MCW9X7X6N"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);