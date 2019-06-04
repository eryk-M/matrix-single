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
  this.classList.toggle("burgeractive");
  blur.classList.toggle("blur");
  menu.classList.toggle("active");
});

document.querySelector(".blur-wrapper").addEventListener("click", () => {
  if (blur.classList.contains("blur")) {
    blur.classList.remove("blur");
    document.querySelector(".burger").classList.remove("burgeractive");
    menu.classList.remove("active");
  }
});

/*  NAVIGATION FIXED  */
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    navigation.classList.add("fixed");
    setTimeout(() => {
      navigation.classList.add("fixed__top");
    }, 500);
  } else {
    navigation.classList.remove("fixed", "fixed__top");
  }
});

/* HEADER BG */
const headerBgc = document.querySelector(".header__background");
let images = ["background.jpg", "background2.jpg", "background3.jpg"];
const dots = [...document.querySelectorAll(".header__dots span")];
const time = 3500;
let activeDot = 0;

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeDot = index;
    changeBgc(index);
    changeDot();
  });
});

const changeDot = () => {
  const active = dots.findIndex(dot => dot.classList.contains("active__dot"));
  dots[active].classList.remove("active__dot");
  dots[activeDot].classList.add("active__dot");
};

const changeBgc = index => {
  index || index === 0 ? (activeDot = index) : activeDot++;
  if (activeDot === images.length) {
    activeDot = 0;
  }
  headerBgc.src = `https://eryk-m.github.io/matrix-single/img/${
    images[activeDot]
  }`;
  changeDot();
};

setInterval(changeBgc, time);
