// QUIZ

const playButton = document.querySelector('.quiz-button');
const answersBox = document.querySelector('#answers-box');

function playQuiz() {
    
    answersBox.innerHTML = `
    <button class="quiz-button" id="answer-1">Alternative 1</button>
    <button class="quiz-button" id="answer-2">Alternative 2</button>
    <button class="quiz-button" id="answer-3">Alternative 3</button>
    <button class="quiz-button" id="answer-4">Alternative 4</button>
`;
}