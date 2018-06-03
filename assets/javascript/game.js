document.addEventListener('DOMContentLoaded', function(){
      
//Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 12;
var gameRunning = false;
var words = ['strawberry', 'chocolate', 'mint', 'vanilla', 'pistachio'];
var pickedWord = "";
var pickedWordUnderscores = [];
var lettersGuessedCorrect = [];
var lettersGuessedWrong = [];

//Reset Game
function resetGame () {
    gameRunning = "true"
    guessesRemaining = 12;
    lettersGuessedCorrect = [];
    lettersGuessedWrong = [];
    pickedWordUnderscores = [];
    pickedWord = words[Math.floor(Math.random() + words.length)];
    
    for (var i = 0; i < pickedWord.length; i++) {
        pickedWordUnderscores.push("_");
    }

    var guessesLeftElem = document.getElementById('guesses-left');
    guessesLeftElem.textContent = guessesRemaining;

    document.getElementById("gameReset").onkeydown = resetGame ();
    
};









});