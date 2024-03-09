"strict mode";

const navList = document.querySelector(".navbar");
const blurBg = document.querySelector(".nav__transparency");
const menuBox = document.querySelector(".menu__btn");
const menuIcon = document.querySelector(".menu__img");

const resolution = () => {
    if (window.innerWidth <= 544) {
        menuBox.classList.remove("hidden");
    } else if (menuBox && window.innerWidth > 544) {
        menuBox.classList.add("hidden");
        blurBg.classList.add("bg");
        navList.classList.remove("nav-open");
        menuIcon.src = `./icon-menu.svg`;
    }
};

window.onload = resolution;
window.onresize = resolution;

const showMenu = () => {
    blurBg.classList.toggle("nav");
    navList.classList.toggle("nav-open");
    menuIcon.src = `/icon-${
        navList.classList.contains("nav-open") ? 
        "menu-close" : 
        "menu"
    }.svg`;
};

menuBox.addEventListener("click", showMenu);


