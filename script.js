console.log("Witajcie, niestety nie posiadam polskiej klawiatury")

let button = document.querySelector("button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("white");
    themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
});