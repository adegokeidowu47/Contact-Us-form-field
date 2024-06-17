const form = document.querySelector('form')
// const submitBtn = document.querySelector('button');
const firstName = document.querySelector('#firstname-input');
const lastName = document.querySelector('#lastname-input');
const email = document.querySelector('#email-input');
const message = document.querySelector('#message-content');
const checkBox = document.querySelector('#consent-eqr');
const allInputs = document.querySelectorAll('input');
const radioLi = document.querySelectorAll('li input');
const allWarningMsg = document.querySelectorAll('.warningmsg');
const SuccessfulMsg = document.querySelector('.form-successful');



const setError = (elem, message) => {
    const errorDisplay = elem.parentElement.querySelector('.warningmsg');

    errorDisplay.innerText = message;
    elem.classList.add('error');
    elem.classList.remove('success');
}

const setSuccess = (elem) => {
    
    const errorDisplay = elem.parentElement.querySelector('.warningmsg');

    errorDisplay.innerText = '';
    elem.classList.add('success');
    elem.classList.remove('error');
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    let selected = false;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  
     
    if (!firstNameValue) {
        setError(firstName, 'This field is required!');
        return;
      }
    else {
        setSuccess(firstName);
      }
      
    if (!lastNameValue) {
        setError(lastName, 'This field is required!');
        return;
    }
    else {
        setSuccess(lastName);
    }
    if (!emailValue) {
      setError(email, 'This field is required!');
      return;
    }
    else if(!emailValue.match(emailRegex)){
      setError(email, 'Please enter a valid email address!');
      return
    }
    else {
        setSuccess(email);
    }
    
    for (let i = 0; i < radioLi.length; i++) {
      if (radioLi[i].checked) {
        selected = true;
        break;
      }
    }
    
    if (!selected) {
      document.querySelector('#radio-err').innerText = 'Please, select a query type!';
      return;
    }
    else {
      document.querySelector('#radio-err').innerText = '';
    }
    
    if (!messageValue) {
        setError(message, 'This field is required!');
        return;
    }
    else if (messageValue.length > 400) {
          setError(message, 'This words is greater than 400 characters!');
          return;
        }
    else {
        setSuccess(message);
    }
    
    if (!checkBox.checked) {
      document.querySelector('#consent-err').innerText = 'To submit this form, please consent to being contacted!';
      return;
    }
    else {
      document.querySelector('#consent-err').innerText = '';
    }
    return true;
}


const showSuccessfulMsg = () => {
  SuccessfulMsg.innerHTML = `<div
      class="form-successful Success">
      <h2><img src="assets/images/icon-success-check.svg" alt="" />Message Sent!</h2>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>`;
}

const removeSmg = () => SuccessfulMsg.remove();


form.addEventListener('submit', function(e){
    e.preventDefault();


    validateInputs();
    
    if (!validateInputs()) {
      return;
    }

    showSuccessfulMsg();
    setTimeout(function () {
      removeSmg();
      window.location.reload();
    }, 2000);
    return false;
});




// Unsual code or waste

// function checkRadio(){
  
// }
  
  // radioLi.forEach( (item) => {
  //   // console.log(item);
  //   if (!item.Checked) {
  //     alert('Hello, I worked!');
  //   }
  // });


// function errorInput(){
//   message.style.border = '1px solid red';
//         allInputs.forEach( (elem, message) => {
//             elem.style.border = '1px solid red';
//             const errorDisplay = elem.parentElement.querySelectorAll('.warningmsg');
//             errorDisplay.forEach( (item) => {
//                 item.innerText = "This field is required!";
//             });
//         });
//         return;
// }
// function successInput(){
//   console.log('hello');
//   // message.style.border = '1px solid green';
//         allInputs.forEach( (elem) => {
//             elem.style.border = '1px solid green';
//             // const errorDisplay = elem.parentElement.querySelectorAll('.warningmsg');
//             // errorDisplay.forEach( (item) => {
//             //     item.innerText = "";
//             // });
//         });
//         return;
// }

// function validate

