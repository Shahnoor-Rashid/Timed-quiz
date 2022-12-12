
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
  

function displayQuestion() {
  if (q < questions.length) {
    questionHeader.innerText = questions[q].title;
    options.forEach(element => {
      element.classList.remove('hide');
    });
    optiona.innerText = `${questions[q].choices[0]}`;
    optionb.innerText = `${questions[q].choices[1]}`;
    optionc.innerText = `${questions[q].choices[2]}`;
    optiond.innerText = `${questions[q].choices[3]}`;

  } else {
    gameOver();
}
}

function gameOver() {
  console.log('Game over');
  questionCard.classList.add('hide')
  over.classList.remove('hide')
  displayScore.innerText = score;
}
  
startQuiz.addEventListener('click', function () {
  questionsEl.classList.remove("hide")
  clicked ++;
  if (clicked === 1) {
    startTimer()
    startScreen.classList.add('hide')
    displayQuestion();
  }
  
})

function compareAnswer(ans) {
  if (q >= questions.length) {
    gameOver();
  } else if (ans !== '') {
    console.log("Inside compare",ans, questions[q].answer)
    if (ans === questions[q].answer) {
        console.log("Correct Answer");
        response = document.createElement('h2');
        response.innerText='Correct!!!'
        questionCard.append(response);
        
    } else {
        response = document.createElement('h2');
        response.innerText='Wrong Answer!!!'
        questionCard.append(response);
        timeLeft -= 10;
    }

    score = timeLeft;
    q++;
    setTimeout(() => {
        displayQuestion();
        response.innerText=''
    }, 1000);
    
}
}

questionsEl.addEventListener('click', (event) => {
  console.log(event.target.innerText)
  compareAnswer(event.target.innerText)
})

function myFunc(){
  window.open("../highscores.html");
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  var playerInitials = initialsBox.value.trim();
  var newScore = {
    player: playerInitials,
    score: score,
  };
  saveScore(newScore);
  over.classList.add("hide");
  myFunc()
  scoreBoard();
});


// Saving the scores to local storage
function saveScore(newScore) {
  // var scoreList = JSON.parse(localStorage.getItem("highScore"));
  localStorage.setItem("entry", JSON.stringify(newScore));
  console.log(scoreList);
  scoreList = JSON.parse(localStorage.getItem("highScore"));
  console.log(scoreList);
  var entry = JSON.parse(localStorage.getItem("entry"));
  if (scoreList == null) {
      scoreList = []
      scoreList.push(entry);
      localStorage.setItem("highScore", JSON.stringify(scoreList));
      
      console.log(`new score list inside if= ${scoreList}`)
  } else {
      console.log('inside else')
      console.log(scoreList);
      scoreList = JSON.parse(localStorage.getItem("highScore"));
  
      scoreList.push(entry);
      localStorage.setItem("highScore", JSON.stringify(scoreList));
      console.log(`new score list = ${scoreList}`);   
  }
  
}  



