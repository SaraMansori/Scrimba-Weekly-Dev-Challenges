const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
    button.addEventListener("click", shake);
}

function shake(e) {
    console.log(e.target);
    e.target.classList.toggle("shake");
}
