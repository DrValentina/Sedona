let galleryLike = document.querySelectorAll(".gallery__item-like");
let likeButton = document.querySelectorAll(".gallery__item-like--button");
let likeCounter = document.querySelectorAll(".gallery__item-like--counter");

window.addEventListener("load", function () {
  for(let i = 0; i <=galleryLike.length; i++) {
    likeButton[i].addEventListener("click", function() {
      likeCounter[i].value++;
    });
  };
});
