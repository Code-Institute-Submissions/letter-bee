/* Loading div */
/* https://smallenvelop.com/display-loading-icon-page-loads-completely/ */
// Wait for window load
$(window).on('load', function () {
    $(".se-pre-con").fadeOut("slow");
    var queryString = location.search.substring(1);
    
    if(queryString.length >= 1) { //Checks whether url has substring assigned by learn page
        var lettersToPlay = queryString.split(",");
        initialisePlay(lettersToPlay);
    };
});

/* On page load */
$(document).ready(function () {
    $("#play--display").css("display", "none");
    $("#play--continue").css("display", "none");
    $("#play--options__alert").hide();
    $("#play--all").prop("checked", true);
    $(".play--letter__select").prop("checked", true);
    $("#play--options__four").prop("checked", true);
});

/* Main game object */
var playLetterBee = {

    playAlphabetSet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    playNumberOfOptions: 4,
    letterToDisplay: "A",
    playAlphabetDistractors: ["B", "C", "D"],
    correctAnswer: "Answer",
    wordVar1: "Word1",
    playCorrectArray: [],
    playIncorrectArray: [],
    resetPlayAlphaBetSet: function () { //Used to reset the letters left to be played, back to a full 26
        this.playAlphabetSet = masterPlayData.alphabetMaster.slice();
        this.updateLettersRemaining();

        return this;
    },
    resetPlayArrays: function () { //Used to reset the letters answered correctly/incorrectly back to 0
        this.playCorrectArray = [];
        this.playIncorrectArray = [];
    },
    checkPlayProgress: function () { //Checks there are still letters left to be played and then either calls next question or calls finished modal
        if (this.playAlphabetSet.length > 0) {
            nextPlay();
        } else {
            if (document.fullscreenElement || document.webkitFullscreenElement ||
                document.mozFullScreenElement) {
                closeFullscreen();
                };
            if(this.playCorrectArray.length == 0) {
                $("#message--correct").css("display", "none");
            }   else {
                $("#message--correct").css("display", "block");
                $("#array--correct").text(this.playCorrectArray.join(', '));
            };
            if(this.playIncorrectArray.length == 0) {
                $("#message--incorrect").css("display", "none");
                $("#message--correct__all").css("display", "block");
            } else {
                $("#message--incorrect").css("display", "block");
                $("#array--incorrect").text(this.playIncorrectArray.join(', '));
                $("#message--correct__all").css("display", "none");
            };
            $("#play--finished__modal").modal({backdrop: 'static', keyboard: false});

        }
    },
    updateLettersRemaining: function () { //Used to update the play display with the letters remaining

        let playLettersRemaining = $("#play--letters__remaining");
        if (this.playAlphabetSet.length > 0) {
            playLettersRemaining.text(this.playAlphabetSet.join(', '));
        } else {
            playLettersRemaining.text("FINISHED");

        };
        return this;
    },
    randomiseKeyLetter: function () { //Chooses which letter to be displayed for the game
        this.letterToDisplay = this.playAlphabetSet[Math.floor(Math.random() * this.playAlphabetSet.length)];
        let playLettersDisplay = $("#play--letter__upper");
        playLettersDisplay.text(this.letterToDisplay);

        return this.letterToDisplay;
    },
    removeLetterPerm: function (letterDisplayed) { //Removes letter that has been played from the playing set
        let removeLetterPerm = this.playAlphabetSet.indexOf(letterDisplayed);
        this.playAlphabetSet.splice(removeLetterPerm, 1);

        return this;
    },
    randomiseArray: function (arrayLength, arrayRange, increaserValue) { //Used in several places to create a randomised array of varying length and range
        let randomArray = [];
        while (randomArray.length < arrayLength) {
            let r = Math.floor(Math.random() * arrayRange) + increaserValue;
            if (randomArray.indexOf(r) === -1) randomArray.push(r);
        };
        return randomArray;
    },

    createAlphabetDistractors: function (letterDisplayed) { //Randomly chooses the distractor letters for the game
        let tempAlphabetSet = masterPlayData.alphabetMaster.slice();
        let removeLetterTemp = tempAlphabetSet.indexOf(letterDisplayed);
        tempAlphabetSet.splice(removeLetterTemp, 1);
        let distractorArray = this.randomiseArray(3, 25, 0);
        let distractorOne = tempAlphabetSet[distractorArray[0]];
        let distractorTwo = tempAlphabetSet[distractorArray[1]];
        let distractorThree = tempAlphabetSet[distractorArray[2]];
        this.playAlphabetDistractors = [distractorOne, distractorTwo, distractorThree];

        return this;


    },
    wordIndex1: 1,
    wordIndex2: 2,
    wordIndex3: 3,
    wordIndex4: 4,
    createWordIndex: function () { // Selects a random image from the four available for each letter
        this.wordIndex1 = this.randomiseArray(1, 4, 1);
        this.wordIndex2 = this.randomiseArray(1, 4, 1);
        this.wordIndex3 = this.randomiseArray(1, 4, 1);
        this.wordIndex4 = this.randomiseArray(1, 4, 1);

        return this;
    },
    playImagesValues: function (keyLetter, distractorLetters) { //Sets the values for each image to be displayed - 

        let letterVar1 = `letter${keyLetter}`;
        let lowerLetter = masterPlayData.lettersMaster[letterVar1].lowerLetter;
        this.wordVar1 = `word${this.wordIndex1}`;
        this.correctAnswer = masterPlayData.lettersMaster[letterVar1].matchingWords[this.wordVar1].wordValue;
        let image1 = masterPlayData.lettersMaster[letterVar1].matchingWords[this.wordVar1].wordSyntax;
        let letterVar2 = `letter${distractorLetters[0]}`;
        let wordVar2 = `word${this.wordIndex2}`;
        let word2 = masterPlayData.lettersMaster[letterVar2].matchingWords[wordVar2].wordValue;
        let image2 = masterPlayData.lettersMaster[letterVar2].matchingWords[wordVar2].wordSyntax;
        let letterVar3 = `letter${distractorLetters[1]}`;
        let wordVar3 = `word${this.wordIndex3}`;
        let word3 = masterPlayData.lettersMaster[letterVar3].matchingWords[wordVar3].wordValue;
        let image3 = masterPlayData.lettersMaster[letterVar3].matchingWords[wordVar3].wordSyntax;
        let letterVar4 = `letter${distractorLetters[2]}`;
        let wordVar4 = `word${this.wordIndex4}`;
        let word4 = masterPlayData.lettersMaster[letterVar4].matchingWords[wordVar4].wordValue;
        let image4 = masterPlayData.lettersMaster[letterVar4].matchingWords[wordVar4].wordSyntax;

        let divArray = this.randomiseArray(this.playNumberOfOptions, this.playNumberOfOptions, 1);
        this.displayImages(lowerLetter, divArray, word2, word3, word4, image1, image2, image3, image4);
    },
    displayImages: function (lowerLetter, divArray, word2, word3, word4, image1, image2, image3, image4) { //Displays the images chosen in the previous method in a random div

        $(`#play--letter__lower`).html(lowerLetter);
        $(`#play--word${divArray[0]}__display`).html(this.correctAnswer);
        $(`#play--word${divArray[1]}__display`).html(word2);
        $(`#play--word${divArray[2]}__display`).html(word3);
        $(`#play--word${divArray[3]}__display`).html(word4);
        $(`#play--image${divArray[0]}__display`).html(`<img class="play--image" src="assets/images/letters/${image1}" alt="${this.correctAnswer}"/>`);
        $(`#play--image${divArray[1]}__display`).html(`<img class="play--image" src="assets/images/letters/${image2}" alt="${word2}"/>`);
        $(`#play--image${divArray[2]}__display`).html(`<img class="play--image" src="assets/images/letters/${image3}" alt="${word3}"/>`);
        $(`#play--image${divArray[3]}__display`).html(`<img class="play--image" src="assets/images/letters/${image4}" alt="${word4}"/>`);

        if (this.playNumberOfOptions == 4) {
            $("#play--image4__display").show();
            $("#play--word4__display").show();
        } else {
            $("#play--image4__display").hide();
            $("#play--word4__display").hide();
        };
        if (this.playNumberOfOptions >= 3) {
            $("#play--image3__display").show();
            $("#play--word3__display").show();
        } else {
            $("#play--image3__display").hide();
            $("#play--word3__display").hide();
        };
    }
}

