function sendEmail() {
  let from_name = (document.dataType.name);
  let from_email = (document.datatype.email);
  let message = (document.dataType.name);
  let submit = document.querySelector('submit-button');

  submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(from_name.value == "" || from_email.value == "" || message.value == "") {
      inputEmpty();
    }
  })
}

sendEmail()

function successPopup() {
swal({
  title: "Email sent!",
  text: "We will reply shortly!",
  icon: "success",
  button: "OK",
});
}

successPopup()

function errorPopup() {
  swal({
    title: "Oops!",
    text: " You forgot to enter some info!",
    icon: "error",
    button: "OK",
  });
  }
  
  successPopup()