/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/* On page load */
$(document).ready(function() {
  $("#explore--answer").css("display", "none");
  $("#explore--words").css("display", "none");
});

let exploreLetterBee = {
    exploreSelectedLetter: "A",
    exploreWordArray: [],
    addWordToArray: function(generatedWord) {
        if ($.inArray(generatedWord, exploreLetterBee.exploreWordArray) == -1) {
                exploreLetterBee.exploreWordArray.push(generatedWord);
                console.log(exploreLetterBee.exploreWordArray);
            }
            generateMatchingWords(this.exploreSelectedLetter);
        
    },
    exploreLetterFrequency: {
        A: 7,
        B: 4,
        C: 5,
        D: 3,
        E: 2.5,
        F: 4,
        G: 1.5,
        H: 4,
        I: 7,
        J: 1.74,
        K: 1.74,
        L: 2,
        M: 3.5,
        N: 2,
        O: 7.5,
        P: 4,
        Q: 1.74,
        R: 2.5,
        S: 6.5,
        T: 7,
        U: 1.74,
        V: 1.74,
        W: 5,
        X: 1.74,
        Y: 1.74,
        Z: 1.74 
        

    }

}




/* Show associated words div */
$(".explore--letter--circle").click(function() {
    let exploreSelectedLetterUpper = $(this).text();
    exploreLetterBee.exploreSelectedLetter = $(this).text().toLowerCase();
    $("#explore--answer").css("display", "block");
    $("#explore--words").css("display", "block");
    $("#explore--letters").css("display", "none");
    $("#explore--prompt").text(`Here are some words that start with the letter ${exploreSelectedLetterUpper}`);
    generateMatchingWords(exploreLetterBee.exploreSelectedLetter, exploreLetterBee.exploreLetterFrequency[exploreSelectedLetterUpper]);
})



/* Display word info in modal */
$(".explore--answer--select").click(function() {
    let selectedWord = $(this).text();
    generateWordModal(selectedWord);
    $("#explore--word--modal").modal({
        backdrop: 'static',
        keyboard: false
      });
})

/* Generate info for modal */
function generateWordModal(selectedWord) {
    $("#explore--selected--word").text(selectedWord);
    imageToModal(selectedWord);
}

/* Return to main display */
function exploreReset() {
    $("#explore--answer").css("display", "none");
    $("#explore--words").css("display", "none");
    $("#explore--letters").css("display", "block");
    $("#explore--prompt").text(`Pick a letter...`)
}

const getFontSize = (textLength) => {
  const baseSize = 9
  if (textLength >= baseSize) {
    textLength = baseSize - 2
  }
  const fontSize = baseSize - textLength
  return `${fontSize}vw`
}

const boxes = document.querySelectorAll('.explore--answer--select p')
  
boxes.forEach(box => {
  box.style.fontSize = getFontSize(box.textContent.length)
})

/* Get words to match selected letter */

const wordApiKey = "00cc2aad74msh9a52d2b17888115p125f78jsn7ee17790cb1d";
const wordBaseURL = `https://wordsapiv1.p.rapidapi.com/words/`;

function getMatchingWords(selectedLetter, selectedLetterFrequency, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", wordBaseURL + "?letterPattern=^" + selectedLetter + "&frequencyMin=" + selectedLetterFrequency + "&hasDetails=definitions,examples," + "&random=true");
    xhr.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", wordApiKey);
    xhr.send();

    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};
}

function generateMatchingWords(selectedLetter, selectedLetterFrequency) {
    if(exploreLetterBee.exploreWordArray.length <= 7){
    getMatchingWords(selectedLetter, selectedLetterFrequency, function(data) {
        console.dir(data);
        let generatedWord = data.word;
        exploreLetterBee.addWordToArray(generatedWord);
    });
    } else {
        return
    };
}



/* Get image for selected word */
const imageApiKey = "IlStjFvGDrc0UG55OCg_DK7JqauGBhBuX5gbbEns0-s";
const imageBaseURL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${imageApiKey}`;


function getImage(searchTerm, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", imageBaseURL + "&query=" + searchTerm + "&content_filter=high");
    xhr.send();

    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
};
}

function imageToModal(searchTerm) {
    getImage(searchTerm, function(data) {
        console.dir(data);
        let randomResult = randomiseArray(1, data.results.length, 0);
        console.log(data.results.length);
        if(data.results.length == 0) {
            $("#explore--image").css("display", "none");
            $("#explore--image--credit").css("display", "none");
        } else {
        let dataImage = data.results[randomResult].urls.small;
        $("#explore--image").css("display", "block");
            $("#explore--image--credit").css("display", "block");
        $("#explore--image").html(`<img src="${dataImage}" alt=""/>`);
        let dataUser = data.results[randomResult].user.name;
        let dataUserName = data.results[randomResult].user.username;
        let appName = "Letter Bee"
        $("#explore--image--credit").html(`Photo by <a href="https://unsplash.com/@${dataUserName}?utm_source=your_app_name&utm_medium=referral" target="_blank">${dataUser}</a> on <a href="https://unsplash.com/?utm_source=${appName}&utm_medium=referral" target="_blank">Unsplash</a>`);
        $("#explore--image--credit").css("font-size", "0.8rem");
        };
    });
}


/* Used in several places to create a randomised array of varying length and range */
function randomiseArray(arrayLength, arrayRange,
  increaserValue) { 
    let randomArray = [];
    while (randomArray.length < arrayLength) {
      let r = Math.floor(Math.random() * arrayRange) + increaserValue;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    };
    return randomArray;
  }