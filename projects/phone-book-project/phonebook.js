
/* Using the random user generator, create a phone book of users.
Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
Create a webpage that displays a contact card for each user displaying the aforementioned data
Deploy the website */


let userDatabase = [];


fetch('https://randomuser.me/api/?results=20')
    .then((response) => response.json())
    .then((data) => {
        userDatabase = data;
    })
    .then(() => {
        console.log(userDatabase);
    });


// fetch('https://randomuser.me/api/?results=20')
//     .then((response) => response.json())
//     .then((data) => (console.log(data)));
    




