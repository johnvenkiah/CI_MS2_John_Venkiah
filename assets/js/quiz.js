// QUIZ

let playButton = document.querySelector('#play-button')
let answersBox = document.querySelector('#answers-box');
let staffBox = document.querySelector('#staffbox');
let subheadingsQuiz = document.querySelector('#quiz-headings');
let currentScore = document.querySelector('#current-score');
let points;

let soundGameStart = document.getElementById('sound-start-game');
let soundGameEnd = document.getElementById('sound-finish-game');
let soundCorrect = document.getElementById('sound-correct-answer');
let soundWrong = document.getElementById('sound-wrong-answer');

soundGameStart.volume = 0.1;
soundGameEnd.volume = 0.1;
soundCorrect.volume = 0.1;
soundWrong.volume = 0.1;

function playQuiz() {
    
    soundGameStart.play();
    let resetTimer = startTimer(endGameModal);
    let paragraph = document.querySelector('.paragraph')
    paragraph.innerHTML = ""

    function endGameModal() {
        soundGameEnd.play();
        console.log('Game ended!');

        var modalHtml = `
            <div id="modal-container">
                <div id="modal-window">
                    <h2>Well Done!</h2>
                    <h3>You scored ${points}!</h3>
                    <button onclick="playQuiz(), removeModal()" class="play-quiz-button button quiz-button">Play Again</button>
                    <a href="quiz.html"><button class="button quiz-button close-button">Close</button></a>
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

    let buttonsHtml = `<button onclick="newQuestion()" class="button quiz-button"`;
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
    let correct = document.getElementById('answer-4');

    document.querySelectorAll('.quiz-button').forEach(item => {
        item.addEventListener('click', event => {
            if (event.target == correct) {
                soundCorrect.currentTime = 0;
                soundCorrect.play(), incrementScore();
            }
            else {
                soundWrong.currentTime = 0;
                soundWrong.play();
            }
        })
      })

    // document.body.addEventListener('click', event => {
    //     if (event.target !== correct && event.target !== rightOrWrong) {
    //       return
    //     }
    //     else if (event.target !== correct) {
    //         soundWrong.play()
    //     }
    //     else {
    //         soundCorrect.play(), incrementScore
    //     }
    //   })

    // rightOrWrong[0].addEventListener('click', correctOrNot);

    // function correctOrNot() {
    //     if (rightOrWrong.id !== 'answer-4') {
    //         soundWrong.play();
    //     } else {
    //         incrementScore()
    //     }
    // }
    

    // if (incrementScore = false) soundWrong.play();
}

function incrementScore() {

    points = points + 10;
    updateScore();
    soundCorrect.play();
}

function updateScore() {
    currentScore.innerText = points;
}

function startTimer(callBack) {
    let seconds = 10;
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