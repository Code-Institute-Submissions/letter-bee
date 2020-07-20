/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
  let queryString = location.search.substring(1);

  if (queryString.length >=
    1) { //Checks whether url has substring assigned by play page
    let letterToExplore = queryString;
    displayWords(letterToExplore);
  };
});

/* On page load */
$(document).ready(function() {
  $("#explore--answer").css("display", "none");
  $("#explore--words").css("display", "none");
});

let exploreLetterBee = {
    exploreSelectedLetter: "A",
    exploreWordArray: [],
    exploreWordObject: {},
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
        

    },
    addWordToArray: function(generatedWord) {
        if(generatedWord !== undefined){
        if ($.inArray(generatedWord[0], this.exploreWordArray) == -1) {
                this.exploreWordArray.push(generatedWord[0]);
                this.exploreWordObject[generatedWord[0]] = {definition: generatedWord[1], example: generatedWord[2]};
                this.displayWordArray(generatedWord);
            }
        }
            generateMatchingWords(this.exploreSelectedLetter);
        
    },
    displayWordArray: function(generatedWord) {
        let displayDivID = this.exploreWordArray.length;
        $(`#explore--answer${displayDivID}--display span`).text(generatedWord[0]).css("text-transform", "capitalize");

        $(`#explore--answer${displayDivID}--display`).textfill();
    }

}




/* Show associated words div */
$(".explore--letter--circle").click(function() {
    selectedLetter = $(this).text();
    displayWords(selectedLetter);
    
})

function displayWords(selectedLetter) {
    exploreLetterBee.exploreSelectedLetter = selectedLetter.toLowerCase();
    console.log(exploreLetterBee.exploreSelectedLetter);
    $("#explore--answer").css("display", "block");
    $("#explore--words").css("display", "block");
    $("#explore--letters").css("display", "none");
    $("#explore--prompt").text(`Here are some words that start with the letter ${selectedLetter}`);
    generateMatchingWords(exploreLetterBee.exploreSelectedLetter, exploreLetterBee.exploreLetterFrequency[selectedLetter]);
}

/* Display word info in modal */
$(".explore--answer--select").click(function() {
    let selectedWord = $(this).text().trim();
    generateWordModal(selectedWord);
    $("#explore--word--modal").modal({
        backdrop: 'static',
        keyboard: false
      });
})

/* Generate info for modal */
function generateWordModal(selectedWord) {
    $("#explore--selected--word").text(selectedWord).css("text-transform", "capitalize");
    wordDataToModal(selectedWord);
}

/* Return to main display */
function exploreReset() {
    $("#explore--answer").css("display", "none");
    $("#explore--words").css("display", "none");
    $("#explore--letters").css("display", "block");
    $("#explore--prompt").text(`Pick a letter...`);
    exploreLetterBee.exploreWordArray = [];
    exploreLetterBee.exploreWordObject = {};
    $(".explore--answer--select span").text("");
}

$("#explore--word--modal").on('hidden.bs.modal', function () {
    $("#explore--selected--word").text("");
    $("#explore--image").html("");
    $("#explore--definition").text("");
    $("#explore--example").text("");
    $("#explore--pronunciation").text("");


});

/* Get words to match selected letter */

const wordApiKey = "00cc2aad74msh9a52d2b17888115p125f78jsn7ee17790cb1d";
const wordBaseURL = `https://wordsapiv1.p.rapidapi.com/words/`;

function getMatchingWords(selectedLetter, selectedLetterFrequency, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", wordBaseURL + "?letterPattern=^" + selectedLetter + "&frequencyMin=" + selectedLetterFrequency + "&hasDetails=examples" + "&random=true");
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
        console.log(data);
        let generatedWord = data.word;
        let wordDefinitionIndex = randomiseArray(1, data.results.length, 0);
        let generatedDefinition = data.results[wordDefinitionIndex].definition;
        let generatedExample;
        if(data.results[wordDefinitionIndex].hasOwnProperty("examples")){
        generatedExample = data.results[wordDefinitionIndex].examples[0];
        } else {
            generatedExample = "null";
        };
        exploreLetterBee.addWordToArray([generatedWord, generatedDefinition, generatedExample]);
    });
    } else {
        return
    };
}

/* Get data for selected word */

function wordDataToModal(searchTerm) {
        
        let wordDefinition = exploreLetterBee.exploreWordObject[searchTerm].definition;
        let wordExample = exploreLetterBee.exploreWordObject[searchTerm].example;
        let newSearchTerm = `${searchTerm} + ${wordDefinition}`;
        $("#explore--definition").text(wordDefinition);
        if(wordExample == "null"){
            $("#explore--example").parent().css("display", "none");
        } else {
        $("#explore--example").parent().css("display", "block");    
        $("#explore--example").text(wordExample);
        };
        imageToModal(newSearchTerm); 
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
        let randomResult = randomiseArray(1, data.results.length, 0);
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

  /* Full screen mode */
function openFullscreen() {
  let elem = document.getElementById("explore--display");
  $("#expand--fullscreen--button").css("display", "none");
  $("#close--fullscreen--button").css("display", "block");
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
  $("#expand--fullscreen--button").css("display", "block");
  $("#close--fullscreen--button").css("display", "none");
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

$("#close--fullscreen--button").click(function() {
    closeFullscreen();
})