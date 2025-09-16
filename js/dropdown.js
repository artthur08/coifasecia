// Script para abrir no clique (mobile)
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      menu.classList.toggle("show");
    });

    // Fecha o menu se clicar fora
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        menu.classList.remove("show");
      }
    });
  });