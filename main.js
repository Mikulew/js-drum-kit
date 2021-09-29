(function() {
  const keys = document.querySelectorAll('.key');
  clearTransition();

  function playSound(e) {
    clearTransition();
    const audio = document.querySelector(`audio[data-key=\"${e.keyCode}\"]`);
    const key = document.querySelector(`.key[data-key=\"${e.keyCode}\"]`);
    if (!audio && !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  function clearTransition() {
    keys.forEach(function (key) {
      key.addEventListener('transitionend', removeTransition, false);
    });
  }

  window.addEventListener('keydown', playSound, false);
})();