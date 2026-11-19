import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAhx0xyO6r-FDMOXrD4yvLFmPXCu8eXeH0",
  authDomain: "shop-web-33494.firebaseapp.com",
  projectId: "shop-web-33494",
  storageBucket: "shop-web-33494.firebasestorage.app",
  messagingSenderId: "441374464502",
  appId: "1:441374464502:web:22961839b2b15db2decfd7",
  measurementId: "G-4MCW9X7X6N"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

const accountLink = document.getElementById("userLink");
const floatBox = document.getElementById("userFloat");
const profileInfo = document.getElementById("profileInfo");
const profileGuest = document.getElementById("profileGuest");
const logoutBtn = document.getElementById("logoutBtn");
const changePhotoBtn = document.getElementById("changePhotoBtn");
const avatarInput = document.getElementById("avatarInput");

let currentUser = null;

function nameOf(user) {
  return user.displayName || user.email.split("@")[0];
}

function getSavedAvatar(uid) {
  try { return localStorage.getItem("avatar_" + uid); } catch (e) { return null; }
}

function saveAvatar(uid, dataUrl) {
  try { localStorage.setItem("avatar_" + uid, dataUrl); return true; } catch (e) { return false; }
}

function paintAvatar(el, user) {
  if (!el) return;
  const saved = getSavedAvatar(user.uid);
  if (saved) {
    el.style.backgroundImage = 'url("' + saved + '")';
    el.textContent = "";
  } else {
    el.style.backgroundImage = "";
    el.textContent = nameOf(user).charAt(0).toUpperCase();
  }
}

function resizeImage(file, size, callback) {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const side = Math.min(img.width, img.height);
      const sx = (img.width - side) / 2;
      const sy = (img.height - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
      callback(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => alert("Could not read that image. Try another one.");
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
const db = getFirestore(app);
window.cloudDB = {
  get: async function (uid, name) {
    const snap = await getDoc(doc(db, 'users', uid, 'data', name));
    return snap.exists() ? snap.data() : null;
  },
  set: function (uid, name, data) {
    return setDoc(doc(db, 'users', uid, 'data', name), data);
  }
};
onAuthStateChanged(auth, (user) => {
    if (user) {
    localStorage.setItem("currentUserId", user.uid);
  } else {
    localStorage.removeItem("currentUserId");
  }
  currentUser = user;
  window.authUser = user;
window.dispatchEvent(new CustomEvent('auth-ready', { detail: user }));
  document.querySelectorAll('.nav-account').forEach(function (a) {
  a.href = user ? 'account.html' : 'register.html';
});

if (user && /register\.html|login\.html/.test(location.pathname)) {
  location.replace('account.html');
}
  if (user) {
    const name = nameOf(user);

    if (accountLink) accountLink.href = "account.html#profile";

    if (floatBox) {
      paintAvatar(document.getElementById("floatAvatar"), user);
      document.getElementById("floatName").textContent = name;
      floatBox.hidden = false;
    }

    if (profileInfo) {
      paintAvatar(document.getElementById("profileAvatar"), user);
      document.getElementById("profileName").textContent = name;
      document.getElementById("profileEmail").textContent = user.email;
      document.getElementById("profileSince").textContent =
        "Member since " + new Date(user.metadata.creationTime).toLocaleDateString();
      profileInfo.hidden = false;
    }
    if (profileGuest) profileGuest.hidden = true;
  } else {
    if (accountLink) accountLink.href = "register.html";
    if (floatBox) floatBox.hidden = true;
    if (profileInfo) profileInfo.hidden = true;
    if (profileGuest) profileGuest.hidden = false;
  }
});

if (changePhotoBtn && avatarInput) {
  changePhotoBtn.addEventListener("click", () => avatarInput.click());

  avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
    if (!file || !currentUser) return;
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image.");
      return;
    }
    resizeImage(file, 300, (dataUrl) => {
      if (saveAvatar(currentUser.uid, dataUrl)) {
        paintAvatar(document.getElementById("profileAvatar"), currentUser);
      } else {
        alert("Could not save the photo in this browser.");
      }
    });
    avatarInput.value = "";
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    localStorage.removeItem("currentUserId");
    await signOut(auth);
    window.location.href = "index.html";
  });
}
function skImg(img) {
  if (img.complete) return;
  img.classList.add('sk');
  var done = function () { img.classList.remove('sk'); };
  img.addEventListener('load', done);
  img.addEventListener('error', done);
}
document.querySelectorAll('img').forEach(skImg);
new MutationObserver(function (list) {
  list.forEach(function (m) {
    m.addedNodes.forEach(function (n) {
      if (n.nodeType !== 1) return;
      if (n.tagName === 'IMG') skImg(n);
      if (n.querySelectorAll) n.querySelectorAll('img').forEach(skImg);
    });
  });
}).observe(document.documentElement, { childList: true, subtree: true });