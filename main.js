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
document.querySelector(".burger").addEventListener("click", function() {
  const menu = document.querySelector(".nav__burger");
  const blur = document.querySelector(".blur-wrapper");
  this.classList.toggle("burgeractive");
  blur.classList.toggle("blur");
  menu.classList.toggle("active");
});
