import { auth } from "./firebase-init.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  const info = document.getElementById("profileInfo");
  const guest = document.getElementById("profileGuest");

  if (!user) {
    info.hidden = true;
    guest.hidden = false;
    return;
  }

  guest.hidden = true;
  info.hidden = false;
  const name = user.displayName || user.email.split("@")[0];
  document.getElementById("profileAvatar").textContent = name.charAt(0).toUpperCase();
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileSince").textContent =
    "Member since " + new Date(user.metadata.creationTime).toLocaleDateString();
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});