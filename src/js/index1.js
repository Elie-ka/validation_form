const form = document.querySelector("#form");

const firstName = document.querySelector("#firstname");
const errorF = document.querySelector("#errorF");

const email = document.querySelector("#email");
const errorE = document.querySelector("#errorE");

const male = document.querySelector("#male");
const female = document.querySelector("#female");
const errorS = document.querySelector("#errorS");




form.addEventListener("click", function (e) {
    e.preventDefault();

    if (firstName.value.length === 0) {
        errorF.textContent = "firstname is required";
        errorF.classList.add("error");
        firstName.classList.add("sourdine");
    }
    else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorE.textContent = "email invalid";
        errorE.classList.add("error");
        email.classList.add("sourdine");
    }
    else if (male.checked === false && female.checked === false) {
        errorS.textContent = "check one option";
        errorS.classList.add("error");
    }
    else {
        errorF.textContent = " "
        errorF.classList.remove("error");
        firstName.classList.add("succes");

        errorE.textContent = " ";
        errorE.classList.remove("error");
        email.classList.add("succes");

        errorS.textContent = "";
        errorS.classList.remove("error");

    }

})