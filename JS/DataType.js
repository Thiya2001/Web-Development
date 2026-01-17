let myNumber = 123;
let myDecimalNumber = 123.45;
console.log(myNumber, myDecimalNumber);
console.log(typeof myNumber, typeof myDecimalNumber);

let stringwithSingleQuotes = 'I am String with single quotes';
let stringwithDoubleQuotes = "I am String with double quotes";
let stringwithBackticks = `I am String with backTicks
I am  from 2nd line`;
// Back tic for template literal
let secondAdvantage = `I can access number variable here ${myNumber}`;
console.log(stringwithSingleQuotes, stringwithDoubleQuotes);
console.log(stringwithBackticks);
console.log(typeof stringwithSingleQuotes, typeof stringwithDoubleQuotes);
console.log(secondAdvantage);

let a = 10;
let b = 20;
let res1 = `the add of ${a} and ${b} is ${a + b}`;
console.log(res1);

let res2 = `the sub of ${a} and ${b} is ${a - b}`;
console.log(res2);

let res3 = `the mul of ${a} and ${b} is ${a * b}`;
console.log(res3);

let res4 = `the div of ${a} and ${b} is ${a / b}`;
console.log(res4);

let booleanTrue = true;

console.log(booleanTrue, typeof booleanTrue);

let abc;
console.log(abc, typeof abc);

let xyz = null;
console.log(xyz, typeof xyz);

let number1 = 32498573956284893;
let number2 = 47463947894852615n;

console.log(number1, typeof number1);
console.log(number2, typeof number2);

let mySymbol = Symbol("mySymbol");
console.log(mySymbol, typeof mySymbol);

let ipl = ["CSK", "MI", "RR", "DC", "KKR", "SRH", "PXI", "GT", "LSG", "RCB"];

let anyData = [123, "Hello", true, null];

console.log(ipl);
console.log(ipl[0]);
console.log(ipl[4]);
console.log(ipl[9]);

console.log(anyData);
console.log(anyData[2]);

let person = {
    name: "MS Dhoni",
    age: 55,
    isCaptain: true,
    team: "India"
};

console.log(person);
console.log(person.team);




