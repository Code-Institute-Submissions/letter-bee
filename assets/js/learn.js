/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
  if (sessionStorage.getItem("playArray") !== null) {
    $("#learn--continue--modal").modal({
      backdrop: 'static',
      keyboard: false
    });
  }
});

$(".dismiss--modal").click(function() {
  $('.modal').modal('hide');
  if (this.innerText == "Yes!") {
    let playArray = sessionStorage.getItem("playArray");
    initialiseLearn(playArray);
  } else {
    document.location = "index.html";
  }
  sessionStorage.clear();
});

/* On page load */
$(document).ready(function() {

  $("#page--display").css("display", "none");
  $("#learn--continue").css("display", "none");
  $("#learn--options--alert").hide();
  $("#learn--all").prop("checked", true);
  $(".learn--letter--select").prop("checked", true);
  $("#learn--options--four").prop("checked", true);
});

/* Main Game Object */
let learnLetterBee = {

  learnAlphabetSet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z"
  ],
  learnNumberOfOptions: 4,
  letterToDisplay: "A",
  learntArray: [],
  resetLearnAlphaBetSet: function() { //Used to reset the letters left to be learnt, back to a full 26
    this.learnAlphabetSet = masterPlayData.alphabetMaster.slice();
    this.updateLettersRemaining();

    return this;
  },
  resetLearntArray: function() { //Used to reset the letters answered correctly/incorrectly back to 0
    this.learntArray = [];
  },
  checkLearnProgress: function() { //Checks there are still letters left to be learnt and then either calls next letter or calls finished modal
    if (this.learnAlphabetSet.length > 0) {
      nextLearn();
    } else {
      if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement) {
        closeFullscreen();
      }
      if (this.learntArray.length == 0) {
        $("#message--learnt").css("display", "none");
      } else {
        $("#message--learnt").css("display", "block");
      }
      $("#array--learnt").text(this.learntArray.join(', '));
      $("#learn--finished--modal").modal({
        backdrop: 'static',
        keyboard: false
      });

    }
  },
  updateLettersRemaining: function() { //Used to update the learn display with the letters remaining

    let learnLettersRemaining = $("#learn--letters--remaining");
    if (this.learnAlphabetSet.length > 0) {
      learnLettersRemaining.text(this.learnAlphabetSet.join(', '));
    } else {
      learnLettersRemaining.text("FINISHED");
    }
    return this;
  },
  selectKeyLetter: function() { //Chooses which letter to be displayed for the game
    this.letterToDisplay = this.learnAlphabetSet[0];
    let learnLettersDisplay = $("#learn--letter--upper");
    learnLettersDisplay.text(this.letterToDisplay);

    return this.letterToDisplay;
  },
  removeLetterPerm: function(
    letterDisplayed
  ) { //Removes letter that has been learnt from the learning set
    let removeLetterPerm = this.learnAlphabetSet.indexOf(letterDisplayed);
    this.learnAlphabetSet.splice(removeLetterPerm, 1);

    return this;
  },
  randomiseArray: function(arrayLength, arrayRange,
    increaserValue
  ) { //Used in several places to create a randomised array of varying length and range
    let randomArray = [];
    while (randomArray.length < arrayLength) {
      let r = Math.floor(Math.random() * arrayRange) + increaserValue;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }
    return randomArray;
  },
  learnImagesValues: function(
    keyLetter) { //Sets the values for each image to be displayed - 

    let letterVar1 = `letter${keyLetter}`;
    let lowerLetter = masterPlayData.lettersMaster[letterVar1].lowerLetter;
    let word1 = masterPlayData.lettersMaster[letterVar1].matchingWords.word1
      .wordValue;
    let image1 = masterPlayData.lettersMaster[letterVar1].matchingWords
      .word1.wordSyntax;
    let word2 = masterPlayData.lettersMaster[letterVar1].matchingWords.word2
      .wordValue;
    let image2 = masterPlayData.lettersMaster[letterVar1].matchingWords
      .word2.wordSyntax;
    let word3 = masterPlayData.lettersMaster[letterVar1].matchingWords.word3
      .wordValue;
    let image3 = masterPlayData.lettersMaster[letterVar1].matchingWords
      .word3.wordSyntax;
    let word4 = masterPlayData.lettersMaster[letterVar1].matchingWords.word4
      .wordValue;
    let image4 = masterPlayData.lettersMaster[letterVar1].matchingWords
      .word4.wordSyntax;

    let divArray = this.randomiseArray(this.learnNumberOfOptions, this
      .learnNumberOfOptions, 1);
    this.displayImages(lowerLetter, divArray, word1, word2, word3, word4,
      image1, image2, image3, image4);
  },
  displayImages: function(lowerLetter, divArray, word1, word2, word3, word4,
    image1, image2, image3, image4
  ) { //Displays the images chosen in the previous method in a random div

    $(`#learn--letter--lower`).html(lowerLetter);
    $(`#learn--word${divArray[0]}--display`).html(word1);
    $(`#learn--word${divArray[1]}--display`).html(word2);
    $(`#learn--word${divArray[2]}--display`).html(word3);
    $(`#learn--word${divArray[3]}--display`).html(word4);
    $(`#learn--image${divArray[0]}--display`).html(
      `<img class="display--image" src="assets/images/letters/${image1}" alt="${word1}" data="${image1}"/>`
    );
    $(`#learn--image${divArray[1]}--display`).html(
      `<img class="display--image" src="assets/images/letters/${image2}" alt="${word2}" data="${image2}"/>`
    );
    $(`#learn--image${divArray[2]}--display`).html(
      `<img class="display--image" src="assets/images/letters/${image3}" alt="${word3}" data="${image3}"/>`
    );
    $(`#learn--image${divArray[3]}--display`).html(
      `<img class="display--image" src="assets/images/letters/${image4}" alt="${word4}" data="${image4}"/>`
    );

    if (this.learnNumberOfOptions == 4) {
      $("#learn--image4--display").show();
      $("#learn--word4--display").show();
    } else {
      $("#learn--image4--display").hide();
      $("#learn--word4--display").hide();
    }
    if (this.learnNumberOfOptions >= 3) {
      $("#learn--image3--display").show();
      $("#learn--word3--display").show();
    } else {
      $("#learn--image3--display").hide();
      $("#learn--word3--display").hide();
    }
  }
};

