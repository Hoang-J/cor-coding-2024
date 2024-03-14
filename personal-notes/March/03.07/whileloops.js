// let bool = [true, false, false, true, true, true, false];

// let i = 0;
// while(i < bool.length) {
//     if(bool[i] === true) {
//         console.log(i);  
//     }
//     i++;  
// }

let userAccounts = [
    {
        name: "John Doe",
        birthday: "05/24/1974",
        email: "john@email.com",
    }, {
        name: "Ashley Jones",
        birthday: "07/09/1986",
        email: "ashley@email.com",
    }, {
        name: "Mike Brown",
        birthday: "11/12/2004",
        email: "mike@email.com",
    }, {
        name: "Jake Smith",
        birthday: "12/03/1999",
        email: "jake@email.com",
    },
];

// function getBirthdates(users) {
//     let i = 0;
//     while(i < users.length) {
//         // console.log(users[i].birthday)
//         const min = Math.ceil(1000000);
//         const max = Math.floor(9999999);
//         users[i].id = Math.floor((Math.random() * (max - min) + min));            // that . is making a new field in the object array
//         i++;
//         return user[i].id;
//     }
//     console.log(users);
// };

// getBirthdates(userAccounts);


/* 
Generate a random id that is that 7 digits long and is not a duplicate
i.e. another candidate annot have the same id
*/

// Step 1: Generate random 7 digit numbers

// Step 2: Determine if an id has already been used 

// Question 1: How do we know if a number has already been used?
// Answer: Use an array to store the numbers that have already been used

let invalidIds = [];

function generateNewId() {
    let id = Math.ceil(Math.random() * 4);
    for(let i = 0; i < invalidIds.length; i++) {
        console.log("invalidID: ", invalidIds[i]);
        if(id === invalidIds[i]) {
            console.log("Duplicate found!");
            console.log("Generated id: ", id);
            return generateNewId();
        }
    }
    invalidIds.push(id);
    console.log("Invalid ID Array", invalidIds);
    return id;
}



function getBirthdates(users) {
    let i = 0;
    while(i < users.length) {
        users[i].id = generateNewId();
        i++;
    }
    console.log(users);
};

getBirthdates(userAccounts);






/* 
Use your favorite browswer to figure out how to convert the current list of user birthday from a string to a date.

Determine if you can compare dates using <, >, == similar to any regular number 

Determine which user can run for presidency

*/

// function getBirthdates(users) {
//     let i = 0;
//     while(i < users.length) {
//         let d = new Date(users[i].birthday);
//         let month = d.getMonth() + 1;
//         let day = d.getDate();
//         let year = d.getFullYear();
//         let date = month + "/" + day + "/" + year;
//         if(year <= 1989) {
//             console.log(users[i].name + " is at least 35 y/o. You can be president!");
//         } else{
//             console.log(users[i].name + " NOOOOOOOO PRESIDENCY FOR YOU!");
//         }
//         i++;
//     }
// };

// getBirthdates(userAccounts);

