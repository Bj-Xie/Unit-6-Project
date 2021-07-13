$(".step2").hide();
$(".step3").hide();

$(".choose-1").click(function() {
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").show();

});

$(".fix").click(function() {
    
});

$(".start-button").click(function() {
    $(".step1").hide();
    $(".step2").show();
    $(".step2img").css("height", "400px");
});

$(".qwq").click(function() {
    $(".treasure").show();
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").hide();
    $("body").css("background-color", "lightblue");
});