/* Settings input */
$("#learn--all").click(function() { //Selects the full 26 letter set
  if ($("#learn--all").prop("checked")) {
    $(".learn--letter--select").prop("checked", true);
    learnLetterBee.resetLearnAlphaBetSet();
  } else {
    $(".learn--letter--select").prop("checked", false);
    learnLetterBee.learnAlphabetSet = [];
    learnLetterBee.updateLettersRemaining();
  }
});

$(".learn--letter--select").click(
  function() { //Removes unwanted letters from the learn set
    let checkedLetter = $(this).val();
    if ($(".learn--letter--select:checked").length == $(
        ".learn--letter--select").length) {
      $("#learn--all").prop("checked", true);
    } else {
      $("#learn--all").prop("checked", false);
    }
    if ($.inArray(checkedLetter, learnLetterBee.learnAlphabetSet) > -1) {
      let removeLetterPerm = learnLetterBee.learnAlphabetSet.indexOf(
        checkedLetter);
      learnLetterBee.learnAlphabetSet.splice(removeLetterPerm, 1);
      learnLetterBee.updateLettersRemaining();
      $(this).prop("checked", false);
    } else {
      learnLetterBee.learnAlphabetSet.push(checkedLetter);
      learnLetterBee.learnAlphabetSet.sort();
      learnLetterBee.updateLettersRemaining();
      $(this).prop("checked", true);
    }
  });


function amendLetterInput(
  incorrectArrayFromPlay
) { //Amends letter array using values brought over from play page
  if (incorrectArrayFromPlay.length >= 1) {
    if (incorrectArrayFromPlay.length == 26) {
      $("#learn--all").prop("checked", true);
    } else {
      learnLetterBee.learnAlphabetSet = [];
      $("#learn--all").prop("checked", false);
      $(".learn--letter--select").each(function() {
        if ($.inArray($(this).val(), incorrectArrayFromPlay) >= 0) {
          $(this).prop("checked", true);
        } else {
          $(this).prop("checked", false);
        }
      });
    }
  }
}

function checkLetterInput() { //Recheck checked letters for 'learn again'
  if ($("#learn--all").checked) {
    learnLetterBee.resetLearnAlphaBetSet();
  } else {
    $(".learn--letter--select:checked").each(function() {
      if ($.inArray($(this).val(), learnLetterBee.learnAlphabetSet) == -1) {
        learnLetterBee.learnAlphabetSet.push($(this).val());
        learnLetterBee.learnAlphabetSet.sort();
        learnLetterBee.updateLettersRemaining();
      }
    });
  }
  if ($(".learn--letter--select:checked").length == 0) {
    $("#learn--options--alert").show();
    return "EXIT FUNCTION";
  }

}

