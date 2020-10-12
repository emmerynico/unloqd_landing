window.onscroll = function() {scrollFunction()};

let logo = document.querySelector(".logoSwitch")
console.log(logo)
let clientHeight = window.innerHeight

function scrollFunction() {
if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
  logo.src = "assets/img/logo.png";
} else {
  logo.src = "assets/img/logo_full.png";
}
}
