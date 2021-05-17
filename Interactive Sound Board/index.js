const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", playSound);
}

function playSound(button) {
    new Audio(`./sounds./${button.target.id}.wav`).play();
}
