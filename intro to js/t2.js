const prompt = require('prompt-sync')();
console.log('Input 2 numbers: ');
let num1 = prompt();
let num2 = prompt();
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1+num2);

//\\//\\//\\//\\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

let input = prompt("Enter a number between 1 and 10: ");
input = parseInt(input);
if (input == 1){
    console.log("1st on the list is: Walmart");
}
else if (input == 2){
    console.log("2nd on the list is: Amazon");
}
else if (input == 3){
    console.log("3rd on the list is: Exxon Mobil");
}
else if (input == 4){
    console.log("4th on the list is: Apple");
}
else if (input == 5){
    console.log("5th on the list is: UnitedHealth Group");
}
else if (input == 6){
    console.log("6th on the list is: CVS Health");
}
else if (input == 7){
    console.log("7th on the list is: Berkshire Hathaway");
}
else if (input == 8){
    console.log("8th on the list is: Alphabet");
}
else if (input == 9){
    console.log("9th on the list is: McKesson");
}
else if (input == 10){
    console.log("10th on the list is: Chevron");
}
else {
    console.log("You did not enter a number between 1 and 5.");
}

//\\//\\//\\//\\/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

let company = prompt("Enter a top 10 fortune 500 company: ");
company = company.toLowerCase();
switch(company) {
    case "walmart":
        console.log("Walmart is ranked 1st, With a revenue of $611.289 billion.");
        break;
    case "amazon":
        console.log("Amazon is ranked 2nd, With a revenue of $513.983 billion.");
        break;
    case "exxon Mobil":
        console.log("Exxon Mobil is ranked 3rd, With a revenue of $413.680 billion.");
        break;
    case "apple":
        console.log("Apple is ranked 4th, With a revenue of $394.328 billion.");
        break;
    case "unitedhealth group":
        console.log("UnitedHealth Group is ranked 5th, With a revenue of $324.162 billion.");
        break;
    case "cvs health":
        console.log("CVS Health is ranked 6th, With a revenue of $322.467 billion.");
        break;
    case "berkshire hathaway":
        console.log("Berkshire Hathaway is ranked 7th, With a revenue of $302.089 billion.");
        break;
    case "alphabet":
        console.log("Alphabet is ranked 8th, With a revenue of $282.836 billion.");
        break;
    case "mckesson":
        console.log("McKesson is ranked 9th, With a revenue of $263.966 billion.");
        break;
    case "chevron":
        console.log("Chevron is ranked 10th, With a revenue of $246.252 billion.");
        break;
    default:
        console.log("You did not enter a top 10 fortune 500 company.")
}