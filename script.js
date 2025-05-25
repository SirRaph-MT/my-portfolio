$(document).ready(function () {
  // Smooth scrolling for nav links
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });

  // Animate progress bars when Skills section is in view
  $(window).on("scroll", function () {
    var skillsTop = $("#skills").offset().top;
    var windowBottom = $(window).scrollTop() + $(window).height();
    if (windowBottom > skillsTop) {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this)
              .attr("style")
              .match(/width:\s*(\d+%)/)[1],
          },
          1000
        );
      });
      $(window).off("scroll"); // Run animation only once
    }
  });
});
