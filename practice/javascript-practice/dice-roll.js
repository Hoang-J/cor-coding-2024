/* Using javascript's random number generator, create function that replicates two dice rolls with possible values between 1-6 for each die. 
Two users will each get one throw per turn. Whoever rolls the higher number wins. 
For example, if user 1 rolls an 11 and user 2 rolls a 9 then print user 1 wins.  
The function should accept each die value as a parameter so the function should be diceRoll(die1, die2) */


let user1 = 0;
let user2 = 0;

let die1 = Math.ceil(Math.random() * 6);
let die2 = Math.ceil(Math.random() * 6);

function diceRoll(die1, die2) {
    user1 = die1 + die2;

    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    user2 = die1 + die2;

    console.log()
}

diceRoll(die1, die2);