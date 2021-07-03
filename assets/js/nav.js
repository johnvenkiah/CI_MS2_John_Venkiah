// jshint esversion: 6

// NAV.JS

/**
 * This JS-file injects the nav-bar html into all pages except index.html,
 * and stands for nav-elements functionality and appearance, toggling active
 * and hence different styles (for instance hidden.
 * 
 * This walkthrough has been a guide that i have adapted and applied my own
 * logic to, to meet this website's needs:
 * https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
 */

/**
 * Navbar and hamburger menu:
 * The HTML below is inserted within the header element on
 * on each page, to reduce html code.
 */
let navBar = `<nav class="navbar">
    <a href="index.html">
        <h1 class="main-logo-other-pages">Musical Minds</h1>
    </a>
    <ul class="nav-menu">
        <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="quiz.html" class="nav-link">Quiz</a>
        </li>
        <li class="nav-item">
            <a href="play.html" class="nav-link">Play</a>
        </li>
        <li class="nav-item">
            <a href="learn.html" class="nav-link">Learn</a>
        </li>
        <li class="nav-item">
            <a href="contact.html" class="nav-link">Contact</a>
        </li>
    </ul>
    <button class="hamburger" aria-label="Menu-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
</nav>`;

// Get the header
let header = document.getElementsByClassName('header')[0];

// Set its inner HTML to the navBar string above
header.innerHTML = navBar;

// Get the nav elements
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

// Add event listener to click and let it trigger the MobileMenu function
hamburger.addEventListener('click', mobileMenu);

/* Add event listener to window so that, when click anywhere and nav menu is open,
it closes */
window.addEventListener('click', event => {
    if (!hamburger.contains(event.target) && (!navMenu.contains(event.target))) {
        closeMenu();
    }
});

/**
 * The mobileMenu function toggles the active class, which through CSS styling makes it
 * visible.
 */
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// So hamburger closes when link is clicked
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', closeMenu));

/**
 * The close menu removes the active class from the nav elements, hiding it again from sight.
 */
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}