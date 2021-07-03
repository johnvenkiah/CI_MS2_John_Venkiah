// jshint esversion: 6

// QUIZ.JS

/**
 * This file controls the functionality of the quiz page. This includes
 * updating buttons and images, the clock that counts down, keeping score,
 * playing sounds, animations, and an end game modal.
 */

// set variables for the needed elements for the quiz 
let answersBox = document.querySelector('#answers-box');
let currentScore = document.querySelector('#current-score');
let points;
let currentQuestion = document.querySelector('.paragraph');
let soundGameStart = document.getElementById('sound-start-game');
let soundGameEnd = document.getElementById('sound-finish-game');
let soundCorrect = document.getElementById('sound-correct-answer');
let soundWrong = document.getElementById('sound-wrong-answer');
let playQuizButton = document.querySelector('.play-quiz-button');

// Set a comfortable volume for the game sound effects
soundGameStart.volume = 0.1;
soundGameEnd.volume = 0.1;
soundCorrect.volume = 0.1;
soundWrong.volume = 0.1;

/**
 * The playQuiz function is a complex function that contains several functions.
 * It is responsible for starting a new game, and is triggered by the 'lets play'
 * and 'play again' buttons. Detailed functionality is explained below.
 */
function playQuiz() {

    //Removes the modal when 'play again' is clicked
    removeModal();

    // Set the style of the used element to display question
    currentQuestion.style.fontSize = '1.3em';

    // Play start game sound effect
    soundGameStart.play();

    // Variable to be passed to clearInterval function so timer goes to 0.
    let resetTimer = startTimer(endGameModal);

    /**
     * This function displays an end game modal screen to the user with an end greeting
     * depending on the users score and options to play again or close the window.
     */
    function endGameModal() {
        // The end game sound effect
        soundGameEnd.play();

        // Object containing values displayed, depending on score
        let endGreetings = {
            notgood: 'Aw, too bad...',
            ok: 'That went ok!',
            good: 'Nice try!',
            great: 'Well done!',
            excellent: 'Wow, outstanding!'
        };

        /* Ternary operator to control greeting displayed depending on score.
            tips: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */

        let endGreeting = points > 250 ? endGreetings.excellent
                        : points > 170 ? endGreetings.great
                        : points > 110 ? endGreetings.good
                        : points > 60 ? endGreetings.ok
                        : endGreetings.notgood;

        // The HTML to fill the screen when the game ends to display the end game modal.
        let modalHtml = `
            <div id="modal-container">
                <div id="modal-window">
                    <h2 id="greeting">${endGreeting}</h2>
                    <h3>You scored ${points}!</h3>
                    <button onclick="playQuiz()" class="play-quiz-button button quiz-button">Play Again</button>
                    <a href="quiz.html"><button class="button quiz-button close-button">Close</button></a>
                </div>
            </div>
        `;

        // Get modal div element and till it with the HTML.
        let modalDiv = document.getElementById('modal-div');
        modalDiv.innerHTML = modalHtml;

        // Reset the timer
        clearInterval(resetTimer);
    }


    newQuestion();
}

playQuizButton.addEventListener('click', playQuiz);

function buttonAnimation(target) {
    target.animate([
            { boxShadow: 'none' },
            { boxShadow: '0 0 6px red' },
            { boxShadow: 'none' }
        ], {
            duration: 500
        });
          document.querySelector('#answer-4').animate([
            { boxShadow: 'none' },
            { boxShadow: '0 0 4px green', transform: 'scale(1.6)'},
            { transform: 'scale(1)' }
        ], {
            duration: 300,
        });
}

function newQuestion() {

    answersBox.innerHTML='';

    let questionsRandom = Math.floor(Math.random() * questions.length);

    let staffQuiz = document.getElementById('staff-quiz');
    staffQuiz.src = 'assets/images/quiz/' + questions[questionsRandom].image;

    currentQuestion.innerHTML = questions[questionsRandom].question;
    
    let buttonsHtml = '<button class="button quiz-button"';
    let buttonsEndHtml = '</button>';

    let buttons = [];

    buttons[0] = buttonsHtml + '>' + questions[questionsRandom].a + buttonsEndHtml;
    buttons[1] = buttonsHtml + '>' + questions[questionsRandom].b + buttonsEndHtml;
    buttons[2] = buttonsHtml + '>' + questions[questionsRandom].c + buttonsEndHtml;
    buttons[3] = buttonsHtml + ' id="answer-4">' + questions[questionsRandom].correct + buttonsEndHtml;

    let i = 0;
    let random;

    while (i < buttons.length) {

        random = Math.floor(Math.random() * buttons.length);

        if (buttons[random] !='selected') {

            answersBox.insertAdjacentHTML('beforeend', buttons[random]);
            buttons[random] = 'selected';
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
                buttonAnimation(button);
            }
        });
      });
}

function incrementScore() {

    points = points + 10;
    updateScore();

    document.querySelector('#score').animate([
        { color: 'rgb(218, 160, 84)' },
        { color: 'white', transform: 'scale(1.3)', textShadow: '0 0 3px rgb(110, 141, 0)'},
        { color: 'rgb(218, 160, 84)' }
    ], {
        duration: 300
    });

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
    document.getElementById('modal-div').innerHTML = '';
}