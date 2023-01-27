// select element
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password_confirm = document.querySelector("#password_confirm");

// select all error

const username_error = document.querySelector("#username_error");
const email_error = document.querySelector("#email_error");
const password_error = document.querySelector("#password_error");

//form submit

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validation();
})

// event listener 

username.addEventListener('blur', usernameVerification, true);
email.addEventListener('blur', emailVerification, true);
password.addEventListener('blur', passwordVerification, true);

// validation function
function validation() {
    if (username.value.length === 0) {

        username.classList.add('error_border');
        username_error.textContent = 'Username is required';
        username_error.classList.add('errorDanger');
        username.focus();
        return false;
    }
    if (email.value.length === 0) {

        email.classList.add('error_border');
        email_error.textContent = 'Email is required';
        email_error.classList.add('errorDanger');
        email.focus();
        return false;
    }
    if (password.value.length === 0) {
        password.classList.add('error_border');
        password_error.textContent = 'Password is required';
        password_error.classList.add('errorDanger');
        password.focus();
        return false;
    }
    if (password.value !== password_confirm.value) {
        password.style.border = '1px solid red';
        //password.classList.add('error_border');
        //password_confirm.classList.add('error_border');
        password_confirm.style.border = '1px solid red';
        password_error.textContent = "Two passwords do not match";
        password_error.classList.add('errorDanger')
        //password_error.classList.add('errorDanger');
        //password_confirm.classList.add('error_border');

        return false;
    }
}
// event handler functions

function usernameVerification() {
    if (username.value.length !== 0) {
        username.classList.add('succes_border');
        document.querySelector('#username_div').classList.add('succes');
        username_error.textContent = "";
        return true;
    }
}

function emailVerification() {
    if (email.value.length !== 0) {
        email.classList.add('succes_border');
        document.querySelector('#email_div').classList.add('succes');
        email_error.textContent = "";
        return true;
    }
}

function passwordVerification() {
    if (password.value.length !== 0) {
        password.classList.add('succes_border');
        document.querySelector('#password_div').classList.add('succes');
        document.querySelector('#password_confirm_div').classList.add('succes');
        password_error.textContent = "";
        return true;
    }

    /**
     * password.style.border = '1px solid red';
         password_confirm.style.border = '1px solid red';
         password_error.textContent = "Two passwords do not match";
     */
    if (password.value === password_confirm.value) {
        password_error.textContent = "";
        password.style.border = '1px solid black';
        password_confirm.style.border = '1px solid black';

    }
}