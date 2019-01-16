$(".pirate").click(function() {
    $(".clueOne").slideDown();
    $(".peak").slideDown();
});

$(".peak").hover(function() {
    $(".fish").show();
    $(".clueTwo").show();
});

$(".clueTwo").dblclick(function() {
    $(".clueThree").show();
    $(".wind").show();
});

$(".clueThree").mouseenter(function() {
    $(".clueFour").fadeIn();
    $(".measure").fadeIn();
});

$(".clueFour").mouseleave(function() {
    $(".treasure").toggle();
    $(".treasureFound").toggle();
    $(".pirate").hide();
    $("h1").hide();
    $(".clue").hide();
    $("button").show();
    $(".peak").hide();
    $(".clueOne").hide();
    $(".fish").hide();
    $(".clueTwo").hide();
    $(".wind").hide();
    $(".clueThree").hide();
    $(".measure").hide();
    $(".clueFour").hide();
});

$("button").click(function() {
    $(".secret").show();
    $(".secretMap").show();
});