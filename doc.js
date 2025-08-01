/* DESPLEGAR MENÚ */

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  const navList = document.getElementById("navList");

  // Alternar menú al dar clic en el botón
  toggleButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el clic se propague al documento
    navList.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll(".nav__item a").forEach(link => {
    link.addEventListener("click", (e) => {
      // Si el enlace es el que abre el modal, no cierres el menú aún
      if (link.id === "abrirModalPreparacion") return;
  
      navList.classList.remove("active");
    });
  });
  
  // Cerrar el menú al hacer clic fuera
  document.addEventListener("click", function(event) {
    const isClickInsideMenu = navList.contains(event.target);
    const isClickOnToggle = toggleButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      navList.classList.remove("active");
    }
  });
});


/* MODAL COMPETENCIAS */

document.addEventListener("DOMContentLoaded", () => {
  const abrir = document.getElementById("abrirModalPreparacion");
  const modal = document.getElementById("modalPreparacion");
  const cerrar = document.getElementById("cerrarModalPreparacion");

  abrir.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});







