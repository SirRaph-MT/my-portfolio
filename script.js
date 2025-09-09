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

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    let $form = $(this);
    let $alert = $("#form-alert");

    $.ajax({
      url: $form.attr("action"),
      method: "POST",
      data: $form.serialize(),
      dataType: "json",
      success: function () {
        $alert
          .removeClass("d-none alert-danger")
          .addClass("alert alert-success")
          .html("✅ Your message has been sent! I’ll get back to you soon.");
        $form.trigger("reset");
      },
      error: function () {
        $alert
          .removeClass("d-none alert-success")
          .addClass("alert alert-danger")
          .html("❌ Oops! Something went wrong. Please try again.");
      },
    });
  });
});
