const buttons = document.querySelectorAll("button");
let current = "";

for (let button of buttons) {
    button.addEventListener("click", playSound);
}

function stopPlaying() {
    if (current !== "") {
        current.pause();
    }
}

function playSound(button) {
    stopPlaying();

    let audio = new Audio(`./sounds./${button.target.id}.wav`);
    current = audio;
    audio.currentTime = 0;
    audio.play();
}
