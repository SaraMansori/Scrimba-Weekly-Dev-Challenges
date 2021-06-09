const card = document.getElementsByClassName("card wrapper");
const descriptionPart = document.getElementsByClassName("card bottom-card");

card[0].addEventListener("mouseover", () => {
    descriptionPart[0].classList.add("active");
});

card[0].addEventListener("mouseleave", () => {
    descriptionPart[0].classList.remove("active");
});
// card.onmouseover = function () {
//     console.log("hovered");
// };

// function active() {
//     descriptionPart.classList;
// }
