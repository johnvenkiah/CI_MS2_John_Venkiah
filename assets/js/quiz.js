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

        let endGreeting = points > 250 ? endGreetings.excellent :
            points > 170 ? endGreetings.great :
            points > 110 ? endGreetings.good :
            points > 60 ? endGreetings.ok :
            endGreetings.notgood;

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

        // Reset the timer to 0 by passing resetTimer as parameter
        clearInterval(resetTimer);
    }

    // Triggers the function to display a new question
    newQuestion();
}

// Add event listener to play quiz button so playQuiz function fires when clicked
playQuizButton.addEventListener('click', playQuiz);


/**
 * Button animation alerts user if question was wrong, together with sounds.
 * Tips from here: https://drafts.csswg.org/web-animations/#dom-animatable-animate
 * */
function buttonAnimation(target) {

    //animates button if answer is incorrect.
    target.animate([{
            boxShadow: 'none'
        },
        {
            boxShadow: '0 0 6px red'
        },
        {
            boxShadow: 'none'
        }
    ], {
        duration: 500
    });

    //animates button if answer is correct.
    document.querySelector('#answer-4').animate([{
            boxShadow: 'none'
        },
        {
            boxShadow: '0 0 4px green',
            transform: 'scale(1.6)'
        },
        {
            transform: 'scale(1)'
        }
    ], {
        duration: 300,
    });
}

/**
 * newQuestion makes sure that buttons appear, the correct image is displayed and
 * so the game knows of the answer is correct or not.
 * 
 */
function newQuestion() {

    // First remove the contents of the answers box
    answersBox.innerHTML = '';

    /* Declare variable to get a random number between 0 and the length of the questions array
    (in the separate questions.js file). */
    let questionsRandom = Math.floor(Math.random() * questions.length);

    /* Get the element to display notes in and set the contents to the the value of the
        'image' value (its path directory) within a random object in the questions array,
        chosen by 'questionsRandom' */
    let staffQuiz = document.getElementById('staff-quiz');
    staffQuiz.src = 'assets/images/quiz/' + questions[questionsRandom].image;

    // Set the question html to the 'question' value
    currentQuestion.innerHTML = questions[questionsRandom].question;

    // Create html for button element
    let buttonsHtml = '<button class="button quiz-button"';
    let buttonsEndHtml = '</button>';

    // Empty array to fill with buttons
    let buttons = [];

    // object with answer values corresponding with values in questions.js
    let answ = {
        0: 'a',
        1: 'b',
        2: 'c'
    }

    // For loop fills the array with the incorrect answers 1 -3
    for (let i = 0; i < 4; i++) {
        buttons[i] = buttonsHtml + '>' + questions[questionsRandom][answ[i]] + buttonsEndHtml;
    }

    // The last button is the correct one so it needs to be filled differently.
    buttons[3] = buttonsHtml + ' id="answer-4">' + questions[questionsRandom].correct + buttonsEndHtml;

    /* To make the game genuine, the correct answer can't appear in the same
        position all the time. Therefore, i have placed them out using another random number. */
    let i = 0;
    let random;

    /* While loop that generates a random number between 1 and 4 */
    while (i < buttons.length) {

        random = Math.floor(Math.random() * buttons.length);

        /* Now we have a random button and can mark it as selected, which inserts it into the
            answers box. */

        if (buttons[random] != 'selected') {

            /* Inserting adjacetnt HTML doesn't replace the content, so when button is inserted it
            stays there */
            answersBox.insertAdjacentHTML('beforeend', buttons[random]);
            buttons[random] = 'selected';
            i++;

            // All buttons get inserted but in random order!
        }
    }

    // get the element of the correct answer
    let correct = document.getElementById('answer-4');

    /**
     * Arrow function so that each answer button generates a new question.
     * New question is delayed with setTimeout so user has time to see if answer was correct
     * and if not, what the correct answer was.
     */
    document.querySelectorAll('.quiz-button').forEach(button => {

        /* event listener for each button triggers newQuestion and, plays correct/incorrect
        sounds. Current time 0 so that repetitive clicks generate new sounds before audio sample
        has ended Also, animation for incorrect answer is here. */
        button.addEventListener('click', event => {
            setTimeout(newQuestion, 400);
            if (event.target == correct) {
                soundCorrect.currentTime = 0;
                incrementScore();

            } else {
                soundWrong.currentTime = 0;
                soundWrong.play();
                buttonAnimation(button);
            }
        });
    });
}

/**
 * The incrementScore function makes sure that user gets 10 points if they answer correctly,
 * and keeps track of points collected before the end of the game.
 */
function incrementScore() {

    // Increment the points variable and updateScore function
    points = points + 10;
    updateScore();

    /* Here is the animation for corect answer, which i thought was best in the score.
        Score enlarges and goes white to inform user that answer was correct */
    document.querySelector('#score').animate([{
            color: 'rgb(218, 160, 84)'
        },
        {
            color: 'white',
            transform: 'scale(1.3)',
            textShadow: '0 0 3px rgb(110, 141, 0)'
        },
        {
            color: 'rgb(218, 160, 84)'
        }
    ], {
        duration: 300
    });

    // Play sound effect for correct answer
    soundCorrect.play();
}

/* This function simply sets the inner test of the score element to that of
    the variable 'points'. */
function updateScore() {
    currentScore.innerText = points;
}

/**
 * The startTimer function resets the clock and makes sure that it counts down.
 * We get the time elements and set them to the current value with nested functions below.
 */
function startTimer(callBack) {
    let seconds = 60;
    let minutes = 0;
    points = 0;

    // Get the time elements
    const secElement = document.querySelector('#seconds');
    const minElement = document.querySelector('#minutes');

    // Set the minutes to 0 as the quiz is 60 secs long.
    minElement.innerText = minutes;

    /* Function to set the inner text to the returned value of the display function
        with seconds as a parameter */
    function updateTimer(secElement, seconds) {
        secElement.innerText = display(seconds);
    }

    /* The display function add a zero before the seconds when timer is under 10,
    otherwise seconds are display like '9' instead of '09' */
    function display(number) {
        return number < 10 ? `0${number}` : number;
    }

    /**
     * Function for timer to count down from 60 to 0, calling different
     * functions from within.
     */
    const countDown = function () {

        /* Decrease seconds and reset timer if value is 0, waiting one second so the
            timer gets to 0 before the game ends. */
        seconds--;
        if (seconds === 0) {
            setTimeout(callBack(), 1000);
        }
        // Update timer so timer displays correct amount of seconds
        updateTimer(secElement, seconds);
    };

    // Updates score and timer to resetted values
    updateScore();
    updateTimer(secElement, seconds);

    // returns the value of a second to decrease seconds variable with
    return setInterval(countDown, 1000);
}

// Removes the end game modal window when user clicks 'Play again'.
function removeModal() {
    document.getElementById('modal-div').innerHTML = '';
}