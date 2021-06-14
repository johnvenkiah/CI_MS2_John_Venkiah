/**
 * The piano, which responds to user input. Borrowed most of this code from Kyle at
 * Web Dev Simplified through this great video: https://youtu.be/vjco5yKZpU8
 */

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", ]
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p', '[', ]

//Create a variable for all keys
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

/* Add event listener function when keys are clicked to play note function. */

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNote(key))
    key.addEventListener('mouseup', () => releaseNote(key))
    
//     {

//     key.classList.remove('active')
//     console.log('straldge')
// })
})

document.addEventListener('keydown', event => {

    if (event.repeat) return
    const key = event.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])

    document.addEventListener('keyup', releaseNote(key))
})

/**
 * Play note function,
 */
function playNote(key) {
    // preventDefault()
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')


}

// key.addEventListener('mouseup', releaseNote())

function releaseNote(key) {
    key.classList.remove('active')
    console.log('rabb')
}

function displayNote() {
    let notesDisplayed = [
        'c-3.png',
        'c-sharp-3.png',
        'd-3.png',
        'd-sharp-3.png',
        'e-3.png',
        'f-3.png',
        'f-sharp-3.png',
        'g-3.png',
        'g-sharp-3.png',
        'a-3.png',
        'a-sharp-3.png',
        'c-4-treble.png',
        'c-sharp-4-treble.png',
        'd-4.png',
        'd-sharp-4.png',
        'e-4.png',
        'f-4.png',
        'f-sharp-4.png',
        'g-4.png',
        'g-sharp-4.png',
        'a-4.png',
        'a-sharp-4.png',
        'b-4.png',
        'c-5.png',
    ]

    let staffBoxPlay = document.getElementById('staffbox')

    staffBoxPlay.innerHTML = `
     <img src='assets/images/quiz/${notesDisplayed([0])} alt=${notesDisplayed.valueOf}></img>
     `;
}