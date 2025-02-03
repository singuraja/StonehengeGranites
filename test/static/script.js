

/*
let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
  event.preventDefault();
  let emailInput = document.querySelector('#email'); 
  let messageInput = document.querySelector('#message');

  let emailText = emailInput.value; 
  let messageText = messageInput.value;

  console.log('email:', emailText, 'message:', messageText);
}

submitButton.addEventListener('click', clickListener); */



let submitButton = document.querySelector('#submit-button');
function emailValidate(email) {
  return email.includes('@');
}
function clickListener(event) {
  event.preventDefault();
  let emailInput = document.querySelector('#email');
  let messageInput = document.querySelector('#message');
  let emailText = emailInput.value;
  let messageText = messageInput.value;

  console.log('email:', emailText, 'message:', messageText);
  if(emailValidate(emailText) !== true) {
    console.log('The email address must contain @');
    return false;
  }
  console.log('Thanks for your message');
}
submitButton.addEventListener('click', clickListener);