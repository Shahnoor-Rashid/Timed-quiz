var scoreCard = document.querySelector('.wrapper')
var leaderBoard = document.getElementById('highscores')


function scoreBoard() {
    removeAllChildNodes(leaderBoard);
    scoreList = JSON.parse(localStorage.getItem("highScore"));
    console.log(scoreList);
    scoreList.sort((a, b) => {
        return b.score - a.score;
    });
    //only render the top 4 scores.
    topTen = scoreList.slice(0, 10);
    addToLeaderBoard();
}


function addToLeaderBoard() {
    scoreList = JSON.parse(localStorage.getItem("highScore"));
    scoreList.forEach(element => {
        scoreElement = document.createElement('div')
        scoreElement.innerText = `${element.player} - ${element.score}`
        leaderBoard.append(scoreElement)
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function getScore() {
    var storedScore = JSON.parse(localStorage.getItem("highScore"));
    if (storedScore !== null) {
        scoreList = storedScore;
    }
}