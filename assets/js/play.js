/**
 * The piano, which responds to user input. Borrowed most of this code from Kyle at
 * Web Dev Simplified through this great video: https://youtu.be/vjco5yKZpU8
 */

const KEYS = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', "'", '[']

let notesObj = {
    'c3': 'c-3.png',
    'csharp3': 'c-sharp-3.png',
    'd3': 'd-3.png',
    'dsharp3': 'd-sharp-3.png',
    'e3': 'e-3.png',
    'f3': 'f-3.png',
    'fsharp3': 'f-sharp-3.png',
    'g3': 'g-3.png',
    'gsharp3': 'g-sharp-3.png',
    'a3': 'a-3.png',
    'asharp3': 'a-sharp-3.png',
    'b3': 'b-3.png',
    'c4': 'c-4-treble.png',
    'csharp4': 'c-sharp-4-treble.png',
    'd4': 'd-4.png',
    'dsharp4': 'd-sharp-4.png',
    'e4': 'e-4.png',
    'f4': 'f-4.png',
    'fsharp4': 'f-sharp-4.png',
    'g4': 'g-4.png',
    'gsharp4': 'g-sharp-4.png',
    'a4': 'a-4.png',
    'asharp4': 'a-sharp-4.png',
    'b4': 'b-4.png',
    'c5': 'c-5.png',
}

//Create a variable for all keys
const keys = document.querySelectorAll('.key')

let staffBoxPlay = document.getElementById('staffbox')

keys.forEach(key => {

    key.addEventListener('mousedown', () => playNote(key))
    key.addEventListener('mouseup', () => releaseNote(key))
    document.addEventListener('keyup', () => releaseNote(key))
})

document.addEventListener('keydown', event => {

    if (event.repeat) return

    const key = event.key
    const keyIndex = KEYS.indexOf(key)

    if (keyIndex > -1) playNote(keys[keyIndex])

})

/**
 * Play note function,
 */
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()

    key.classList.add('active')
    displayNote(key)
}

function releaseNote(key) {
    key.classList.remove('active')
}

function displayNote(key) {

    const note = key.dataset.note
    const notePath = notesObj[note]
    
    let staff = document.getElementById('staff')
    staff.src = 'assets/images/quiz/' + notePath

    // Sean helped me here
}