const buttons = document.querySelectorAll("button");
console.log(buttons);

meowButton.addEventListener("click", () => playSound(meow));

function playSound(button) {
    const id = button.id;
    const sound = new Audio(`./sounds./${id}.wav`);
    sound.play();
}
