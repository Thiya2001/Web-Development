// 1.if Statement

let a = 5000;
// let a = false;
// let a = "";
// let a = null;
// let a;
// let a = 0;
// let a = NaN;

console.log(a % 2 == 0);

if(a) {
    console.log("this block for truthy value");
}
else {
    console.log("this block for falsy value");
}

// Double and triple equals

// let x = 5;
// let y = "5";

// let x = 0;
// let y = false;

let x = 1;
let y = true;

// let z = 2;

console.log(x == y); // Check Only Values.
console.log(x === y); // Check Values and datatype.

let amount1 = 5000;

if(amount1 > 3000) {
    console.log("First Stage"); // Will be executed.

    amount1 = amount1 - 3000;
}
if(amount1 > 3000) {
    console.log("Last Stage"); // Not will be executed.
}

let amount2 = 1000;

if(amount2 > 500) {
    console.log("It will be Executed");
}
else {
    console.log("Not will be Executed");
}

// Odd or Even Number

let f = 1005;

if(f % 2 == 1) {
    console.log(`${f} it is Odd Number`);
}
else {
    console.log(`${f} it is Even Number`);
}

let number = 50;

let res = number % 2 == 0 ? "Even number" : "Odd number";
console.log(`${number} It is a ` + res);


// 2.ifelse Statement

let r = 19000;

if(r > 15000) {
    console.log(`${r} it is High Level Rupees`);
}
else if(r > 10000) {
    console.log(`${r} it is Medium Level`);
}
else if(r > 1500) {
    console.log(`${r} it is Medium Level`);
}
else {
    console.log(`${r} it is Low Level`);
}

// Leap Year or not

let d = 2004;

if((d % 4 === 0 || d % 400 === 0) && d % 100 != 0) {
    console.log(`${d} It is a Leap year`);
}
else {
    console.log(`${d} It is not a leap year`);
}

// 3.switch case

let day = "Wednesday";

switch (day) {
    case "Sunday":
        console.log("Chicken Biryani");
        break;
    case "Monday":
        console.log("idiyappam");
        break;
    case "Tuesday":
        console.log("Sambar vadai");
        break;
    case "Wednesday":
        console.log("Lemon Rice");
        break;
    case "Thursday":
        console.log("Puli Sadham");
        break;
    case "Friday":
        console.log("Idli");
        break;
    case "Saturday":
        console.log("Fried Rice");
        break;

    default:
        console.log("Not Printed");
        break;
}

// 1.For Loop

for(var i=0;i<=100;i++) {
    console.log(i);
}
console.log(i);

for(let i=200;i<=300;i++) {
    console.log(i);
}

for(let i=1;i<=50;i++) {
    if(i % 2 == 0)
        console.log(i);
}

// Print 500 to 300
console.log("It will Print 500 to 300");

for(let i=500;i>=300;i--) {
    console.log(i);
}

// Print 50 to 150 only odd numbers

console.log("It will Print 50 to 150 only Odd Numbers");

for(let i=50;i<=150;i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

// First 100 number total

console.log("It will Print first 1 to 100 numbers find total");
let sum1 = 0;
for(let i=1;i<=100;i++){
    sum1 = sum1 + i;
}
console.log(sum1);

console.log("It will Print first 100 to 200 numbers find total");
let sum2 = 0;
for(let i=100;i<=200;i++) {
    sum2 = sum2 + i;
}
console.log(sum2);

// Iterate the array

console.log("Iterate the array");

let arr1 = ["csk", "rr", "srh", "mi", "dc"];

for(let i=0;i<arr1.length;i++) {
    console.log(arr1[i]);
}

console.log("Using for of loop");

for(let i of arr1) {
    console.log(i);
}

// Array Iteration

console.log("Using for of loop");

let arr2 = ["Shirt", "T shirt", "Track Pant", "Jeans Pant", "Lycra Pant"]

for(const i of arr2) {
    console.log(i);
}

// Object Iteration

let obj = {
    name : "msd",
    nickName : "thala",
    role : "finishing matches",
    speciality : "hitting sixes"
};

console.log("Print Object Iteration");

for(let i in obj) {
    console.log(i + " - " + obj[i]);
}

