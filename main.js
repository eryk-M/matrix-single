/*      PORTFOLIO      */
$(document).ready(function() {
  // Start mixitup
  $("#mix-container").mixItUp();
  $(".controls button").click(function() {
    $(".controls .current").removeClass("current");
    $(this).addClass("current");
  });
});
