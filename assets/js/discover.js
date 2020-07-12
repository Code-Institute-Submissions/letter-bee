/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/* On page load */
$(document).ready(function() {
  $("#discover--answer").css("display", "none");
});

$(".discover--letter--circle").click(function() {
    let selectedLetter = $(this).text();
    $("#discover--answer").css("display", "block");
    $("#discover--letters").css("display", "none");
    $("#discover--question").html(`How many things can you find that begin with the letter ${selectedLetter}?`);
})