/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/* On page load */
$(document).ready(function() {
  $("#discover--answer").css("display", "none");
});


/* Select a letter */
$(".discover--letter--circle").click(function() {
    let selectedLetter = $(this).text();
    $("#discover--answer").css("display", "block");
    $("#discover--letters").css("display", "none");
    $("#discover--question").html(`How many things can you find that begin with the letter ${selectedLetter}?`);
})

/* Select an answer */
$(".discover--answer--select").click(function() {
    let selectedAnswer = $(this).text();
    $(this).addClass("discover--answer--selected");
    $(".discover--answer--select").off("click");
    $("#discover--finished--modal").modal({
        backdrop: 'static',
        keyboard: false
      });
})

/* Full screen mode */
function openFullscreen() {
  let elem = document.getElementById("discover--display");
  $("#expand--fullscreen--button").children("i").removeClass(
    "fas fa-expand-alt").addClass("fas fa-compress-alt");
  $("#expand--fullscreen--button").attr("onclick", "closeFullscreen()");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  $("#expand--fullscreen--button").children("i").removeClass(
    "fas fa-compress-alt").addClass("fas fa-expand-alt");
  $("#expand--fullscreen--button").attr("onclick", "openFullscreen()");
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

/* Calling functions */

$("#expand--fullscreen--button").click(function() {
    openFullscreen();
})