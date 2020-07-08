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