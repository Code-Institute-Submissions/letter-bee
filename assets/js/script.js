/*
* Show/hide sections of site
*/
$("#btn--to--about").click(function() {
    $("nav").css("visibility", "visible");
    $("footer").css("visibility", "visible");
    $("#home").css("display", "none");
    $("#about").css("display", "block");
})

$("#btn--to--play").click(function() {
    $("#about").css("display", "none");
    $("#play").css("display", "block");
    navBarActive($("#span--about"),$("#span--play"));
})

/*
* Show active link on navbar
*/
function navBarActive(inactiveElement, activeElement) {
    $(inactiveElement).removeClass("active");
    $(activeElement).addClass("active");
    $(inactiveElement).children("span").remove();
    $(activeElement).append(` <span class="sr-only">(current)</span>`);
}