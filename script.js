{
    const welcome = ()  => {
    console.log("Hello, nice to see you");
    };

    const onChangeBackgroundClick = () => {
        const headerThemeName = document.querySelector(".headerThemeName");
        const body = document.querySelector(".body");
       
    

        body.classList.toggle("white");
        headerThemeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
    };
    let init = () => {
    const header__button = document.querySelector(".header__button");
    header__button.addEventListener("click", onChangeBackgroundClick);

    welcome();
 };

    init();
}