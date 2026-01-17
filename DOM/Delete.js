// How to delete the element

// let head1 =  document.querySelector("h1");
// let btn = document.querySelector("button");

// let myDiv = document.querySelector("div");

// let btn2 = myDiv.querySelector("button");
// let para = myDiv.querySelector("p");

// console.log(btn2, para);

// btn.addEventListener("click", () => {
//     head1.remove();
// });

let tagH1 = document.getElementsByTagName("h1");
let queryH1 = document.querySelectorAll("h1");
let btn3 = document.querySelector("button");
let myHead = document.querySelector("#head1");

// console.log(tagH1);
// console.log(queryH1);

queryH1.forEach((e) => {
    console.log(e);
});

btn3.addEventListener("click", () => {
    myHead.remove();
    console.log(tagH1);
    console.log(queryH1);
});