/* Settings input */
$("#play--all").click(function () { //Selects the full 26 letter set
    if ($("#play--all").prop("checked")) {
        $(".play--letter__select").prop("checked", true);
        playLetterBee.resetPlayAlphaBetSet();
    } else {
        $(".play--letter__select").prop("checked", false)
        playLetterBee.playAlphabetSet = [];
        playLetterBee.updateLettersRemaining();
    };
})

$(".play--letter__select").click(function () { //Removes unwanted letters from the play set
    let checkedLetter = $(this).val();
    if ($(".play--letter__select:checked").length == $(".play--letter__select").length) {
        $("#play--all").prop("checked", true);
    } else {
        $("#play--all").prop("checked", false);
    };
    if ($.inArray(checkedLetter, playLetterBee.playAlphabetSet) > -1) {
        let removeLetterPerm = playLetterBee.playAlphabetSet.indexOf(checkedLetter);
        playLetterBee.playAlphabetSet.splice(removeLetterPerm, 1);
        playLetterBee.updateLettersRemaining();
        $(this).prop("checked", false);
    } else {
        playLetterBee.playAlphabetSet.push(checkedLetter);
        playLetterBee.playAlphabetSet.sort();
        playLetterBee.updateLettersRemaining();
        $(this).prop("checked", true);
    };
})

