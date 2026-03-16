/* ================== MENU TOGGLE ================== */
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
if(nav.style.display === "flex"){
nav.style.display = "none";
} else {
nav.style.display = "flex";
}
});

/* ================== SCROLL REVEAL ================== */
const sections = document.querySelectorAll("section, .about-card, .info-card, .education-card, .skills-card, .projects, .contact-card, .journey");

function reveal() {
let windowHeight = window.innerHeight;
sections.forEach(section => {
let sectionTop = section.getBoundingClientRect().top;
let revealPoint = 150;
if(sectionTop < windowHeight - revealPoint){
section.classList.add("show");
}
});
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* ================== SCROLL PROGRESS BAR ================== */
const progressBar = document.getElementById("progress-bar");
window.onscroll = function() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
progressBar.style.width = scrolled + "%";
}

/* ================== SKILLS BAR ANIMASI ================== */
window.addEventListener("load", () => {
const htmlBar = document.querySelector(".html");
const cssBar = document.querySelector(".css");
const jsBar = document.querySelector(".js");

htmlBar.style.width = "90%";
cssBar.style.width = "80%";
jsBar.style.width = "70%";
});

/* ================== LOADING SCREEN ================== */
window.addEventListener("load", () => {
const loader = document.getElementById("loader");
loader.style.display = "none";
});