// jshint esversion: 6

/* CONTACT.JS */

/**
 * This JavaScript file gets elements from the contact.html page and
 * is responsible for validating and sending the form, via EmailJS to my email
 * address.
 */

//declare form element variables
const contactForm = document.querySelector('.contact-form');
let sendButton = document.querySelector('.button');

//message to user once message is sent to confirm or to display error
const sentMsg = document.querySelector('#sent-msg');

//name and email entered by user
const from_name = document.querySelector('#name');
const from_email = document.querySelector('#email');

/* regex for valdation from w3 resource to validate email adresses
at https://www.w3resource.com/javascript/form/email-validation.php */
const allowedEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

/**
 * The function clearText clears the text the user has entered when the "send"
 * button is clicked, whether the message is sen or not.
 */
function clearText() {
    document.querySelector('#email').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#textarea').value = '';
}
/**
 * The validatForm function below is fired when clicking the "send" button.
 * preventDefault prevents the default behaviour and the form is the validated
 * with the variable allowedEmail. The form data is then sent via emailjs
 * script file linked in contact.html. Pieces of code from https://www.emailjs.com/
 */

sendButton.addEventListener('click', function validateForm(event) {
    event.preventDefault();

    if (from_name.value !== "" && from_email.value.match(allowedEmail)) {
        emailjs.init("user_xdb9Fr0JUjCoYFOs4hiu4"); // my user id

        // my templates at EmailJS, passing the contact form data before sending
        emailjs.sendForm('gmail_jvenkiah', 'musical_minds', contactForm);

        /* make the greeting when form is sent or not visible when user clicks
        send, populated and styled accordingly. */
        sentMsg.setAttribute('style', 'color: green; background-color: azure; visibility: visible;');
        sentMsg.innerHTML = `
        Thanks ${from_name.value}, your message has been sent.
      `;

    } else {
        sentMsg.innerHTML = `
    Name and email required!
  `;
        sentMsg.setAttribute('style', 'color: darkred; background-color: lightpink; visibility: visible;');
    }
    clearText();
});