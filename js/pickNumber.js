const lowerValue = 1;
const higherValue = 1000;
const displayHigherValue = document.querySelector('#maior-valor');
const displayLowerValue = document.querySelector('#menor-valor');
const secretNumber = generateRandomNumber();

function generateRandomNumber(){
    return parseInt(Math.random() * (higherValue - lowerValue + 1) + lowerValue);
}

displayHigherValue.textContent = higherValue;
displayLowerValue.textContent = lowerValue;
