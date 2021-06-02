/**
 * Navbar and hamburger menu:
 * The HTML below is inserted within the header
 * element on the pages with the class "navbar".
 */

let navBar = `
<nav class="navbar">
    <a href="index.html" class="nav-logo">
        <h1>Musical Minds</h1>
    </a>
    <ul class="nav-menu">
        <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="play.html" class="nav-link">Play</a>
        </li>
        <li class="nav-item">
            <a href="quiz.html" class="nav-link">Quiz</a>
        </li>
        <li class="nav-item">
            <a href="learn.html" class="nav-link">Learn</a>
        </li>
        <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
        </li>
    </ul>
    <button class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
</nav>
`;

let header = document.getElementsByClassName('header')[0];
header.innerHTML = navBar;

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// So hamburger closes when link is clicked

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/**
 * The piano, which responds to user input. Borrowed some code here from Kyle at
 * Web Dev Simplified through this great video: https://youtu.be/vjco5yKZpU8
 */

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",]
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u', 'o', 'p', '[',]

//Create a variable for all keys
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

/*Add event listener function when keys are clicked to play note function.
Arrow function to minimize written code. */

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

/**
 * Play note function,
 */
function playNote(key) {
    const noteAudio  = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    key.addEventListener('mouseup', () => {
        key.classList.remove('active')
    })
}