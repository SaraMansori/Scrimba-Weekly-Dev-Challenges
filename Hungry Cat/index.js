const fish = document.getElementById("fish");
const cat = document.getElementById("cat");

fish.addEventListener("click", feedCat, false);

function feedCat() {
    cat.classList.remove("hungry");
    setTimeout(function () {
        cat.classList.add("hungry");
    }, 100);
}
