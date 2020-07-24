/* Loading div */
$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
});

/*
* Show/hide sections of site
*/
$("#btn--to--about").click(function() {
    $("nav").css("visibility", "visible");
    $("footer").css("visibility", "visible");
    showHideSections($("#home"),$("#about"));
})

$(".btn--to").click(function() {
    let targetActiveElementFull = $(this).prop('id');
    let targetActiveElement = targetActiveElementFull.substring(9);
    let currentActiveElement = $(".page--display").not(":hidden").prop("id");
    showHideSections(`#${currentActiveElement}`,`#${targetActiveElement}`);
    navBarActive($(`#span--${currentActiveElement}`),$(`#span--${targetActiveElement}`));
})

function showHideSections(sectionToHide,sectionToShow) {
    $(sectionToHide).css("display", "none");
    $(sectionToShow).css("display", "block");
}

/*
* Show active link on navbar
*/
$(".nav-link").click(function() {
    let currentActiveElementFull = $(".nav-item.nav-link.active").prop('id');
    let targetActiveElementFull = $(this).prop('id');
    let currentActiveElement = currentActiveElementFull.substring(6);
    let targetActiveElement = targetActiveElementFull.substring(6);
    showHideSections(`#${currentActiveElement}`,`#${targetActiveElement}`);
    navBarActive($(`#${currentActiveElementFull}`),$(`#${targetActiveElementFull}`));
    navBarCollapse();
})

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

/*
* Change game settings
*/