/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        templesElement.appendChild(h3);
        templesElement.appendChild(img);
    })
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        const templeData = await response.json();

        templeList = templeData;

        displayTemples(templeList);
    }
}

/* reset Function */

const reset = async() => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    let filter = document.querySelector('#filtered').value

    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear < 2015;
            }));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }
}

/* Event Listener */

getTemples();

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

