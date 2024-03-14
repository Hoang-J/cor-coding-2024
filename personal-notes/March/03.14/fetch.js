// Functions come in many shapes and sizes

function getBirthdate() {   // This is how to traditionally write function
    // Does some here
}

// Anonymous Function/arrow function (cannot be called b/c no name, comp will just run it)
// ()=> {
//     console.log("Anonymous function is running");
// }

let randomUser = {};

// Fetch is a function that makes and API call
// It takes in the URL of the API as its parameter (only one argument)
fetch('https://randomuser.me/api/?results=5') // api for the get request
    // Another example of an arrow function (anonymous function), response is the parameter for
    // this function, meaning the response from the server will be stored in 
    // a variable called response

    // Response.json() converts the response into the JSON format (an obj)
    .then((response) => response.json())
    // This .then is the second function called in the promise chain
    // The value stored in the previous function is also passed as 
    // an argument to the next function even without a return statement
    // data now holds the value of response.json()
    .then((data) => console.log(data));



