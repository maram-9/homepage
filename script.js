{
    const welcome = ()  => {
    console.log("Hello, nice to see you!");
    };

    const onChangeBackgroundClick = () => {
        const header__themeName = document.querySelector(".header__themeName");
        const body = document.querySelector(".body");
       
    

        body.classList.toggle("white");
        header__themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
    };
 const init = () => {
    const header__button = document.querySelector(".header__button");
    header__button.addEventListener("click", onChangeBackgroundClick);

    welcome();
 };

    init();
}