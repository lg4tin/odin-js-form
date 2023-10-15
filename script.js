/*eslint-disable*/
const email = document.getElementById('email');

email.addEventListener('change', () => {
  a(email);

  
})

const zip = document.getElementById('zip-code');

zip.addEventListener('change', () => {
  a(zip)
})

const pw = document.getElementById('password');

pw.addEventListener('change', () => {
  a(pw)
})

const confirmPW = document.getElementById('confirm-password');

confirmPW.addEventListener('change', () => {
  if(confirmPW.value === pw.value) {
    alert('hi')
  } else {
    alert('Passwords need to match')
  }
})

function a(input) {
  if(input.checkValidity()) {
    input.style = "background-color: white";
  } else {
    input.style = "background-color: red";
    alert(input.validationMessage);
  }
}