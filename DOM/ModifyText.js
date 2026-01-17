// Modifying DOM Elements

console.log("------------------------Modifying DOM element-------------------------");

let header = document.querySelector("h1");
console.log(header);
console.log(header.innerHTML);
console.log(header.innerText);
console.log(header.textContent);

let div = document.querySelector("div");
console.log(div);
console.log(div.innerHTML); // Accepts text tags and space
console.log(div.innerText); // Accepts only text
console.log(div.textContent); // Accepts text and empty space

// Modifying DOM Elements using innerHTML

let header1 = document.querySelector("h1");
header1.innerHTML = "This is modified Heading Text";

let anchor1 = document.querySelector("a");
anchor1.innerHTML = "This is modified Anchor Text";




