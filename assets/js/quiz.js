// QUIZ

let answersBox = document.querySelector('#answers-box');
let currentScore = document.querySelector('#current-score');
let points;
let currentQuestion = document.querySelector('.paragraph');
let soundGameStart = document.getElementById('sound-start-game');
let soundGameEnd = document.getElementById('sound-finish-game');
let soundCorrect = document.getElementById('sound-correct-answer');
let soundWrong = document.getElementById('sound-wrong-answer');

soundGameStart.volume = 0.1;
soundGameEnd.volume = 0.1;
soundCorrect.volume = 0.1;
soundWrong.volume = 0.1;

function playQuiz() {
    currentQuestion.style.fontSize = '1.3em'
    soundGameStart.play();
    let resetTimer = startTimer(endGameModal);

    function endGameModal() {
        soundGameEnd.play();
        console.log('Game ended!');

        let endGreetings = {
            notgood: 'Aw, too bad...',
            ok: 'That went ok!',
            good: 'Nice try!',
            great: 'Well done!',
            excellent: 'Wow, outstanding!'
        };

        let endGreeting = points > 250 ? endGreetings.excellent
                        : points > 170 ? endGreetings.great
                        : points > 110 ? endGreetings.good
                        : points > 60 ? endGreetings.ok
                        : endGreetings.notgood;

        var modalHtml = `
            <div id="modal-container">
                <div id="modal-window">
                    <h2 id="greeting">${endGreeting}</h2>
                    <h3>You scored ${points}!</h3>
                    <button onclick="playQuiz(), removeModal()" class="play-quiz-button button quiz-button">Play Again</button>
                    <a href="quiz.html"><button class="button quiz-button close-button">Close</button></a>
                </div>
            </div>
        `;

        var modalDiv = document.getElementById('modal-div');
        modalDiv.innerHTML = modalHtml;
        clearInterval(resetTimer);
    }

    newQuestion();
}

function buttonAnimation() {
    document.getElementById("answers-box").animate([
            // keyframes
            { boxShadow: 'none' },
            { boxShadow: '0 0 4px red' },
            { boxShadow: 'none' }
        ], {
            // timing options
            duration: 500
        });
          document.getElementById("answer-4").animate([
            { fontSize: 'initial' },
            { fontSize: '1.5em' },
            { fontSize: 'initial' }
        ], {
            duration: 200
        });
}

function newQuestion() {

    answersBox.innerHTML="";

    let questionsRandom = Math.floor(Math.random() * questions.length);

    let staffQuiz = document.getElementById('staff-quiz');
    staffQuiz.src = 'assets/images/quiz/' + questions[questionsRandom].image;

    currentQuestion.innerHTML = questions[questionsRandom].question;
    
    let buttonsHtml = `<button class="button quiz-button"`;
    // let buttonsHtml = `<button onclick="newQuestion()" class="button quiz-button"`;
    let buttonsEndHtml = `</button>`;

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

    document.querySelectorAll('.quiz-button').forEach(button => {
        button.addEventListener('click', event => {
            setTimeout(newQuestion, 400);
            if (event.target == correct) {
                soundCorrect.currentTime = 0;
                incrementScore();

            }
            else {
                soundWrong.currentTime = 0;
                soundWrong.play();
                buttonAnimation();
            }
        });
      });
}

function incrementScore() {

    points = points + 10;
    updateScore();
    // currentScore.setAttribute('style', 'color: green; font-size: 1.2rem;');
    // currentScore.style.transition = 'all .2s ease-in';
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
        return number < 10 ? `0${number}` : number;
    }

    const countDown = function() {
        seconds--;           
        if(seconds === 0) {
            setTimeout(callBack(), 1000);
        }
        updateTimer(secElement, seconds);
    };

    updateScore();
    updateTimer(secElement, seconds);
    return setInterval(countDown, 1000);
}

function removeModal() {
    document.getElementById('modal-div').innerHTML = "";
}