/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/* On page load */
$(document).ready(function() {
  $("#explore--answer").css("display", "none");
  $("#explore--words").css("display", "none");
});

/* Show associated words */
$(".explore--letter--circle").click(function() {
    let selectedLetter = $(this).text();
    $("#explore--answer").css("display", "block");
    $("#explore--words").css("display", "block");
    $("#explore--letters").css("display", "none");
    $("#explore--prompt").text(`Here are some words that start with the letter ${selectedLetter}`)
})

/* Display word info */
$(".explore--answer--select").click(function() {
    let selectedWord = $(this).text();
    generateWordModal(selectedWord);
    $("#explore--word--modal").modal({
        backdrop: 'static',
        keyboard: false
      });
})

function generateWordModal(selectedWord) {
    $("#explore--selected--word").text(selectedWord);
    writeToDocument(selectedWord);
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

function writeToDocument(searchTerm) {
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

function randomiseArray(arrayLength, arrayRange,
  increaserValue) { //Used in several places to create a randomised array of varying length and range
    let randomArray = [];
    while (randomArray.length < arrayLength) {
      let r = Math.floor(Math.random() * arrayRange) + increaserValue;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    };
    return randomArray;
  }