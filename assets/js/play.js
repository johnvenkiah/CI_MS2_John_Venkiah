// jshint esversion: 6

// PLAY.JS

/**
 * This JS-file is responsible for the play piano functionality on the play page.
 * Users can play notes, hear them and see the notes being played on a stave.
 */

/**
 * The touchDevice function makes sure that if a touch device is used, no computer keys
 * (to indicate which keys trigger the piano) are displayed. Help from this guide:
 * https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/
 */
function touchDevice() {
    return ('ontouchstart' in window) ||
        /* navigator.maxTouchPoints is the amount of simultaneous touch points
        the device supports. If more than 0, the user is most probably using a device
        with a keyboard. */
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

/* Get paragraph element and edit it so it doesn't display info about playing
    with the keyboard keys. */
let paragraph = document.querySelector('.paragraph');
let paragraphHtml = paragraph.innerHTML;
let kbKeys = document.querySelectorAll('.kb-keys');

// Removes unwanted characters from paragraph and ends sentance with a !
if (touchDevice()) {
    paragraphHtml = paragraphHtml.substr(0, 52);
    paragraph.innerHTML = paragraphHtml + '!';

    // Removes kb-keys from view.
    kbKeys.forEach(kbKey => kbKey.remove());
}

/**
 * The piano, which responds to user input, from clicking, tapping or
 * computer keyboard. I used this video as a guide and adapted it for the pages needs:
 * https://youtu.be/vjco5yKZpU8
 */

// The KEYS are an array of strings used by function below to play the piano keys.
const KEYS = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', "'", '['];

/* The notesObj objest contains values that correspond with the images used
to display the notes being played. */
let notesObj = {
    'c3': 'c3_play.png',
    'csharp3': 'csharp_dflat3_play.png',
    'd3': 'd3_play.png',
    'dsharp3': 'dsharp_eflat3_play.png',
    'e3': 'e3_play.png',
    'f3': 'f3_play.png',
    'fsharp3': 'fsharp_gflat3_play.png',
    'g3': 'g3_play.png',
    'gsharp3': 'gsharp_aflat3_play.png',
    'a3': 'a3_play.png',
    'asharp3': 'asharp_bflat3_play.png',
    'b3': 'b3_play.png',
    'c4': 'c4_play.png',
    'csharp4': 'csharp_dflat4_play.png',
    'd4': 'd4_play.png',
    'dsharp4': 'dsharp_eflat4_play.png',
    'e4': 'e4_play.png',
    'f4': 'f4_play.png',
    'fsharp4': 'fsharp_gflat4_play.png',
    'g4': 'g4_play.png',
    'gsharp4': 'gsharp_aflat4_play.png',
    'a4': 'a4_play.png',
    'asharp4': 'asharp_bflat4_play.png',
    'b4': 'b4_play.png',
    'c5': 'c5_play.png',
};

//Assign keys variable to .key class, for all keys
const keys = document.querySelectorAll('.key');

/**
 * Arrow function with event listeners that execute playNote and releasNote functions
 */
keys.forEach(key => {

    key.addEventListener('mousedown', () => playNote(key));
    key.addEventListener('mouseup', () => releaseNote(key));
    document.addEventListener('keyup', () => releaseNote(key));
});

/* Arrow function to assign computer keys to correct value in KEYS array */
document.addEventListener('keydown', event => {

    // Prevent holding a key from triggering the note repeatedly
    if (event.repeat) return;

    // 'key' is now the key that is pressed
    const key = event.key;

    // keyIndex is the index within the KEYS array that corresponds with the note played
    const keyIndex = KEYS.indexOf(key);

    // Play the note that has the corresponding keyIndex
    if (keyIndex > -1) playNote(keys[keyIndex]);

});

/**
 * Play note function, responsible for playing note audio when keys are clicked
 * with samples created by me.
 */
function playNote(key) {

    // noteAudio is set to the data-note attribute of the releavant 'key' triggered in play.html
    const noteAudio = document.getElementById(key.dataset.note);

    // So that audio stops if note is released
    noteAudio.currentTime = 0;

    // Set volume to a comfortable level
    noteAudio.volume = 0.5;

    //play the audio
    noteAudio.play();

    // Adds active class changing appearance of active key
    key.classList.add('active');

    // So that the corresponding note is visible on page
    displayNote(key);
}

// Removes active class so keys don't remain in active state
function releaseNote(key) {
    key.classList.remove('active');
}

/**
 * The displayNote function gets the '#staff' element, and fills is with
 * the corresponding note so the user can see its name and how it looks.
 * 'key' is passed as a variable so the note that is played triggers the
 * correct value in the notesObj object above.
 * 
 * CI tutor Sean guided me with this function.
 */

function displayNote(key) {

    // Declare variable for each key being activated
    const note = key.dataset.note;

    // Declare a variable to get the corresponding image path
    const notePath = notesObj[note];

    // Get staff element
    let staff = document.getElementById('staff');

    /* Fill it with the path to the image ending with the corresponding
    value from notesObj */
    staff.src = 'assets/images/play/' + notePath;
}