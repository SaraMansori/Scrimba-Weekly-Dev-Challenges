const fish = document.getElementById("fish");
const cat = document.getElementById("cat");

fish.addEventListener("click", feedCat);

function feedCat() {
    cat.classList.remove("hungry");
    cat.classList.add("fed");

    setTimeout(function () {
        cat.classList.add("hungry");
    }, 100);

    setTimeout(function () {
        cat.classList.remove("fed");
    }, 2000);
}
