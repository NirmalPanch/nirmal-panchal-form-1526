const Button = document.getElementById('submit');
const FullNameInput = document.getElementById('fullname');
const EmailInput = document.getElementById('email');
const MessageInput = document.getElementById('message');
const EmailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


function validateForm(event) {

  event.preventDefault();
  let data = {};
  let errors = [];

  // Validating Full Name
  if (FullNameInput.value.trim() === '') {
    errors.push("Full Name is missing.");
  } else {
    data.fullname = FullNameInput.value.trim();
  }

  // Validating Email
  if (EmailInput.value.trim() === '') {
    errors.push("Email is missing.");
  } else if (!EmailRegex.test(EmailInput.value.trim())) {
    errors.push("Not Valid Email Address.");
  } else {
    data.email = EmailInput.value.trim();
  }

  // Validating Message
  if (MessageInput.value.trim() === '') {
    errors.push("Message is missing.");
  } else {
    data.message = MessageInput.value.trim();
  }

  // Displaying errors 
  if (errors.length > 0) {
    console.log(errors);

  } else {
    console.log("Form data:", data);
    clearForm();
  }
}

function clearForm() {
  FullNameInput.value = '';
  EmailInput.value = '';
  MessageInput.value = '';
}

Button.addEventListener('click', validateForm);