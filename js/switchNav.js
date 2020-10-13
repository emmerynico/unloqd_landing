window.onload = function() {scrollFunction()};

let navbar = document.querySelector(".navbar")
console.log(navbar)


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  console.log(navbar)
  navbar.classList.remove("fixed-top");
  navbar.classList.add("fixed-top-mobile");
} else {
  console.log(navbar)
  navbar.classList.remove("fixed-top-mobile");
  navbar.classList.add("fixed-top");
  }

