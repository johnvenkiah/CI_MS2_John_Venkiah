// QUIZ

var playButton = document.querySelector('#play-button')
var answersBox = document.querySelector('#answers-box');
var staffBox = document.querySelector('#staffbox');
var questionsRandom = Math.floor(Math.random() * questions.length);

// function randomAnswer(min, max) {
//     min = Math.ceil(3);
//     max = Math.floor(7);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

function playQuiz() {
    
    // start timer, score = 0


    newQuestion();
}

function newQuestion() {
    staffBox.innerHTML = `
    <img src="assets/images/quiz/${questions[questionsRandom].image}" alt="Current question">
    `;

    var buttons = new Array();
    buttons[0] = `<button onclick="newQuestion()" class="quiz-button" id="answer-1">${questions[questionsRandom].a}</button>`;
    buttons[1] = `<button onclick="newQuestion()" class="quiz-button" id="answer-2">${questions[questionsRandom].b}</button>`;
    buttons[2] = `<button onclick="newQuestion()" class="quiz-button" id="answer-3">${questions[questionsRandom].c}</button>`;
    buttons[3] = `<button onclick="newQuestion()" class="quiz-button" id="answer-4">${questions[questionsRandom].correct}</button>`;

    var i = 0;
    var random;

    while (i < buttons.length) {

        random = Math.floor(Math.random() * buttons.length);

        if (buttons[random] !="selected") {
            
            answersBox.innerHTML = (buttons[random]);
            buttons[random] = "selected";
            i++;
        }
    }
}