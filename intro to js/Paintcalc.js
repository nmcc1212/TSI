// A program to calculate the cost of painting a room

const prompt = require('prompt-sync')();
let walls
let windows
let cost
let count=0
count = parseInt(count);
function inputs() {
    walls = prompt("Enter the number of walls: ");
    windows = prompt("Enter the number of windows and doors: ");
    cost = prompt("Enter the cost of paint per litre: ");
    count = count + 1;
    console.log(count)
}
inputs();
if (isNaN(walls) || isNaN(windows) || isNaN(cost) || walls < 0 || windows < 0 || cost < 0) {
    console.log("You did not enter a positive number for the number of walls.");
    if (count < 5) {
        inputs();
    }
    else {
        console.log("u r a dumb idiot letters != numbers.");
        return;
    }
}
walls = parseInt(walls);
windows = parseInt(windows);
cost = parseInt(cost);
let paintefficiency = 6.25;
paintefficiency = parseInt(paintefficiency);
walls = walls + 1;
windows = windows + 1;
let wallheight
let wallwidth
let wallarea
let windowheight
let windowwidth
let windowarea
let totalarea
let paintneeded
for(let i=1; i < walls; i++) {
    wallheight = prompt("Enter the height of wall " + i + ": ");
    wallwidth = prompt("Enter the width of wall " + i + ": ");
    wallheight = parseInt(wallheight);
    wallwidth = parseInt(wallwidth);
    wallarea = wallheight * wallwidth;
    console.log("The area of wall " + i + " is " + wallarea + " square metres.");
}
for(let i=1; i < windows; i++)
{
    windowheight = prompt("Enter the height of window " + i + ": ");
    windowwidth = prompt("Enter the width of window " + i + ": ");
    windowheight = parseInt(windowheight);
    windowwidth = parseInt(windowwidth);
    windowarea = windowheight * windowwidth;
    console.log("The area of window " + i + " is " + windowarea + " square metres.");
}
totalarea = wallarea - windowarea;
console.log("The total area to be painted is " + totalarea + " square metres.");
paintneeded = totalarea / paintefficiency;
console.log("The amount of paint needed is " + paintneeded + " litres.");