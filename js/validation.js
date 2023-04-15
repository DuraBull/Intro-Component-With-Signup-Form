const input = document.querySelectorAll("input");
const submit = document.querySelector(".btn-claim");
const errorImage = document.querySelectorAll(".error-img");
const errorText = document.querySelectorAll(".error-text");

submit.addEventListener("click", validateForm);
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            validateForm();
        }
    });
}

let emailValid = true;

function validateForm() {
    for (var i = 0; i < input.length; i++) {
        if ((input[i].value == '') && (!input[i].classList.contains('email'))) {
            addError(i);
        }
        else if (input[i].classList.contains('email')) {
            validateEmail(i);
         }
        else {
            removeError(i);
        }
    }
}

function addError(i) {
    errorImage[i].classList.remove("inv");
    errorText[i].classList.remove("inv");
}

function removeError(i) {
    errorImage[i].classList.add("inv");
    errorText[i].classList.add("inv");
}

function validateEmail(i) {
    if (checkAt(i) && (emailLength(i) >= 2) && validDomain(i)) {
        emailValid = true;
    }
    else {
        emailValid = false;
    }

    if (emailValid) {
        removeError(i);
    }
    else {
        addError(i);
    }
}

function checkAt(i) {
    if (input[i].value.indexOf("@") != -1) {
        return true;
    }
    else {
        return false;
    }
}

function emailLength(i) {
    var emailText = input[i].value.slice(0, input[i].value.indexOf("@"));
    return emailText.length;
}

function validDomain(n) {
    var domains = ['.com', '.net', '.fr', '.co.uk', '.ru', '.de', '.it', '.es'];

    for (var i = 0; i < domains.length; i++) {
        // console.log(domains[i]);
        if (input[n].value.indexOf(domains[i]) != -1) {
            return true;
        }
    }

    return false;
}