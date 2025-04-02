
document.addEventListener('DOMContentLoaded', () => {
  const lunaZona = document.getElementById('lunaZona');
  const espacio = document.getElementById('espacio');
  const mensaje = document.getElementById('mensajeEspacio');

  let mensajeMostrado = false;

  // PC: mouse
  lunaZona.addEventListener('mouseenter', () => {
    espacio.classList.add('temblor');
  });

  lunaZona.addEventListener('mouseleave', () => {
    espacio.classList.remove('temblor');
    mostrarMensaje();
  });

  // Móvil: touch
  lunaZona.addEventListener('touchstart', () => {
    espacio.classList.add('temblor');
    mostrarMensaje();
  }, { once: true }); // solo una vez
  

  function mostrarMensaje() {
    if (!mensajeMostrado) {
      mensaje.classList.add('visible');
      mensajeMostrado = true;

      setTimeout(() => {
        mensaje.classList.remove('visible');
      }, 5000);
    }
  }
});
