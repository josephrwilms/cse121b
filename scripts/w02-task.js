/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Joseph Williams';

var currentTime = new Date();
var currentYear = currentTime.getFullYear();

var profilePicture = 'images/portrait.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

var yearElement = document.querySelector('#year');

var imageElement = document.getElementById('portrait');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

// The instructions are unclear on what to set to the value of the current year?
yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['Pizza', 'Pasta', 'Fresh Honey', 'Home grown vegetables'];

foodElement.innerHTML = favoriteFoods;

var anotherFood = "Burgers";

favoriteFoods.push(anotherFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;
