//MENÚ
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const dropdown = document.getElementById("dropdown");

    menuButton.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });
});

function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var caption = document.getElementById("caption");

    // Mostrar el lightbox centrado
    lightbox.style.display = "flex";
    lightboxImg.src = element.src; // Cambiar la imagen del lightbox a la seleccionada
    caption.innerHTML = element.alt; // Mostrar el texto alternativo de la imagen como leyenda

    // Mostrar el lightbox con una transición suave
    setTimeout(() => {
        lightbox.classList.add("show");
    }, 10);
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");

    // Ocultar el lightbox con una transición suave
    lightbox.classList.remove("show");
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 500);
}