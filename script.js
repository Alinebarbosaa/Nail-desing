const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuBtn.classList.toggle("open");
    });
}

// ================================
// ROLAGEM SUAVE PARA LINKS
// ================================
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ================================
// FADE-IN AO ROLAR A PÁGINA
// ================================
const elementos = document.querySelectorAll(".fade-in");

function animarAoRolar() {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", animarAoRolar);
animarAoRolar();

// ================================
// ANIMAÇÃO NO BOTÃO “AGENDE AQUI”
// ================================
const agendeBtn = document.querySelector(".btn-agendar");

if (agendeBtn) {
    setInterval(() => {
        agendeBtn.classList.toggle("pulse");
    }, 1200);
}