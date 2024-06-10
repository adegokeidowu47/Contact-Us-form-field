const form = document.querySelector('form')
// const submitBtn = document.querySelector('button');
const firstName = document.querySelector('#firstname-input');
const lastName = document.querySelector('#lastname-input');
const email = document.querySelector('#email-input');
const message = document.querySelector('#message');
const radioLi = document.querySelectorAll('li input');
const checkBox = document.querySelector('#consent-eqr');
const allInputs = document.querySelectorAll('input');

console.log(radioLi.forEach( (a) => {
    console.log(!a.value);
}));



// function validate

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();


    
    if (!firstNameValue) {
        setError(firstName, 'This field is required!');
        return;
    }
    else {
        setSuccess(firstName)
    }

    if (!lastNameValue) {
        setError(lastName, 'This field is required!');
        return;
    }
    else {
        setSuccess(lastName);
    }

    if (!emailValue) {
        setError(email, 'Please enter a valid email address!');
        return;
    }
    else {
        setSuccess(email);
    }
    if (!radioLi.value) {
      
        setError(radioLi, 'Please select a query type!');
        return;
    }
    else {
        setSuccess(radioLi);
    }

}

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


form.addEventListener('submit', function(e){
    e.preventDefault();


    validateInputs();
    // allInputs.forEach( (elem) => {
    //     elem.style.border = '1px solid red'
    // });
});