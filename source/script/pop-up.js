let errorPopUp = document.querySelector(".error-pop-up");
let rightPopUp = document.querySelector(".right-pop-up");
let reviewsForm = document.querySelector(".reviews__form");
let formButton = document.querySelector(".form-review__button");

formButton.addEventListener("click", function(event) {
  if(!reviewsForm.checkValidity()){
    event.preventDefault();
    errorPopUp.classList.remove("visually-hidden");
    console.log("что-то не так");
    closeErrorPopUp();
  } else {
    event.preventDefault();
    rightPopUp.classList.remove("visually-hidden");
    closeRightPopUp();
  }
})

closeErrorPopUp = function () {
  let errorButton = document.querySelector(".error-pop-up__button");
  errorButton.addEventListener("click", function() {
    errorPopUp.classList.add("visually-hidden");
  })
}

closeRightPopUp = function() {
  let rightButton = document.querySelector(".right-pop-up__button");
  rightButton.addEventListener("click", function() {
    rightPopUp.classList.add("visually-hidden");
  })
}
