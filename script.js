console.log("Witajcie, niestety nie posiadam polskiej klawiatury")

let button = document.querySelector("button");
let body = document.querySelector(".body");
let header__themeName = document.querySelector(".header__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("white");
    header__themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
});