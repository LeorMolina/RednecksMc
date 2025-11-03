const imagensGaleria = [
  "img/galeria/foto1.png",
  "img/galeria/foto2.png",
  "img/galeria/foto3.png",
  "img/galeria/foto4.png",
  "img/galeria/foto5.png",
  "img/galeria/foto6.png"
]

function carregarGaleria() {
  const container = document.querySelector("#galeria .container");
  if (!container) return;

  
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }

  const grid = document.createElement("div");
  grid.className = "galeria-posts";

  
  imagensGaleria.forEach(src => {
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto da galeria";

    
    img.onerror = function() { link.remove(); };

    link.appendChild(img);
    grid.appendChild(link);
  });

  container.appendChild(grid);
}

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {      
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth"
      });
    }
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", carregarGaleria);