/* Conditionals: runs blocks of code depending on the condition is true/false */


let temperature = 87;

// If statements only run blocks of code when the condition evaluates to
// true
if (temperature < 72) {
    console.log(`It's cold`);
}

// We can also run code blocks based on a statement NOT being true
// ! means NOT
if(temperature !=72) {
    console.log("Today is not a perfect day");
}

let isSaturday = false;
if(isSaturday == true) {
    console.log("It's the weekend!")
}

let day = "Tuesday";
if(day == "Monday") {
    console.log("It's the worst day of the week");
}

// Checks both the value and datatype
let score = 43;
if(score === "43") {
    console.log("That's a great score");
}


let price = 40000;
if(price < 25000) {
    console.log("Buy the car with cash");
} else if (price >= $25000)