function amendLetterInput(learntArrayFromLearn) { //Amends letter array using values brought over from play page
    if(learntArrayFromLearn.length >=1) {
        if(learntArrayFromLearn.length == 26) {
            $("#play--all").prop("checked", true);
        } else {
            playLetterBee.playAlphabetSet = [];
            $("#play--all").prop("checked", false);
            $(".play--letter__select").each(function () {
                if ($.inArray($(this).val(), learntArrayFromLearn) >= 0) {
                    $(this).prop("checked", true);
                } else {
                    $(this).prop("checked", false);
                };
            });
        };
    };
    window.history.replaceState({}, document.title, "/" + "play.html"); //Removes substring from URL
}

function checkLetterInput() { //Recheck checked letters for 'play again'
    if ($("#play--all").checked) {
        playLetterBee.resetPlayAlphaBetSet();
    } else {
        $(".play--letter__select:checked").each(function () {
            if ($.inArray($(this).val(), playLetterBee.playAlphabetSet) == -1) {
                playLetterBee.playAlphabetSet.push($(this).val());
                playLetterBee.playAlphabetSet.sort();
                playLetterBee.updateLettersRemaining();
            };
        });
    }
    if ($(".play--letter__select:checked").length == 0) {
        $("#play--options__alert").show();
        return "EXIT FUNCTION";
    };

}

$(".play--options__select").click(function () { //Updates the number of options to be shown
    playLetterBee.playNumberOfOptions = parseInt($(this).val());
    playLetterBee.playImagesValues(playLetterBee.letterToDisplay, playLetterBee.playAlphabetDistractors);
})

$('audio').prop("muted", false)

$("#play--options__audio").click(function () {
    $(".play--audio").toggleClass("play--audio__on");
    $(".play--audio").toggleClass("play--audio__off");
    if ($('audio').prop("muted")) {
        $('audio').prop("muted", false);
    } else {
        $('audio').prop("muted", true);
    };
})

/* https://www.w3schools.com/howto/howto_js_fullscreen.asp */


/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
    var elem = document.getElementById("play--display");
    $("#play--options__button").css("visibility", "hidden");
    $("#expand--fullscreen").children("i").removeClass("fas fa-expand-alt").addClass("fas fa-compress-alt");
    $("#expand--fullscreen").attr("onclick", "closeFullscreen()");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    $("#play--options__button").css("visibility", "visible");
    $("#expand--fullscreen").children("i").removeClass("fas fa-compress-alt").addClass("fas fa-expand-alt");
    $("#expand--fullscreen").attr("onclick", "openFullscreen()");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}

/* Audio function */

function playLettersAudio() {

    let audioFile = masterPlayData.lettersMaster[`letter${playLetterBee.letterToDisplay}`].audioFile;
    let audioSource = `assets/audio/${audioFile}`;
    $("#play--letter__audio").attr("src", audioSource);

    setTimeout(function () {
        $('audio#play--letter__audio')[0].play();

    }, 1500)

}

function playIncorrectAudio() {
    let audioMain = masterPlayData.lettersMaster[`letter${playLetterBee.letterToDisplay}`].audioFile;
    let audioVoice = audioMain.substr(9, 1);
    let audioSource = `assets/audio/have-another-go-${audioVoice}.mp3`;
    $("#play--incorrect__audio").attr("src", audioSource);

    $('audio#play--incorrect__audio')[0].play();
}

