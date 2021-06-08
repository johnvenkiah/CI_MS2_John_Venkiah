let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('#submit', validateForm);

let errorMsg = document.querySelector('#error-msg');

function validateForm(event) {
  event.preventDefault();
  let username = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let allowedEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (username !== "" || email.value.match(allowedEmail)) {
      emailjs.init("user_xdb9Fr0JUjCoYFOs4hiu4");
      emailjs.sendForm('contact_service', 'contact_form', this);
          console.log('SUCCESS!');
  } else {
    errorMsg.innerHTML = `
    Please fill in a valid Email adress and a name!
  `
    console.log('FAILED...', errorMsg);
  }
}