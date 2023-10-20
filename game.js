var buttonColors = ["red", "blue", "green", "yellow"];
var n = [];
var userClickedPattern = [];
var level = 0;

$('.btn').click(function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
   // alert(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    //nextSequence();
});
$(document).keypress(function (event) {
    $("h1").text("Level" + " " + 0);
    nextSequence();
})

function nextSequence() {
    userClickedPattern = [];
    level = level + 1;
    $("h1").text("Level" + " " + level);
    var randomNumber = Math.floor((Math.random() * 4));
    var randomColor = buttonColors[randomNumber];
    n.push(randomColor);
   // alert(n);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel) {
    if (n[currentLevel] === userClickedPattern[currentLevel]) {
        if(n.length===userClickedPattern.length)
        setTimeout(nextSequence(),1000);
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over! Press Any Key to Restart");
        startOver();
    }
}
function startOver(){
    level=0;
    n=[];
    
}




