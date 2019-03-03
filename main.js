$(window).load(function() {
  var $container = $(".works__portfolioContainer");
  $container.isotope({
    // layoutMode: "fitRows",
    // layoutMode: "horiz",
    resize: false,
    filter: "*",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false
    }
  });

  $(".works__portfolioFilter a").click(function() {
    $(".works__portfolioFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      resize: false,
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
});