function playCorrectAudio() {
    let audioMain = masterPlayData.lettersMaster[`letter${playLetterBee.letterToDisplay}`].audioFile;
    let audioVoice = audioMain.substr(9, 1);
    let audioSourceCorrect = `assets/audio/thats-right-${audioVoice}.mp3`;
    let wordSyntax = masterPlayData.lettersMaster[`letter${playLetterBee.letterToDisplay}`].matchingWords[playLetterBee.wordVar1].wordSyntax;
    let amendedWordSyntax = wordSyntax.substr(0, wordSyntax.indexOf('.'));
    let audioSourceConfirmation = `assets/audio/${amendedWordSyntax}-long-${audioVoice}.mp3`;

    $("#play--correct__audio").attr("src", audioSourceCorrect);
    $("#play--confirmation__audio").attr("src", audioSourceConfirmation);

    $('audio#play--correct__audio')[0].play();

    $('audio#play--correct__audio').on('ended', function () {
        $('audio#play--confirmation__audio')[0].play();
    });
    $('audio#play--confirmation__audio').on('ended', function () {
        $('audio#play--confirmation__audio').off('ended');
        resetDisplay();
        playLetterBee.checkPlayProgress();
        $(".play--image__select").click(function () { // To turn click event back on
            let imageID = this.id.match(/\d+/)[0];
            $(`#play--word${imageID}__display`).css("visibility", "visible");
            $(`#play--answer`).css("visibility", "visible");
            let imageValue = $(this).children("img").attr("alt").toUpperCase();
            if (imageValue.startsWith(playLetterBee.letterToDisplay)) {
                correctSelected(this);
            } else {
                incorrectSelected(this);
            };
        })
    });
}

/* Reset function */
function resetDisplay() {
    $(".play--image__select").removeClass("play--image__correct play--image__incorrect");
    $("#play--answer").css("visibility", "hidden").removeClass("play--image__incorrect");
    $(".play--word").css("visibility", "hidden");
}

/* Initialise game */
function initialisePlay(learntArrayFromLearn) {
    if (typeof learntArrayFromLearn !== 'undefined') {
        amendLetterInput(learntArrayFromLearn);
    };
    if(checkLetterInput() == "EXIT FUNCTION") {
        return;
    } else {   
    $("#play--options__alert").hide();    
    $("#play--options").modal("hide");    
    playLetterBee.resetPlayArrays();
    resetDisplay();
    $("#page--welcome").css("display", "none");
    $("#play--display").css("display", "block");
    $("#play--continue").css("display", "block");
    $("#play--restart").text("Restart game");
    nextPlay();
    };
}

function playAgain() {
    $("#play--continue").css("display", "none");
    $("#play--restart").text("Play game");
}

function nextPlay() {

    let keyLetter = playLetterBee.randomiseKeyLetter();
    playLetterBee.updateLettersRemaining()
        .removeLetterPerm(keyLetter)
        .createAlphabetDistractors(keyLetter)
        .createWordIndex()
        .playImagesValues(keyLetter, playLetterBee.playAlphabetDistractors);

    playLettersAudio();
}

/* Select answer */
$(".play--image__select").click(function () {
    let imageID = this.id.match(/\d+/)[0];
    $(`#play--word${imageID}__display`).css("visibility", "visible");
    $(`#play--answer`).css("visibility", "visible");
    let imageValue = $(this).children("img").attr("alt").toUpperCase();
    if (imageValue.startsWith(playLetterBee.letterToDisplay)) {
        correctSelected(this);
    } else {
        incorrectSelected(this);
    };
})



function incorrectSelected(selectedImage) {
    $(selectedImage).addClass("play--image__incorrect");
    $("#play--answer").text("Have another go!")
    $("#play--answer").addClass("play--image__incorrect");
    playIncorrectAudio();
    if ($.inArray(playLetterBee.letterToDisplay, playLetterBee.playIncorrectArray) == -1) {
        playLetterBee.playIncorrectArray.push(playLetterBee.letterToDisplay);
        playLetterBee.playIncorrectArray.sort();
    };
}

function correctSelected(selectedImage) {
    $(selectedImage).addClass("play--image__correct");
    $("#play--answer").text(`That's right! ${playLetterBee.letterToDisplay} is for ${playLetterBee.correctAnswer}`);
    $("#play--answer").removeClass("play--image__incorrect");
    $("#play--answer").addClass("play--image__correct");
    $(".play--image__select").off("click");
    playCorrectAudio();
    if ($.inArray(playLetterBee.letterToDisplay, playLetterBee.playIncorrectArray) == -1) {
        playLetterBee.playCorrectArray.push(playLetterBee.letterToDisplay);
        playLetterBee.playCorrectArray.sort();
    };

}

function goToLearnMode() {
    window.location.href = `learn.html?${playLetterBee.playIncorrectArray}`;
}