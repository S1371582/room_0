document.addEventListener('DOMContentLoaded', () => {
    const lunaZona = document.getElementById('lunaZona');
    const espacio = document.getElementById('espacio');

  
    lunaZona.addEventListener('mouseenter', () => {
      espacio.classList.add('temblor');
    });
  
    lunaZona.addEventListener('mouseleave', () => {
      espacio.classList.remove('temblor');
    });
  });

  const mensaje = document.getElementById('mensajeEspacio');

  lunaZona.addEventListener('mouseenter', () => {
    espacio.classList.add('temblor');
  });

lunaZona.addEventListener('mouseleave', () => {
  espacio.classList.remove('temblor');

  
  // Mostrar mensaje al salir 
  mensaje.classList.add('visible');

  // Opcional: ocultar el mensaje después de unos segundos
  setTimeout(() => {
    mensaje.classList.remove('visible');
  }, 5000);
});
