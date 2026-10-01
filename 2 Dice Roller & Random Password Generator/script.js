const diceCountInput = document.querySelector("#dice-count");
const rollBtn = document.querySelector("#roll-btn");
const diceResult = document.querySelector("#dice-result");
const diceImages = document.querySelector("#dice-images");

rollBtn.addEventListener("click", function () {
    const numberOfDice = Number(diceCountInput.value);
    const values = [];
    const images = [];

    for (let i = 0; i < numberOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push('<img src="images/dice-' + value + '.svg" alt="Dice showing ' + value + '">');
    }

    diceResult.textContent = values.join(", ");
    diceImages.innerHTML = images.join("");
});

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";

function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";

    if (includeLower) {
        allowedChars = allowedChars + lowercaseChars;
    }
    if (includeUpper) {
        allowedChars = allowedChars + uppercaseChars;
    }
    if (includeNumbers) {
        allowedChars = allowedChars + numberChars;
    }
    if (includeSymbols) {
        allowedChars = allowedChars + symbolChars;
    }

    if (length <= 0) {
        return "Password length must be at least 1.";
    }
    if (allowedChars.length === 0) {
        return "Please select at least one character type.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password = password + allowedChars[randomIndex];
    }

    return password;
}

const passwordLengthInput = document.querySelector("#password-length");
const includeLowerBox = document.querySelector("#include-lower");
const includeUpperBox = document.querySelector("#include-upper");
const includeNumbersBox = document.querySelector("#include-numbers");
const includeSymbolsBox = document.querySelector("#include-symbols");
const generateBtn = document.querySelector("#generate-btn");
const passwordResult = document.querySelector("#password-result");

generateBtn.addEventListener("click", function () {
    const length = Number(passwordLengthInput.value);
    const password = generatePassword(
        length,
        includeLowerBox.checked,
        includeUpperBox.checked,
        includeNumbersBox.checked,
        includeSymbolsBox.checked
    );
    passwordResult.textContent = password;
});
