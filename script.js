//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        stopAllSounds();
        const soundName = btn.getAttribute("data-sound");
        const audio = new Audio(`sounds/${soundName}.mp3`);
        audio.play();
        btn.audio = audio;
    });
});

stopBtn.addEventListener("click", stopAllSounds);

function stopAllSounds() {
    buttons.forEach(btn => {
        if (btn.audio) {
            btn.audio.pause();
            btn.audio.currentTime = 0;
        }
    });
}
