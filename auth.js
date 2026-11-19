import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhx0xyO6r-FDMOXrD4yvLFmPXCu8eXeH0",
  authDomain: "shop-web-33494.firebaseapp.com",
  projectId: "shop-web-33494",
  storageBucket: "shop-web-33494.firebasestorage.app",
  messagingSenderId: "441374464502",
  appId: "1:441374464502:web:22961839b2b15db2decfd7",
  measurementId: "G-4MCW9X7X6N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function friendlyError(err) {
  switch (err.code) {
    case "auth/email-already-in-use": return "That email is already registered. Try logging in.";
    case "auth/weak-password": return "Password must be at least 6 characters.";
    case "auth/invalid-email": return "Please enter a valid email address.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found": return "Wrong email or password.";
    case "auth/operation-not-allowed": return "Email/Password sign-in is not enabled in Firebase yet.";
    case "auth/network-request-failed": return "Network problem. Check your connection.";
    default: return err.message;
  }
}

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const [username, email, password] = registerForm.querySelectorAll("input");
  try {
    const cred = await createUserWithEmailAndPassword(auth, email.value.trim(), password.value);
    await updateProfile(cred.user, { displayName: username.value.trim() });
      localStorage.setItem("currentUserId", cred.user.uid);
    alert("Account created!");
    window.location.href = "index.html";
  } catch (err) {
    alert(friendlyError(err));
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const [email, password] = loginForm.querySelectorAll("input");
  try {
     const cred = await signInWithEmailAndPassword(auth, email.value.trim(), password.value);
        localStorage.setItem("currentUserId", cred.user.uid);
    window.location.href = "index.html";
  } catch (err) {
    alert(friendlyError(err));
  }
});

const forgotLink = document.getElementById("forgotLink");

if (forgotLink) {
  forgotLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const emailInput = loginForm.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (!email) {
      alert("Type your email in the box above first, then tap Forgot password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("If that email has an account, a reset link has been sent. Check your inbox and spam folder.");
    } catch (err) {
      alert(friendlyError(err));
    }
  });
}