let count = 0;
const countDisplay = document.querySelector("#count-display");
const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");

increaseBtn.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count = count - 1;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

const tempInput = document.querySelector("#temp-input");
const toFahrenheit = document.querySelector("#to-fahrenheit");
const toCelsius = document.querySelector("#to-celsius");
const submitBtn = document.querySelector("#submit-btn");
const result = document.querySelector("#result");

submitBtn.addEventListener("click", function () {
    const temp = Number(tempInput.value);

    if (toFahrenheit.checked) {
        const fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = fahrenheit.toFixed(1) + " °F";
    } else if (toCelsius.checked) {
        const celsius = (temp - 32) * (5 / 9);
        result.textContent = celsius.toFixed(1) + " °C";
    } else {
        result.textContent = "Please select a unit.";
    }
});
