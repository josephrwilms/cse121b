/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (num1, num2) {
    return num1 + num2;
}

function addNumbers () {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)


/* Function Expression - Subtract Numbers */

function subtract (num1, num2) {
    return num1 - num2;
}

function subrtactNumbers () {
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subrtactNumbers)

/* Arrow Function - Multiply Numbers */

function multiply (num1, num2) {
    return num1 * num2;
}

function multiplyNumbers () {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(number1, number2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

function divide (num1, num2) {
    return num1 / num2;
}

function divideNumbers () {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal() {
    let subtotal = Number(document.querySelector('#subtotal').value);

    if (document.querySelector('#member').checked) {
        subtotal = subtotal * 0.8;
    }

    console.log(`${subtotal.toFixed(2)}`);

    document.querySelector('#total').textContent = `${subtotal.toFixed(2)}`;
}

document.querySelector('#getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */

let oddArray = numbersArray.filter((number) => number % 2 != 0);
document.querySelector('#odds').textContent = oddArray;

/* Output Evens Only Array */

let evenArray = numbersArray.filter((number) => number % 2 == 0);
document.querySelector('#evens').textContent = evenArray;

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').textContent = numbersArray.reduce((sum, number) => sum + (number * 2));
