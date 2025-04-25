let buttonDropdownMenu = document.getElementById('button-menu-mobile');
let dropdownMenu = document.getElementsByClassName("menu")[0]

buttonDropdownMenu.addEventListener("click", toShowMenu)

function toShowMenu() {
    dropdownMenu.style.display = 'block'
}


// let signUpButton = document.getElementsByClassName("button-signup")
let signUpButton = document.querySelectorAll(".button-signup")
let signUpText = document.querySelectorAll(".text-input")
let signUpMails = document.querySelectorAll(".signup-input")
// console.log(signUpButton)

const EMAIL_REGEXP = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

// signUpButton.forEach(btn => {
//     btn.addEventListener("click", checkValues)
// });

signUpMails.forEach(input => {
    input.addEventListener("input", () => checkValues(input));
});

function checkValues(event) {
    event.preventDefault();

    // let mail = document.getElementsByClassName("signup-input").value.trim();
    // let text = document.getElementsByClassName("text-input");
    if (mail === ""){
        text.textContent = 'Fill in the input field'
    } else {
        if (isEmailValid(mail)) {
            text.textContent = "Expect a letter in the mail for further registration."
        } else {
            text.textContent = 'Incorrect email address entered'
        }
    }
}

// signUpButton[0].addEventListener("click", checkValues)