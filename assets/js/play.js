function touchDevice() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

let paragraph = document.querySelector('.paragraph');
let paragraphHtml = paragraph.innerHTML;
let kbKeys = document.querySelectorAll('.kb-keys');

if(touchDevice()) {
    paragraphHtml = paragraphHtml.substr(0, 52);
    paragraph.innerHTML = paragraphHtml + '!';
    kbKeys.forEach(kbKey => kbKey.remove());
}

/**
 * The piano, which responds to user input. Borrowed most of this code from Kyle at
 * Web Dev Simplified through this great video: https://youtu.be/vjco5yKZpU8
 */

const KEYS = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', "'", '['];

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

//Create a variable for all keys
const keys = document.querySelectorAll('.key');

keys.forEach(key => {

    key.addEventListener('mousedown', () => playNote(key));
    key.addEventListener('mouseup', () => releaseNote(key));
    document.addEventListener('keyup', () => releaseNote(key));
});

document.addEventListener('keydown', event => {

    if (event.repeat) return;

    const key = event.key;
    const keyIndex = KEYS.indexOf(key);

    if (keyIndex > -1) playNote(keys[keyIndex]);

});

/**
 * Play note function,
 */
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.volume = 0.5;
    noteAudio.play();

    key.classList.add('active');
    displayNote(key);
}

function releaseNote(key) {
    key.classList.remove('active');
}

function displayNote(key) {

    const note = key.dataset.note;
    const notePath = notesObj[note];
    
    let staff = document.getElementById('staff');
    staff.src = 'assets/images/play/' + notePath;

    // Sean helped me here
}