/**
 * Validate Email and send though EmailJS
 * 
 * 
 */

const contactForm = document.querySelector('.contact-form')
const sentMsg = document.querySelector('#sent-msg');
const from_name = document.querySelector('#name');
const from_email = document.querySelector('#email');
const allowedEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function validateForm(event) {
  event.preventDefault();
  
  if (from_name.value !== "" && from_email.value.match(allowedEmail)) {
      emailjs.init("user_xdb9Fr0JUjCoYFOs4hiu4");
      emailjs.sendForm('gmail_jvenkiah', 'musical_minds', contactForm);
      sentMsg.innerHTML = `
        Hi ${from_name.value}, your message has been sent.
      `;
      console.log('Form sent sucessfully!');

  } else {
    sentMsg.innerHTML = `
    Please fill in a valid Email adress and a name!
  `;
    console.log('Form not sent!');
    sentMsg.style.color('red');
    return;
  }
}