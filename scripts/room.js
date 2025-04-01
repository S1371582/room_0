
// Estado del juego
const gameState = {
    pantallaDesbloqueada: false,
    tarjetaObtenida: false,
  };

 
  // Luz
  document.querySelector('.apagar-luz').addEventListener('click', function (e) {
    e.preventDefault();
  
    const audio = document.getElementById('sonido-flash');
    audio.currentTime = 0;
    audio.play();
  
    const capaNegra = document.getElementById('apagado');
    capaNegra.classList.add('activo');
  
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1200);
  });
  
  // Intro: cerrar narrativa
  function ocultarIntro() {
    document.getElementById('intro-text').style.display = 'none';
    localStorage.setItem('introMostrada', 'true');
  }

  // Cuadro: revelar código
  document.querySelector('.interactuar-cuadro').addEventListener('click', function (e) {
    e.preventDefault();
    const pista = document.getElementById('pista-codigo');
    pista.style.display = 'block';
    this.style.display = 'none';
  });
  
  // Pantalla: abrir terminal
  document.querySelector('.pantalla').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('terminal').style.display = 'flex';
  });
  
  // Verificar código en terminal
  function verificarCodigo() {
    const input = document.getElementById('codigoInput').value.trim().toUpperCase();
    const respuesta = document.getElementById('respuestaTerminal');
  
    if (input === "#374X") {
      gameState.pantallaDesbloqueada = true;
      respuesta.innerHTML = `
        <p>Acceso concedido...</p>
        <p>Identidad parcial recuperada.</p>
        <p>Nombre: ██████</p>
        <p>Archivos dañados. Continuar con la búsqueda.</p>
      `;
    } else {
      respuesta.textContent = "Código incorrecto. Acceso denegado.";
    }
  }
  
  // Cerrar terminal
  function cerrarTerminal() {
    document.getElementById('terminal').style.display = 'none';
  }
  
  // Cajones: obtener tarjeta
  document.querySelector('.cajones').addEventListener('click', function (e) {
    e.preventDefault();
  
    if (!gameState.tarjetaObtenida) {
      gameState.tarjetaObtenida = true;
      document.getElementById('cajon-msg').style.display = 'flex';
    }
  });
  
  // Cerrar mensaje de cajón
  function cerrarCajon() {
    document.getElementById('cajon-msg').style.display = 'none';
  }
  
  // Puerta: comprobar desbloqueo
  document.querySelector('.puerta').addEventListener('click', function (e) {
    e.preventDefault();
  
    if (gameState.pantallaDesbloqueada && gameState.tarjetaObtenida) {
      window.location.href = 'outer_space.html';
    } else {
      document.getElementById('puerta-msg').style.display = 'flex';
    }
  });
  
  // Cerrar mensaje de la puerta
  function cerrarPuertaMsg() {
    document.getElementById('puerta-msg').style.display = 'none';
  }

  document.querySelector('.ventana').addEventListener('click', function (e) {
    e.preventDefault();
  
    document.getElementById('vista-ventana').style.display = 'flex';
  });

  document.getElementById('vista-ventana').addEventListener('click', () => {
    window.location.href = 'room.html?volver=ventana';
  });
  
  document.addEventListener('keydown', function (e) {
    if (document.getElementById('vista-ventana').style.display === 'flex') {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        window.location.href = 'room.html?volver=ventana';
      }
    }
  });


  
  
  
  