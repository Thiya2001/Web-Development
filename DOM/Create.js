// Create Element

// console.log("--------------------------Create Element-----------------------------");

// let myDiv = document.querySelector("div");
// console.log(myDiv);

// let myHead = document.createElement("h1");

// myHead.innerHTML = "I am h1 created in js";
// myHead.id = "head1";
// myHead.className = "anyName";
// myHead.title = "I am tool tip";

// console.log(myHead);

// // Add the element inside the div

// console.log("--------------------------- Add the element inside the div-----------------------------");

// let myAnchor = document.createElement("a");

// myAnchor.innerHTML = "Youtube";
// myAnchor.href = "https://www.youtube.com";

// console.log(myAnchor);

// // myDiv.appendChild(myHead); // appendChile ==> Add One element
// // myDiv.appendChild(myAnchor);

// // myDiv.append(myHead, myAnchor); // append ==> Add More then element & last add the elements by append
// myDiv.prepend(myHead, myAnchor); // prepend ==> Add More then element & first add the elements by prepend

// //How to create the element

// console.log("----------------------------Create the element and Execute element--------------------------");

// let myOrder = document.querySelector("ol");

// let ipl = ["CSK", "MI", "KKR", "SRH", "RR", "GT", "DC", "LSG", "KXI", "RCB"];

// ipl.forEach((e, i, arr) => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = e;

//     myOrder.append(listItem);
// });

// console.log(ipl);
// console.log(myOrder);

// Button click to add the list

console.log("----------------------------Button click to add the list--------------------------");

let input = document.querySelector("input");
let btn = document.querySelector("button");
let unOrder = document.querySelector("ul");
let storage = [];

// console.log(input);
// console.log(btn);
// console.log(unOrder);

btn.addEventListener("click", () => {
    let listItem1 = document.createElement("li");
    listItem1.innerHTML = input.value;
    unOrder.append(listItem1);
    console.log(listItem1);
});







