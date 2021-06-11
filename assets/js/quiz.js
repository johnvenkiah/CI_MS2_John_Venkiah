// QUIZ

let playButton = document.querySelector('#play-button')
let answersBox = document.querySelector('#answers-box');
let staffBox = document.querySelector('#staffbox');
let subheadingsQuiz = document.querySelector('#quiz-headings');
// let currentScore = parseInt(document.querySelector('#current-score').innerText);

function playQuiz() {
    function endGameModal() {
        console.log('Game ended!', daTimer);
        clearInterval(daTimer)
    }

    currentScore = 0;
    // start timer, score = 0

    newQuestion();
    let daTimer = startTimer(endGameModal);
}

function newQuestion() {

    answersBox.innerHTML="";

    var questionsRandom = Math.floor(Math.random() * questions.length);

    staffBox.innerHTML = `
    <img src="assets/images/quiz/${questions[questionsRandom].image}" alt="Current question">
    `;
    subheadingsQuiz.innerHTML = `<h2 class="subheading-other">${questions[questionsRandom].question}</h2>`;

    var buttons = new Array();
    buttons[0] = `<button onclick="newQuestion()" class="quiz-button" id="answer-1">${questions[questionsRandom].a}</button>`;
    buttons[1] = `<button onclick="newQuestion()" class="quiz-button" id="answer-2">${questions[questionsRandom].b}</button>`;
    buttons[2] = `<button onclick="newQuestion()" class="quiz-button" id="answer-3">${questions[questionsRandom].c}</button>`;
    buttons[3] = `<button onclick="newQuestion()" class="quiz-button" id="answer-4">${questions[questionsRandom].correct}</button>`;

    let i = 0;
    let random;

    while (i < buttons.length) {

        random = Math.floor(Math.random() * buttons.length);

        if (buttons[random] !="selected") {

            answersBefore = answersBox.innerHTML;
            answersBox.insertAdjacentHTML('beforeend', buttons[random]);
            buttons[random] = "selected";
            i++;
        }
    }

    document.getElementById("answer-4").addEventListener('click', incrementScore);
}

function incrementScore() {

    let currentScore = parseInt(document.getElementById("current-score").innerText);
    document.getElementById('current-score').innerText = (currentScore + 10);
    
    document.getElementById('current-score').setAttribute("style", "color: green;");

}

function startTimer(callback) {
    let sec = 60;
    let min = 0;
 
    const secEl = document.querySelector('#seconds');
    const minEl = document.querySelector('#minutes');
 
    function refresh(secEl, minEl, sec, min) {
        secEl.innerText = display(sec);
        minEl.innerText = displayTwo(min);    
    }

    function displayTwo(number) {
        return number
    }

    function display(number) {
        return number < 10 ? `0${number}` : number 
    }

    const countDown = function() {
        sec = sec - 1;           
        if(sec === 0) {
            setTimeout(callback(), 1000);
        }
        refresh(secEl, minEl, sec, min)
    }
   
    refresh(secEl, minEl, sec, min)
    return setInterval(countDown, 1000);
}