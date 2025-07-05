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

function moveCarousel(direction) {
  const track = document.getElementById('videoCarousel');
  const videos = document.querySelectorAll('.carousel-video');
  const totalVideos = videos.length;

  // Pausar el video actual antes de cambiar
  if (videos[currentIndex] && typeof videos[currentIndex].pause === 'function') {
    videos[currentIndex].pause();
  }

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalVideos) currentIndex = totalVideos - 1;

  const offset = videos[0].offsetWidth * currentIndex;
  track.style.transform = `translateX(-${offset}px)`;

  // Mostrar u ocultar flechas
  document.getElementById('prevBtn').style.display = currentIndex > 0 ? 'block' : 'none';
  document.getElementById('nextBtn').style.display = currentIndex < totalVideos - 1 ? 'block' : 'none';
}


window.addEventListener('load', () => {
  moveCarousel(0); // Mostrar correctamente desde el inicio
});
