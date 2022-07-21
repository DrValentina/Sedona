let openButton = document.querySelector(".header__menu-button--open");
let closeButton = document.querySelector(".header__menu-button--close");
let nav = document.querySelector(".nav");
//let windowWidth = document.documentElement.clientWidth;

function mobileNav() {
  if(window.innerWidth < 768) {
    nav.classList.add("visually-hidden");
    openButton.classList.remove("visually-hidden");
    console.log("Размер мобилки");
    openButton.addEventListener("click", function() {
      openButton.classList.add("visually-hidden");
      closeButton.classList.remove("visually-hidden");
      nav.classList.remove("visually-hidden");
    })

    closeButton.addEventListener("click", function() {
      closeButton.classList.add("visually-hidden");
      nav.classList.add("visually-hidden");
      openButton.classList.remove("visually-hidden");
    })
  } else {
    openButton.classList.add("visually-hidden");
    nav.classList.remove("visually-hidden");
  }
}

window.onload = mobileNav;
window.onresize = mobileNav;
