// Access for DOM Elements

console.log("------------------------Access DOM element-------------------------");

// 1. Accessing element using Id

console.log("-------------------------Using Id-------------------------------");

console.log(document);
console.log(document.getElementById("head"));
console.log(document.getElementById("para"));
console.log(document.getElementById("anchor"));

// Accessing individual elements from HTMLCollection

console.log("--------------Accessing individual elements from HTMLCollection----------------");

// 2. Accessing elements using ClassName

console.log("-----------------------Using ClassName-------------------------------");

console.log(document.getElementsByClassName("heading"));
console.log(document.getElementsByClassName("ele"));

let eleElements = document.getElementsByClassName("ele");
console.log(eleElements);
console.log(eleElements[0]);
console.log(eleElements[1]);

// 3. Accessing elements using TagName

console.log("-----------------------Using TagName-------------------------------");

let inputElement = document.getElementsByTagName("input");
console.log(inputElement);
console.log(inputElement[0]);
console.log(inputElement[1]);
console.log(inputElement[2]);

// 4. Accessing elements using Name attribute

console.log("-----------------------Using Name attribute-------------------------------");

let nameElement = document.getElementsByName("user");
let checkElement = document.getElementsByName("checkbox");
console.log(nameElement);
console.log(nameElement[0]);

console.log(checkElement);
console.log(checkElement[0]);

// 5. Accessing elements using querySelector

console.log("-----------------------Using querySelector-------------------------------");

let h1Tag = document.querySelector("h1");
console.log(h1Tag);
let h1Id = document.querySelector("#head");
console.log(h1Id);
let h1Class = document.querySelector(".heading");
console.log(h1Class);

// 6. Accessing elements using querySelectorAll

console.log("-----------------------Using querySelectorAll-------------------------------");

let input = document.querySelector("input");
console.log(input);
let inputAll = document.querySelectorAll("input");
console.log(inputAll);

// console.log(document.getElementById("head").parentNode);
// console.log(document.getElementById("para").childNodes);
// console.log(document.getElementById("head").parentNode === document.body);
// console.log(document.getElementById("para").parentNode === document.head);
