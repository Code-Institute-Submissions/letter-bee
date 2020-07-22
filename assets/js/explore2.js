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
  addWordToArray: function(randomWordIndex) {
    let randomWord = masterExploreData[`letter${exploreLetterBee.exploreSelectedLetter}`][randomWordIndex];
    exploreLetterBee.exploreWordArray.push(randomWord);  
    console.log(exploreLetterBee.exploreWordArray);
    exploreLetterBee.displayWordArray(randomWord);

  },
  displayWordArray: function(generatedWord) {
    let displayDivID = this.exploreWordArray.length;
    $(`#explore--answer${displayDivID}--display span`).text(generatedWord).css("text-transform", "capitalize");

    $(`#explore--answer${displayDivID}--display`).textfill();
  }

}




/* Show associated words div */
$(".explore--letter--circle").click(function() {
  exploreLetterBee.exploreSelectedLetter = $(this).text();
  displayWords($(this).text());

})

function displayWords(letterToExplore) {
  $("#explore--answer").css("display", "block");
  $("#explore--words").css("display", "block");
  $("#explore--letters").css("display", "none");
  $("#explore--prompt").text(
    `Here are some words that start with the letter ${letterToExplore}`);
  generateMatchingWords(letterToExplore);
}

function generateMatchingWords(letterToExplore) {
    let randomWordSelection = randomiseArray(8, masterExploreData[`letter${letterToExplore}`].length, 0);
    randomWordSelection.forEach(exploreLetterBee.addWordToArray);
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
  $("#explore--selected--word").text(selectedWord).css("text-transform",
    "capitalize");
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

$("#explore--word--modal").on('hidden.bs.modal', function() {
  $("#explore--selected--word").text("");
  $("#explore--image").html("");
  $("#explore--definition").text("");
  $("#explore--example").text("");
  $("#explore--pronunciation").text("");


});

/* Get data for selected word */

function wordDataToModal(searchTerm) {
  getWordData(searchTerm, function(data) {
    console.log(data);
    let i = 0;
    let wordDefinitionFull;
    let wordDefinition;
    let wordExampleFull;
    do {
    if(data[0].def[0].sseq[i][0][1].dt.length >= 2){
    wordDefinitionFull = data[0].def[0].sseq[i][0][1].dt[0][1];
    wordExampleFull = data[0].def[0].sseq[i][0][1].dt[1][1][0].t;
    } else {
    i++;
    };
    }
    while (i <= data[0].def[0].sseq.length && wordExampleFull === undefined);
    if(wordExampleFull === undefined) {
        $("#explore--example").css("visibility", "hidden")
        wordDefinition = data[0].shortdef[0];
    } else {
        $("#explore--example").css("visibility", "visible");
        wordDefinition = wordDefinitionFull.replace(/\s?\{[^}]+\}/g, " ");
        let wordExample = wordExampleFull.replace(/\s?\{[^}]+\}/g, " "); //removes additional data fields from example
        $("#explore--example").text(wordExample);
    };
    
    $("#explore--definition").text(wordDefinition);
    let audioSourceFilename = data[0].hwi.prs[0].sound.audio;
    let audioSourceSubDir = audioSourceFilename.charAt(0);
    let audioSource = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${audioSourceSubDir}/${audioSourceFilename}.mp3`;
    $("#explore--pronunciation").attr("src", audioSource);
    imageToModal(wordDefinition);
    
  });
}

/* Get word data for selected word */

const wordApiKey = "4f6bca5a-8dab-4be7-9090-7405690143cd";
const wordBaseURL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";

function getWordData(searchTerm, cb) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", wordBaseURL + searchTerm + "?key=" + wordApiKey);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}




/* Get image for selected word */
const imageApiKey = "IlStjFvGDrc0UG55OCg_DK7JqauGBhBuX5gbbEns0-s";
const imageBaseURL =
  `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${imageApiKey}`;


function getImage(searchTerm, cb) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", imageBaseURL + "&query=" + searchTerm +
    "&content_filter=high");
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
    if (data.results.length == 0) {
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
      $("#explore--image--credit").html(
        `Photo by <a href="https://unsplash.com/@${dataUserName}?utm_source=your_app_name&utm_medium=referral" target="_blank">${dataUser}</a> on <a href="https://unsplash.com/?utm_source=${appName}&utm_medium=referral" target="_blank">Unsplash</a>`
        );
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