
/* Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. 
Two users will each get one throw per turn. Whoever rolls the higher number wins. 
For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  
The function should accept each die value as a parameter so the function should be diceRoll(die1, die2) */



let die1 = Math.ceil(Math.random() * 6);
let die2 = Math.ceil(Math.random() * 6);
let total1 = die1 + die2;

let die3 = Math.ceil(Math.random() * 6);
let die4 = Math.ceil(Math.random() * 6);
let total2 = die3 + die4;

function user1 () {
    console.log("Die 1: " + die1);
    console.log("Die 2: " + die2);
    console.log("Total Roll: " + total1);
}


function user2 () {
    console.log("Die 1: " + die3);
    console.log("Die 2: " + die4);
    console.log("Total Roll: " + total2);
    
}

user1();
user2();


if(total1 > total2) {
    console.log("User 1 Won!");
} else if(total1 === total2) {
    console.log("Tie!");
} else if (total1 < total2) {
    console.log("User 2 Won!");
}




