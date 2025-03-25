const zones = document.querySelectorAll('.hover-zone');
const audio = document.getElementById('memory-audio');

let activeOverlay = null;

zones.forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    const shotId = `#shot${zone.id.slice(-1)}`;
    const shot = document.querySelector(shotId);

    document.querySelectorAll('.overlay').forEach(o => o.classList.remove('wavy'));

    // Add wavy to the new one
    shot.classList.add('wavy');
    activeOverlay = shot;

    // Restart the sound
    audio.currentTime = 0;
    audio.play();
  });

  // Stops when mouse leaves
  zone.addEventListener('mouseleave', () => {
  });
});

// Wavy effect stops after the sound is over
audio.addEventListener('ended', () => {
  if (activeOverlay) {
    activeOverlay.classList.remove('wavy');
    activeOverlay = null;
  }
});