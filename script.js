$(document).ready(function () {
  // Smooth scroll
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $(this.hash).offset().top - 50 },
        800
      );
    }
  });

  // Animate progress bars
  $(window).on("scroll", function () {
    var skillsTop = $("#skills").offset().top;
    var windowBottom = $(window).scrollTop() + $(window).height();

    if (windowBottom > skillsTop) {
      $(".progress-bar").each(function () {
        var $this = $(this);
        var target = $this.data("width");
        $this.animate({ width: target }, 1200);

        $({ countNum: 0 }).animate(
          { countNum: parseInt(target) },
          {
            duration: 1200,
            step: function () {
              $this.text(Math.floor(this.countNum) + "%");
            },
            complete: function () {
              $this.text(this.countNum + "%");
            },
          }
        );
      });
      $(window).off("scroll");
    }
  });

  // Contact form submit (dummy handler)
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    $(this).trigger("reset");
  });
});
