(function() {
    function playSound(e) {
        var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
        var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
        if (!audio && !key) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    var keys = document.querySelectorAll('.key');
    keys.forEach(function (key) {
        key.addEventListener('transitionend', removeTransition, false);
    });

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    window.addEventListener('keydown', playSound, false);
})();