$(".learn--options--select").click(
  function() { //Updates the number of options to be shown
    learnLetterBee.learnNumberOfOptions = parseInt($(this).val());
    learnLetterBee.learnImagesValues(learnLetterBee.letterToDisplay);
  });

$('audio').prop("muted", false);

$("#options--audio").click(function() {
  $(".learn--audio").toggleClass("audio--on");
  $(".learn--audio").toggleClass("audio--off");
  if ($('audio').prop("muted")) {
    $('audio').prop("muted", false);
  } else {
    $('audio').prop("muted", true);
  }
});

/* Function to play audio */

function learnLettersAudio() {

  let audioFile = masterPlayData.lettersMaster[
    `letter${learnLetterBee.letterToDisplay}`].audioFile;
  let audioSource = `assets/audio/${audioFile}`;
  $("#learn--letter--audio").attr("src", audioSource);

  setTimeout(function() {
    $('audio#learn--letter--audio')[0].play();
  }, 1500);
}

function learnWordAudio(selectedWord) {
  let audioMain = masterPlayData.lettersMaster[
    `letter${learnLetterBee.letterToDisplay}`].audioFile;
  let audioVoice = audioMain.substr(9, 1);
  let amendedWordSyntax = selectedWord.substr(0, selectedWord.indexOf('.'));
  let audioSourceWord =
    `assets/audio/${amendedWordSyntax}-short-${audioVoice}.mp3`;

  $("#learn--word--audio").attr("src", audioSourceWord);

  $('audio#learn--word--audio')[0].play();
}

/* Misc functions */
function resetDisplay() {
  $(".image--select").removeClass("learn--image--selected");
  $(".image--select").removeClass("learn--image--current");
  $("#learn--answer").css("visibility", "hidden").removeClass(
    "image--select");
  $(".display--word").css("visibility", "hidden");
}

/* Initialise game */
function initialiseLearn(incorrectArrayFromPlay) {
  if (typeof incorrectArrayFromPlay !== 'undefined') {
    amendLetterInput(incorrectArrayFromPlay);
  }
  if (checkLetterInput() == "EXIT FUNCTION") {
    return;
  } else {
    $("#learn--options--alert").hide();
    $("#learn--options").modal("hide");
    learnLetterBee.resetLearntArray();
    resetDisplay();
    $("#page--welcome").css("display", "none");
    $("#page--display").css("display", "block");
    $("#learn--continue").css("display", "block");
    $("#learn--restart").text("Restart");
    nextLearn();
  }
}

function learnAgain() {
  $("#learn--continue").css("display", "none");
  $("#learn--restart").text("Learn letters");
}

function nextLearn() {
  resetDisplay();
  let keyLetter = learnLetterBee.selectKeyLetter();
  learnLetterBee.updateLettersRemaining()
    .removeLetterPerm(keyLetter)
    .learnImagesValues(keyLetter);

  learnLettersAudio();
}

/* Select correct/incorrect answer */
$(".image--select").click(function() {
  let imageID = this.id.match(/\d+/)[0];
  $(this).addClass("learn--image--selected");
  $(".image--select").removeClass("learn--image--current");
  $(this).addClass("learn--image--current");
  $(`#learn--word${imageID}--display`).css("visibility", "visible");
  $(`#learn--answer`).css("visibility", "visible");
  imageSelected(this);
});

function imageSelected(selectedImage) {
  let wordToDisplay = $(selectedImage).children("img").attr("alt");
  let wordAudioSyntax = $(selectedImage).children("img").attr("data");
  $("#learn--answer").text(`${wordToDisplay}`);
  learnWordAudio(wordAudioSyntax);
  if ($.inArray(learnLetterBee.letterToDisplay, learnLetterBee.learntArray) == -
    1) {
    learnLetterBee.learntArray.push(learnLetterBee.letterToDisplay);
    learnLetterBee.learntArray.sort();
  }
}

function goToPlayMode() {
  sessionStorage.setItem('learnArray', learnLetterBee.learntArray);
  document.location = "play.html";
}

/* Calling functions */
$("#expand--fullscreen--button").click(function() {
  openFullscreen();
});

$("#close--fullscreen--button").click(function() {
  closeFullscreen();
});

$("#learn--next--button").click(function() {
  learnLetterBee.checkLearnProgress();
});

$("#nav--play").click(function() {
  goToPlayMode();
});

$("#learn--again").click(function() {
  learnAgain();
});

$("#learn--restart").click(function() {
  initialiseLearn();
});

$("#initialise--learn").click(function() {
  initialiseLearn();
});