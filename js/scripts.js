let player;

// Esta función la llama automáticamente la API de YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'tgbNymZ7vqY', // Tu ID de video de YouTube
    playerVars: {
      controls: 1,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1
    }
  });
}

// Función para moverse entre secciones y pausar video si no está en inicio
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });

    // Si tenemos reproductor, controlamos el video
    if (player && typeof player.pauseVideo === 'function') {
      if (id === 'home') {
        // No reproducimos automáticamente, el usuario le da play
      } else {
        player.pauseVideo();
      }
    }
  }
}

