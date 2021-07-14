$(".step2").hide();
$(".step3").hide();
$(".step4").hide();

$(".choose-1").click(function() {
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").show();

});

$(".fix").click(function() {
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").hide();
    $(".step4").show();
    $(".step4").css("background-color","red");
});

$(".start-button").click(function() {
    $(".step1").hide();
    $(".step2").show();
    $(".step2img").css("height", "400px");
});

$(".qwq").dblclick(function() {
    $(".treasure").show();
    $(".step1").hide();
    $(".step2").hide();
    $(".step3").hide();
    $("body").css("background-color", "lightblue");
});