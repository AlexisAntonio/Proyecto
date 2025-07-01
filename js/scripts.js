// Espera a que todo el contenido esté listo
document.addEventListener('DOMContentLoaded', function () {

  // Función de scroll
  window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("No se encontró la sección:", id);
    }
  };

  // Formulario
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const response = document.getElementById('formResponse');

      if (!name || !email.includes('@') || message.length < 10) {
        response.innerText = "Por favor completa los campos correctamente.";
        response.style.color = "red";
        return;
      }

      response.innerText = "¡Mensaje enviado con éxito!";
      response.style.color = "green";
      form.reset();
    });
  }

});
