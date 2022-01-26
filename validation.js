const form = document.querySelector('form');
const emailForm = form.querySelector('#email');

const regex = /[A-Z]/

const message = document.createElement('p');
message.innerText = 'Please submit your email in lower case' 

function validate(a) {
  return regex.test(a);
}

form.addEventListener('submit', () => {
  if (validate(emailForm.value)){
  form.insertBefore(message, form.children[1]);
  form.querySelector('button').preventDefault;
  }
});