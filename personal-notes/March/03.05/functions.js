
function sayHello(username) {
    console.log("Hi, my name is " + username);
}

// sayHello("Dre");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function generateWindWarning(day1, day2, day3) {

    let averageWindSpeed = (day1 + day2 + day3)/3
    console.log(averageWindSpeed);
    if (averageWindSpeed < 0) {                         // wanted to make sure we dont process a negative number
        console.log("Illegal value provided");
    } else if(averageWindSpeed < 5) {
        console.log("Slightly windy");
    } else if (averageWindSpeed >= 5 && averageWindSpeed < 15) {      // make sure to put >= not > because want to include 5 value
        console.log("Moderate winds, grab a jacket"); 
    } else if (averageWindSpeed <= 15 && averageWindSpeed > 25) {     // make sure to put <= not < because want to include 15 value
        console.log("Conditions are hazardous");
    } else if (averageWindSpeed >= 25) {
        console.log("Wind advisory warning");
    } 
}

// generateWindWarning(7, 12, 15);

// function generateWeatherWarning() {
//     console.log(averageWindSpeed);
// }

// generateWeatherWarning();


function lottery(userNumber) {
    let lotteryNumber = Math.ceil(Math.random() * 100); 
    console.log("Usernumber: " + userNumber);
    console.log("Lotterynumber: " + lotteryNumber);
    if (userNumber === lotteryNumber) {
        console.log("Congratulations! You've won the lottery!");
    } else {
        console.log("Better luck next time");
    }
}

lottery(randomNumber);