const nav = document.getElementById("nav");
const openArrow = document.getElementById("open-nav");
const closeArrow = document.getElementById("close-nav");

openArrow.addEventListener("click", toggle);
closeArrow.addEventListener("click", toggle);

function toggle() {
    nav.classList.toggle("active");
}
