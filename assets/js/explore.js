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

    xhr.open("GET", imageBaseURL + "&query=" + searchTerm);
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
        let dataImage = data.results[0].urls.small;
        $("#explore--image").html(`<img src="${dataImage}" alt=""/>`);
    });
}