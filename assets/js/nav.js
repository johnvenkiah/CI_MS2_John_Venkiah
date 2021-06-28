/**
 * Navbar and hamburger menu:
 * The HTML below is inserted within the header
 * element on the pages with the class "navbar".
 */

let navBar = `
<nav class="navbar">
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

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => link.addEventListener("click", closeMenu));
document.querySelector('#container-learn').addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}