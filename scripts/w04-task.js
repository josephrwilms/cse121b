/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Joseph Williams",
    photo: "images/portrait.jpg",
    favoriteFoods : [
        'Pizza',
        'Steak',
        'Lasagna',
        'Trail Mix'
    ],
    hobbies: [
        'Hiking',
        'Computers',
        'Skating',
        'Camping'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Victoria, BC",
        length: "10 years"
    }
)


myProfile.placesLived.push(
    {
        place: "Kelowna, BC",
        length: "5 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Vancouver, BC",
        length: "5 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Lethbridge, AB",
        length: "2 years"
    }
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})