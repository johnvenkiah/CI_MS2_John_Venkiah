// QUIZ

var playButton = document.querySelector('.quiz-button');
var answersBox = document.querySelector('#answers-box');
var staffBox = document.querySelector('#staffbox');
var questionsRandom = Math.floor(Math.random() * questions.length);

function randomAnswer(min, max) {
    min = Math.ceil(3);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function playQuiz() {
    
    answersBox.innerHTML = `
    <button class="quiz-button" id="answer-1">${questions[questionsRandom][randomAnswer.value]}</button>
    <button class="quiz-button" id="answer-2">${questions[questionsRandom[randomAnswer]]}</button>
    <button class="quiz-button" id="answer-3">${questions[questionsRandom[randomAnswer]]}</button>
    <button class="quiz-button" id="answer-4">${questions[questionsRandom][randomAnswer.value]}</button>
    `;

    newQuestion();
}

function newQuestion() {
    staffBox.innerHTML = `
    <img src="assets/images/quiz/${questions[questionsRandom].image}" alt="Current question">
    `

}