let hotel = document.querySelectorAll(".hotel__item");
let typeHotel = document.querySelectorAll(".hotel__type");
let priceHotel = document.querySelectorAll(".hotel__price");
let ratingHotel = document.querySelectorAll(".hotel__rating-score");
let typeButton = document.querySelector(".sorting__button--type");
let priceButton = document.querySelector(".sorting__button--price");
let ratingButton = document.querySelector(".sorting__button--rating");

window.addEventListener("load", function() {
  typeButton.addEventListener("click", function() {
    typeButton.classList.add("sorting__button--on");
    priceButton.classList.remove("sorting__button--on");
    ratingButton.classList.remove("sorting__button--on");
    let elems = Array.prototype.slice.call(typeHotel);
    elems.sort();
    console.log(elems);
    for(let i = 0; i <= hotel.length; i++) {
      console.log(elems[i].textContent);
    };
  });
  priceButton.addEventListener("click", function() {
    priceButton.classList.add("sorting__button--on");
    typeButton.classList.remove("sorting__button--on");
    ratingButton.classList.remove("sorting__button--on");
    for(let i = 0; i <= hotel.length; i++) {
      console.log(priceHotel[i].textContent);
    };
  });
  ratingButton.addEventListener("click", function() {
    ratingButton.classList.add("sorting__button--on");
    priceButton.classList.remove("sorting__button--on");
    typeButton.classList.remove("sorting__button--on");
    for(let i = 0; i <= hotel.length; i++) {
      console.log(ratingHotel[i].textContent);
    };
  });
});
