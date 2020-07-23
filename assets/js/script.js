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

function navBarCollapse() {
    $(".navbar-collapse").removeClass("show");
    $(".animated-icon2").removeClass("open");
}

$("#span--about").click(function() {
    let currentActiveElement = $(".nav-item.nav-link.active").attr('id');
    navBarActive($(`#${currentActiveElement}`),$("#span--about"));
    navBarCollapse();
})
$("#span--play").click(function() {
    let currentActiveElement = $(".nav-item.nav-link.active").attr('id');
    navBarActive($(`#${currentActiveElement}`),$("#span--play"));
    navBarCollapse();
})
$("#span--learn").click(function() {
    let currentActiveElement = $(".nav-item.nav-link.active").attr('id');
    navBarActive($(`#${currentActiveElement}`),$("#span--learn"));
    navBarCollapse();
})
$("#span--discover").click(function() {
    let currentActiveElement = $(".nav-item.nav-link.active").attr('id');
    navBarActive($(`#${currentActiveElement}`),$("#span--discover"));
    navBarCollapse();
})