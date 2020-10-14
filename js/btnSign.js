window.onscroll = function() {scrollFunction()};
let btnSign = document.querySelector(".btn-signup")
let formControl = document.querySelector(".form-signup");
btnSign.addEventListener('click', ($event) => {
  btnSign.disabled = true;
  formControl.disabled = true;
  btnSign.classList.add("btn-signup-valid")
  formControl.classList.add("form-signup-valid");
  formControl.value= "";
})
