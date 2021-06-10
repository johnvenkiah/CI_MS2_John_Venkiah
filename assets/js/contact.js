/**
 * Validate Email and send though EmailJS
 * 
 * 
 */

//declare form elements ad variables
const contactForm = document.querySelector('.contact-form')

//message to user once message is sent to confirm or to display error
const sentMsg = document.querySelector('#sent-msg');

//name and email entered by user
const from_name = document.querySelector('#name');
const from_email = document.querySelector('#email');

/* regex for valdation taken from w3 resource to validate email adresses
at https://www.w3resource.com/javascript/form/email-validation.php */
const allowedEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//Validation fired when clicking the "send" button
function validateForm(event) {
  event.preventDefault();
  
  if (from_name.value !== "" && from_email.value.match(allowedEmail)) {
      emailjs.init("user_xdb9Fr0JUjCoYFOs4hiu4");
      emailjs.sendForm('gmail_jvenkiah', 'musical_minds', contactForm);
      sentMsg.setAttribute("style", "color: green; background-color: azure;");
      sentMsg.innerHTML = `
        Thanks ${from_name.value}, your message has been sent.
      `;
      console.log('Form sent sucessfully!');

  } else {
    sentMsg.innerHTML = `
    Please enter a valid email-address and a name!
  `;
    console.log('Form not sent!');
    sentMsg.setAttribute("style", "color: red; background-color: lightpink;");
    return;
  }
}