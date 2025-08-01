/*  DESPLEGAR MENÚ */

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
    link.addEventListener("click", () => {
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

/* SECCIÓN FINCASH CAMBIO DE IMAGEN */

window.onload = function() {
    const carousels = document.querySelectorAll('.view_img');

    carousels.forEach(container => {
        const images = container.querySelectorAll('.img_view');
        let current = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? "1" : "0";
            });
        }

        showImage(current);

        setInterval(() => {
            current = (current + 1) % images.length;
            showImage(current);
        }, 3000);
    });
};


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


document.getElementById("mailLink").addEventListener("click", function() {
  window.location.href = this.getAttribute("data-mailto");
});