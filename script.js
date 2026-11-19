// Opens and closes the menu on phones
const btn = document.getElementById("menuBtn");
const links = document.getElementById("navLinks");

let savedY = 0;
function setMenu(open) {
  if (open === links.classList.contains("open")) return;
  if (open) {
    savedY = window.scrollY;
    document.body.style.top = -savedY + "px"; // freeze page where it is
  }
  links.classList.toggle("open", open);
  document.documentElement.classList.toggle("menu-open", open);
  document.body.classList.toggle("menu-open", open);
  btn.innerHTML = open ? "&#10005;" : "&#9776;";
  if (!open) {
    document.body.style.top = "";
    window.scrollTo({ top: savedY, behavior: "instant" }); // back to where you were
  }
}
if (btn && links) {
  btn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", e => {          // tap outside the panel closes it
    if (!links.contains(e.target) && !btn.contains(e.target)) setMenu(false);
  });
}

// Highlights the menu link for the page/section you're on
const navAnchors = document.querySelectorAll("#navLinks a");
function setActive(target) {
  navAnchors.forEach(a => a.classList.toggle("active", a === target));
}
const here = location.pathname.split("/").pop() || "index.html";
navAnchors.forEach(a => {
  const url = new URL(a.getAttribute("href"), location.href);
  const file = url.pathname.split("/").pop() || "index.html";
  if (!a.hash && file === here && url.search === location.search) setActive(a);
});
const spyLinks = [...navAnchors].filter(a => a.hash && document.querySelector(a.hash));
if (spyLinks.length) {
  const home = [...navAnchors].find(a => a.getAttribute("href") === "index.html");
  const spy = () => {
    let current = home;
    const y = window.innerHeight * 0.35;
    spyLinks.forEach(a => {
      if (document.querySelector(a.hash).getBoundingClientRect().top <= y) current = a;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = spyLinks[spyLinks.length - 1];
    }
    setActive(current);
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
}
  // Heart buttons: save and unsave items (wishlist)
document.addEventListener("DOMContentLoaded", () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  document.querySelectorAll(".heart").forEach(btn => {
    const id = Number(btn.dataset.id);
    if (wishlist.includes(id)) btn.classList.add("saved");
    btn.addEventListener("click", () => {
      const i = wishlist.indexOf(id);
      if (i === -1) wishlist.push(id); else wishlist.splice(i, 1);
      btn.classList.toggle("saved");
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
});
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const tabLine = document.getElementById("tabLine");

// Put the orange line under a tab
function moveLine(tab) {
  tabLine.style.left = tab.offsetLeft + "px";
  tabLine.style.width = tab.offsetWidth + "px";
}

function showLogin() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  moveLine(loginTab);
}

function showRegister() {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  moveLine(registerTab);
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

// Start on Login
showLogin();

// Re-place the line after fonts/images load and when the screen size changes
function fixLine() {
  moveLine(registerTab.classList.contains("active") ? registerTab : loginTab);
}

window.addEventListener("load", fixLine);
window.addEventListener("resize", fixLine);

// ===== CONTACT FORM -> WHATSAPP =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const message = document.getElementById('cMessage').value.trim();

    const text =
      'Hello MyShop, my name is ' + name + '.\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n\n' +
      message;

    window.open('https://wa.me/2349118335328?text=' + encodeURIComponent(text), '_blank');
    contactForm.reset();
  });
}