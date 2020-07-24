/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/*
* Show/hide sections of site
*/
$("#btn--to--about").click(function() {
    $("nav").css("visibility", "visible");
    $("footer").css("visibility", "visible");
    showHideSections($("#home"),$("#about"));
})

$(".btn--to").click(function() {
    let targetActiveElementFull = $(this).prop('id');
    let targetActiveElement = targetActiveElementFull.substring(9);
    let currentActiveElement = $(".page--display").not(":hidden").prop("id");
    showHideSections(`#${currentActiveElement}`,`#${targetActiveElement}`, targetActiveElement);
    navBarActive($(`#span--${currentActiveElement}`),$(`#span--${targetActiveElement}`));
})

function showHideSections(sectionToHide,sectionToShow, selectedGameMode) {
    $(sectionToHide).css("display", "none");
    $(sectionToShow).css("display", "block");
    setGameMode(selectedGameMode);
}

/*
* Show active link on navbar
*/
$(".nav-link").click(function() {
    let currentActiveElementFull = $(".nav-item.nav-link.active").prop('id');
    let targetActiveElementFull = $(this).prop('id');
    let currentActiveElement = currentActiveElementFull.substring(6);
    let targetActiveElement = targetActiveElementFull.substring(6);
    showHideSections(`#${currentActiveElement}`,`#${targetActiveElement}`, targetActiveElement);
    navBarActive($(`#${currentActiveElementFull}`),$(`#${targetActiveElementFull}`));
    navBarCollapse();
})

function navBarActive(inactiveElement, activeElement) {
    $(inactiveElement).removeClass("active");
    $(activeElement).addClass("active");
    $(inactiveElement).children("span").remove();
    $(activeElement).append(` <span class="sr-only">(current)</span>`);
}

function navBarCollapse() {
    $(".navbar-collapse").removeClass("show");
    $(".animated-icon2").removeClass("open");
}

/*
* Change game settings
*/
function setGameMode(selectedGameMode) {
    masterPlayData.gameMode = selectedGameMode;
}

$("#letter--all").click(function() { 
  if ($("#letter--all").prop("checked")) { //Selects the full 26 letter set
    $(".options--letter--select").prop("checked", true);
    resetAlphabet();
  } else { //Empties letter set
    $(".options--letter--select").prop("checked", false)
    emptyAlphabet();
    updateLettersRemaining();
  };
})

function resetAlphabet() {//Used to reset the letters left to be played, back to a full 26
    masterPlayData.alphabetSet = masterPlayData.alphabetMaster.slice();
    updateLettersRemaining();
}

function emptyAlphabet() { //Empties the alphabet array
    masterPlayData.alphabetSet = [];
}

function updateLettersRemaining() { //Used to update the display with the letters remaining
    let lettersRemaining = $(`#${masterPlayData.gameMode}--letters--remaining`);
    if (masterPlayData.alphabetSet.length > 0) {
      lettersRemaining.text(masterPlayData.alphabetSet.join(', '));
    } else {
      lettersRemaining.text("FINISHED");

    };
}