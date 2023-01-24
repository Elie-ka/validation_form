function getElementHtml() {
    const form = document.querySelector("#form");
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const sexe = document.querySelector("#sexe");
    const date = document.querySelector("#date");
    const country = document.querySelector("#country");
    const telephone = document.querySelector("#telephone");
    const button = document.querySelector("#button");

    return {
        form, firstName, lastName, email, sexe, date, country, telephone, button
    };
}

getElementHtml().form.addEventListener("click", function (e) {
    e.preventDefault();
    validation();
})

function validation() {

    const firstNameValue = getElementHtml().firstName.value.trim();
    const lastNameValue = getElementHtml().lastName.value.trim();
    const emailValue = getElementHtml().email.value.trim();
    const at = emailValue.indexOf("@");
    const dot = emailValue.lastIndexOf(".")
    const sexeValue = getElementHtml().sexe.value;
    const dateValue = getElementHtml().date.value;
    const countryValue = getElementHtml().country.value;
    const telephoneValue = getElementHtml().telephone.value.trim();
    const errorF = document.querySelector(".errorF");
    const errorL = document.querySelector(".errorL");
    const errorE = document.querySelector(".errorE");
    const errorS = document.querySelector(".errorS");
    const errorD = document.querySelector(".errorD");
    const errorC = document.querySelector(".errorC");
    const errorT = document.querySelector(".errorT");

    if (firstNameValue.length === 0) {
        errorF.textContent = "Firstname is required";
        errorF.classList.add("error");
        getElementHtml().firstName.classList.add("sourdine");
    }
    else if (!isNaN(firstNameValue)) {
        errorF.textContent = "Firstname should be a character";
        errorF.classList.add("error");
        getElementHtml().firstName.classList.add("sourdine");
    }
    else if (lastNameValue.length === 0) {
        errorL.textContent = "Lastname is required";
        errorL.classList.add("error");
        getElementHtml().lastName.classList.add("sourdine");
    }
    else if (!isNaN(lastNameValue)) {
        errorL.textContent = "Lastname should be a character";
        errorL.classList.add("error");
        getElementHtml().lastName.classList.add("sourdine");
    }
    else if (at < 1 || dot < at + 2 || dot + 2 >= emailValue.length) {
        errorE.textContent = "Not a valid email";
        errorE.classList.add("error");
    }
    else if (sexeValue.length === 0) {
        errorS.textContent = "Sexe is required";
        errorS.classList.add("sourdine");
    }
    else if (dateValue.length === 0) {
        errorD.textContent = "Date is required";
        errorD.classList.add("error");
    }
    else if (countryValue.length === 0) {
        errorC.textContent = "Country is required";
        errorC.classList.add("error");
    }
    else if (telephoneValue.length === 0 || telephoneValue.length !== 10) {
        errorT.textContent = "Telephone is required or incorrect number";
        errorT.classList.add("error");
    }
    else if (isNaN(telephoneValue)) {
        errorT.textContent = "Telephone number should be in digit";
        errorT.classList.add("error");

    }
    else {
        getElementHtml().firstName.classList.remove("sourdine");
        getElementHtml().lastName.classList.remove("sourdine");
        errorC.textContent = " ";
        errorD.textContent = " ";
        errorE.textContent = " ";
        errorF.textContent = " ";
        errorL.textContent = " ";
        errorS.textContent = " ";
        errorT.textContent = " ";
    }
}