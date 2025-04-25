let buttonDropdownMenu = document.getElementById('button-menu-mobile');
let dropdownMenu = document.getElementsByClassName("menu")[0]

buttonDropdownMenu.addEventListener("click", toShowMenu)

function toShowMenu() {
    dropdownMenu.style.display = 'block'
}


let signUpButton = document.getElementsByClassName("button-signup")

const EMAIL_REGEXP = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function checkValues(event) {
    event.preventDefault();
    let mail = document.getElementsByClassName("signup-input")[0].value.trim();
    let text = document.getElementsByClassName("text-input")[0];
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

signUpButton[0].addEventListener("click", checkValues)