/* Check the forecast for this week in Atlanta. 
Take the average windspeed and print out one of the following sentences. 
If the windspeed is less than 5mph then print slightly windy
if the mph is 5-15 mph the print moderate winds, grab a jacket
if mph is 15-25 print conditions are hazardous
anything above 25 mph print wind advisory warning */

let windSpeed = (7+11+10+5+12+11+13)/7;

if (windSpeed < 0) {                         // wanted to make sure we dont process a negative number
    console.log("Illegal value provided");
} else if(windSpeed < 5) {
    console.log("Slightly windy");
} else if (windSpeed >= 5 && windSpeed < 15) {      // make sure to put >= not > because want to include 5 value
    console.log("Moderate winds, grab a jacket"); 
} else if (windSpeed <= 15 && windSpeed > 25) {     // make sure to put <= not < because want to include 15 value
    console.log("Conditions are hazardous");
} else if (windSpeed >= 25) {
    console.log("Wind advisory warning");
} 
