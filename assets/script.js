const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const eMail = document.getElementById('email');
const password = document.getElementById('password');
const firstNameError = document.getElementById('first-error');
const lastNameError = document.getElementById('last-error');
const eMailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const handleSubmit = function (e) {
    e.preventDefault();

    let hasError = false;

    const fname = firstName.value.trim();
    const lname = lastName.value.trim();
    const emailValue = eMail.value.trim();
    const passwordValue = password.value.trim();

    if (fname === '') {
        firstNameError.textContent = "First Name cannot be empty";
        firstName.classList.add('error'); 
        hasError = true;
    } else {
        firstNameError.textContent = "";
        firstName.classList.remove('error'); 
    }

    if (lname === '') {
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.classList.add('error');
        hasError = true;
    } else {
        lastNameError.textContent = "";
        lastName.classList.remove('error');
    }

    if (emailValue === '') {
        eMailError.textContent = "Email cannot be empty";
        eMail.classList.add('error');
        hasError = true;
    } else {
        eMailError.textContent = "";
        eMail.classList.remove('error');
    }

    if (passwordValue === '') {
        passwordError.textContent = "Password cannot be empty";
        password.classList.add('error');
        hasError = true;
    } else {
        passwordError.textContent = "";
        password.classList.remove('error');
    }

    if (hasError) {
        return; 
    }

};

form.addEventListener('submit', handleSubmit);
