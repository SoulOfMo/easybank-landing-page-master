var dropdown = document.querySelector(".dropdown");
var  menu = document.querySelector(".menu");
var cancelIcon = "./images/icon-close.svg";
var hamburger = "./images/icon-hamburger.svg";

menu.addEventListener('click', () => {
    dropdown.classList.toggle("dropdown-active");

    if (dropdown.classList.contains("dropdown-active")) {
        document.querySelector(".menu img").setAttribute("src", cancelIcon)
    }
    else if (dropdown.classList.contains("dropdown")) {
        document.querySelector(".menu img").setAttribute("src", hamburger)
    } else {}
})
