
var questionsEl = document.querySelector("#questions")
var questionHeader = document.querySelector("#question-title");
const questionCard = document.querySelector('#question-card');
var choicesEl = document.querySelector("#choices")
var startQuiz = document.querySelector("#start")
var timerEl = document.querySelector(".timer")
var time = document.querySelector("#time")
var startScreen = document.querySelector('#start-screen');
var optiona = document.querySelector('#a');
var optionb = document.querySelector('#b');
var optionc = document.querySelector('#c');
var optiond = document.querySelector('#d');
var options = document.querySelectorAll('.options');
var over = document.querySelector('#end-screen')
var displayScore = document.querySelector('#final-score');
var initialsBox = document.querySelector("#initialsBox");



var q = 0;
var clicked = 0;
let scoreList = [];
var timeLeft = questions.length * 10;


function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft == 0 || q >= questions.length) {
      clearInterval(timeInterval)
      gameOver();
    }
  }, 1000);
}



