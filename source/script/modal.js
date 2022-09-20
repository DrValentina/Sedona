let modal = document.querySelector(".modal");
let modalButton = document.querySelector(".map__button");
let buttonMinus = document.querySelectorAll(".modal__button-minus");
let buttonPlus = document.querySelectorAll(".modal__button-plus");
let inputAmount = document.querySelectorAll(".modal__input-amount");
let modalPerson = document.querySelectorAll(".modal__item-person");

//Открытие модального окна
modalButton.addEventListener("click", function() {
  modal.classList.toggle("visually-hidden");
});

//Функционирование кнопок "+" и "-"
window.addEventListener("load", function() {
  for(let i = 0; i <= modalPerson.length; i++) {
    buttonMinus[i].addEventListener("click", function() {
      if(inputAmount[i].value > 0){
        inputAmount[i].value--;
      };
    });
    buttonPlus[i].addEventListener("click", function() {
      if(inputAmount[i].value < 4) {
        inputAmount[i].value++;
      };
    });
  };
});
