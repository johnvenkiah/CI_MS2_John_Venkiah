function sendEmail() {
  let inputValues = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('textarea').value,
  };

  emailjs.send('service_a1l6eg6', 'template_to8xzwq', inputValues)
  .then (function(res) {
    console.log("The email was sent", res.status);
  })
}