$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  var divId;
  $(".nav-link").click(function() {
    divId = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(divId).offset().top - 54
      },
      100
    );
  });
});
