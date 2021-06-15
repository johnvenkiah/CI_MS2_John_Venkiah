// QUIZ

let playButton = document.querySelector('#play-button')
let answersBox = document.querySelector('#answers-box');
let staffBox = document.querySelector('#staffbox');
let subheadingsQuiz = document.querySelector('#quiz-headings');
let currentScore = document.querySelector('#current-score');
let points;

function playQuiz() {
    
    let resetTimer = startTimer(endGameModal);
    let paragraph = document.querySelector('.paragraph')
    paragraph.innerHTML = ""

    function endGameModal() {

        console.log('Game ended!');

        var modalHtml = `
            <div id="modal-container">
                <div id="modal-window">
                    <h2>Well Done!</h2>
                    <h3 class="subheading-other">You scored ${points}!</h3>
                    <button onclick="playQuiz(), removeModal()" id="play-button" class="quiz-button">Play Again</button>
                    <a href="quiz.html"><button id="close-button">Close</button></a>
                </div>
            </div>
        `;

        var modalDiv = document.getElementById('modal-div');

        modalDiv.innerHTML = modalHtml;

        clearInterval(resetTimer)
    }

    newQuestion();
}

function newQuestion() {

    answersBox.innerHTML="";

    let questionsRandom = Math.floor(Math.random() * questions.length);

    let staffQuiz = document.getElementById('staff-quiz')
    staffQuiz.src = 'assets/images/quiz/' + questions[questionsRandom].image

    let quizHeadings = document.querySelector('.subheading-other')
    quizHeadings.innerHTML = questions[questionsRandom].question

    let buttonsHtml = `<button onclick="newQuestion()" class="quiz-button"`;
    let buttonsEndHtml = `</button>`

    let buttons = [];

    buttons[0] = buttonsHtml + '>' + questions[questionsRandom].a + buttonsEndHtml;
    buttons[1] = buttonsHtml + '>' + questions[questionsRandom].b + buttonsEndHtml;
    buttons[2] = buttonsHtml + '>' + questions[questionsRandom].c + buttonsEndHtml;
    buttons[3] = buttonsHtml + ' id="answer-4">' + questions[questionsRandom].correct + buttonsEndHtml;

    let i = 0;
    let random;

    while (i < buttons.length) {

        random = Math.floor(Math.random() * buttons.length);

        if (buttons[random] !="selected") {

            answersBox.insertAdjacentHTML('beforeend', buttons[random]);
            buttons[random] = "selected";
            i++;
        }
    }

    document.getElementById('answer-4').addEventListener('click', incrementScore);
}

function incrementScore() {

    points = points + 10;
    updateScore();
}

function updateScore() {
    currentScore.innerText = points;
}

function startTimer(callBack) {
    let seconds = 60;
    let minutes = 0;
    points = 0;
 
    const secElement = document.querySelector('#seconds');
    const minElement = document.querySelector('#minutes');

    minElement.innerText = minutes;
 
    function updateTimer(secElement, seconds) {
        secElement.innerText = display(seconds);
    }

    function display(number) {
        return number < 10 ? `0${number}` : number
    }

    const countDown = function() {
        seconds--;           
        if(seconds === 0) {
            setTimeout(callBack(), 1000);
        }
        updateTimer(secElement, seconds)
    }

    updateScore();
    updateTimer(secElement, seconds)
    return setInterval(countDown, 1000);
}

function removeModal() {
    document.getElementById('modal-div').innerHTML = "";
}