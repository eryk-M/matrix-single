/*      PORTFOLIO      */
$(document).ready(function() {
  // Start mixitup
  $("#mix-container").mixItUp();
  $(".controls button").click(function() {
    $(".controls .current").removeClass("current");
    $(this).addClass("current");
  });
});

/* BURGER */

const menu = document.querySelector(".nav__burger");
const blur = document.querySelector(".blur-wrapper");
const navigation = document.querySelector(".navigation");

document.querySelector(".burger").addEventListener("click", function() {
  const menu = document.querySelector(".nav__burger");
  const blur = document.querySelector(".blur-wrapper");
  this.classList.toggle("burgeractive");
  blur.classList.toggle("blur");
  menu.classList.toggle("active");
});

document.querySelector(".blur-wrapper").addEventListener("click", function() {
  if (blur.classList.contains("blur")) {
    blur.classList.remove("blur");
    document.querySelector(".burger").classList.remove("burgeractive");
    menu.classList.remove("active");
  }
});

/*  NAVIGATION FIXED  */
window.addEventListener("scroll", function() {
  window.scrollY > 600
    ? navigation.classList.add("fixed")
    : navigation.classList.remove("fixed");
});
