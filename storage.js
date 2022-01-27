const form1 = document.querySelector('form');
const fullname = form1.querySelector('#full-name');
const email = form1.querySelector('#email');
const message1 = form1.querySelector('#message');

var formOb = {};

function setData(txt, mail, msg) {
  formOb.text = txt;
  formOb.email = mail;
  formOb.message = msg;
  localStorage.setItem ('formData', JSON.stringify(formOb));
  console.log(JSON.stringify(formOb))
}

form1.addEventListener('keyup', (e) => {
  e.preventDefault(); 
  setData(fullname.value, email.value, message1.value)
});

window.onload = () => {
  const getFormData =JSON.parse(localStorage.getItem('formData'));
  fullname.value = getFormData.text;
  email.value = getFormData.email;
  message1.value = getFormData.message;
}